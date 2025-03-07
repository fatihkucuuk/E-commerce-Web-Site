package com.project.forfinal.controller;

import com.project.forfinal.entity.DTOs.UpdateAnswerDTO;
import com.project.forfinal.entity.Questions;
import com.project.forfinal.repository.ProductsRepository;
import com.project.forfinal.repository.QuestionsRepository;
import com.project.forfinal.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/questions")
public class QuestionsController {

    @Autowired
    private QuestionsRepository questionsRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private AdminService adminService;

    @GetMapping("/{productId}")
    public List<Questions> getQuestionsByProductId(@PathVariable Long productId) {
        return questionsRepository.findByProductsId(productId);
    }

    @GetMapping("/get-all")
    public List<Questions> getAllQuestions() {
        return questionsRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Questions> addQuestion(@RequestBody Questions questions, @RequestParam Long productId) {
        return productsRepository.findById(productId)
                .map(products -> {
                    questions.setProducts(products);
                    questions.setCreatedAt(LocalDateTime.now());
                    return ResponseEntity.ok(questionsRepository.save(questions));
                })
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PostMapping("/answer")
    public ResponseEntity<Questions> updateAnswer(@RequestBody UpdateAnswerDTO updateAnswerDTO) {
        return adminService.updateAnswer(updateAnswerDTO);
    }

}