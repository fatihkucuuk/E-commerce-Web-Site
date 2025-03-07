package com.project.forfinal.service;

import com.project.forfinal.entity.Comments;
import com.project.forfinal.entity.DTOs.CommentsDTO;
import com.project.forfinal.repository.CommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {
    @Autowired
    private CommentsRepository commentRepository;

    public List<CommentsDTO> getAllCommentsByProductId(Long productId) {
        List<Comments> comments = commentRepository.findByProductsId(productId);
        return comments.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private CommentsDTO convertToDTO(Comments comment) {
        CommentsDTO commentsDTO = new CommentsDTO();
        commentsDTO.setId(comment.getId());
        commentsDTO.setUsername(comment.getUsername());
        commentsDTO.setRating(comment.getRating());
        commentsDTO.setComment(comment.getComment());
        commentsDTO.setProductId(comment.getProducts().getId());
        return commentsDTO;
    }
}

