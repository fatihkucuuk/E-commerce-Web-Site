import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
import UserContext from '../../../context/UserContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [newComment, setNewComment] = useState({ rating: 0, comment: '' });
  const [newQuestion, setNewQuestion] = useState({ question: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Ürün detayları alınırken bir hata oluştu:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/comments/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error('Yorumlar alınırken bir hata oluştu:', error);
      }
    };

    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/questions/${id}`);
        setQuestions(response.data);
      } catch (error) {
        console.error('Sorular alınırken bir hata oluştu:', error);
      }
    };

    fetchProduct();
    fetchComments();
    fetchQuestions();
  }, [id]);

  const handleCommentChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const handleStarClick = (rating) => {
    setNewComment({ ...newComment, rating });
  };

  const addComment = async () => {
    try {
      await axios.post(`http://localhost:8080/api/comments`, { ...newComment, username: user.username }, {
        params: { productId: id },
      });
      setNewComment({ rating: 0, comment: '' });
      // Yorumları yeniden yükle
      const response = await axios.get(`http://localhost:8080/api/comments/${id}`);
      setComments(response.data);
    } catch (error) {
      console.error('Yorum eklenirken bir hata oluştu:', error);
    }
  };

  const addQuestion = async () => {
    try {
      await axios.post(`http://localhost:8080/api/questions`, { ...newQuestion, username: user.username }, {
        params: { productId: id },
      });
      setNewQuestion({ question: '' });
      // Soruları yeniden yükle
      const response = await axios.get(`http://localhost:8080/api/questions/${id}`);
      setQuestions(response.data);
    } catch (error) {
      console.error('Soru eklenirken bir hata oluştu:', error);
    }
  };

  if (!product) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-upper-section">
        <div className="product-image">
          {product.image1 && <img src={product.image1} alt={product.name} />}
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <table className="product-table">
            <tbody>
              <tr>
                <td className="label">Kategori:</td>
                <td className="value">{product.category}</td>
              </tr>
              <tr>
                <td className="label">Cinsiyet:</td>
                <td className="value">{product.gender}</td>
              </tr>
              <tr>
                <td className="label">Renk:</td>
                <td className="value">{product.color}</td>
              </tr>
              <tr>
                <td className="label">Stok:</td>
                <td className="value">{product.stock}</td>
              </tr>
              <tr>
                <td className="label">Fiyat:</td>
                <td className="value">{product.price}₺</td>
              </tr>
            </tbody>
          </table>
          <button className="add-to-cart-button">Sepete Ekle</button>
        </div>
      </div>
      <div className="interaction-section">
        <div className="comments-section">
          <h2>Yorumlar</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <p><strong>{comment.username} | </strong> 
                <span className="rating2">
                  {[...Array(5)].map((star, index) => (
                    <span key={index} className={index < comment.rating ? "filled" : ""}>☆</span>
                  ))}
                </span>
                </p>
                <p>{comment.comment}</p>
                <p>{new Date(comment.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
          {user ? (
            <div className="comment-form">
              <h3>Yorum Ekle</h3>
              <div className="rating">
                {[...Array(5)].map((star, index) => (
                  <span
                    key={index}
                    className={index < newComment.rating ? "filled" : ""}
                    id={`star${index + 1}`}
                    onClick={() => handleStarClick(index + 1)}
                  >
                    ☆
                  </span>
                ))}
              </div>
              <textarea
                name="comment"
                placeholder="Yorumunuz"
                id="commentText"
                value={newComment.comment}
                onChange={handleCommentChange}
              />
              <button onClick={addComment} id="commentButton">Yorum Ekle</button>
            </div>
          ) : (
            <p>Yorum yapabilmek için lütfen giriş yapın.</p>
          )}
        </div>
        <div className="questions-section">
          <h2>Sorular</h2>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>
                <p><strong>{question.username}</strong> sordu:</p>
                <p>{question.question}</p>
                {question.answer && (
                  <>
                    <p><strong>Admin Cevapladı:</strong></p>
                    <p>{question.answer}</p>
                  </>
                )}
                <p>{new Date(question.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
          {user ? (
            <div className="question-form">
              <h3>Soru Sor</h3>
              <textarea
                name="question"
                placeholder="Sorunuz"
                id="questionText"
                value={newQuestion.question}
                onChange={handleQuestionChange}
              />
              <button onClick={addQuestion} id="questionButton">Soruyu Gönder</button>
            </div>
          ) : (
            <p>Soru sorabilmek için lütfen giriş yapın.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
