import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import "./AnswerQuestion.css";

const AnswerQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/admin/questions`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        setQuestions(response.data);
      } catch (error) {
        console.error("Sorular alınırken bir hata oluştu:", error);
        message.error("Sorular alınırken bir hata oluştu.");
      }
    };

    fetchQuestions();
  }, []);

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    setAnswer(question.answer || "");
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleUpdateAnswer = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${apiUrl}/api/questions/answer`, {
          id: selectedQuestion.id,
          answer,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
  
        if (response.status === 200) {
          message.success("Cevap başarıyla güncellendi.");
          setQuestions(questions.map(q => q.id === selectedQuestion.id ? { ...q, answer } : q));
          setSelectedQuestion(null);
        } else {
          message.error("Cevap güncelleme işlemi başarısız oldu.");
        }
      } catch (error) {
        console.error("Cevap güncellenirken bir hata oluştu:", error);
        message.error("Cevap güncellenirken bir hata oluştu.");
      }
    };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Soruları Cevapla</h2>
      <table className="questions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kullanıcı Adı</th>
            <th>Soru</th>
            <th>Cevap</th>
            <th>Cevapla</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(question => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>{question.username}</td>
              <td>{question.question}</td>
              <td>{question.answer}</td>
              <td>
                <button onClick={() => handleQuestionSelect(question)} className="btn btn-primary" id={`question-${question.id}`}>Cevapla</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedQuestion && (
        <div className="answer-form">
          <h2 className="form-title">Soru Cevapla</h2>
          <form onSubmit={handleUpdateAnswer}>
            <div className="form-group">
              <label htmlFor="answer">Cevap:</label>
              <textarea
                id="answer"
                name="answer"
                value={answer}
                onChange={handleAnswerChange}
                required
              />
            </div>
            <button type="submit" id="answerButton" className="btn btn-primary">Cevapla</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AnswerQuestion;
