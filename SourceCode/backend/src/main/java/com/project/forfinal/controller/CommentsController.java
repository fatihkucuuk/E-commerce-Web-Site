package com.project.forfinal.controller;

import com.project.forfinal.entity.Comments;
import com.project.forfinal.entity.Questions;
import com.project.forfinal.repository.CommentsRepository;
import com.project.forfinal.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentsController {

    @Autowired
    private CommentsRepository commentsRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @GetMapping("/{productId}")
    public List<Comments> getCommentsByProductId(@PathVariable Long productId) {
        return commentsRepository.findByProductsId(productId);
    }

    @GetMapping
    public List<Comments> getAllComments() {
        return commentsRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Comments> addQuestion(@RequestBody Comments comments, @RequestParam Long productId) {
        return productsRepository.findById(productId)
                .map(products -> {
                    comments.setProducts(products);
                    comments.setCreatedAt(LocalDateTime.now());
                    return ResponseEntity.ok(commentsRepository.save(comments));
                })
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
}