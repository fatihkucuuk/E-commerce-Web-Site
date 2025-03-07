package com.project.forfinal.entity.DTOs;

import lombok.Data;

@Data
public class CommentsDTO {
    private Long id;
    private String username;
    private int rating;
    private String comment;
    private Long productId;

    // Getters and Setters
}