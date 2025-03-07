package com.project.forfinal.controller;

import com.project.forfinal.entity.Questions;
import com.project.forfinal.repository.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin/questions")
public class QuestionsAdminController {

    @Autowired
    private QuestionsRepository questionsRepository;

    @GetMapping
    public List<Questions> getAllQuestions() {
        return questionsRepository.findAll();
    }

    @PutMapping("/{id}/answer")
    public ResponseEntity<Questions> answerQuestion(@PathVariable Long id, @RequestBody Questions updatedQuestion) {
        return questionsRepository.findById(id)
                .map(question -> {
                    question.setAnswer(updatedQuestion.getAnswer());
                    questionsRepository.save(question);
                    return ResponseEntity.ok(question);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
