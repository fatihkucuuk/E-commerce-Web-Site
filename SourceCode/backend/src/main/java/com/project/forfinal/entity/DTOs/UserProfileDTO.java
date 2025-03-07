package com.project.forfinal.entity.DTOs;

import lombok.Data;

@Data
public class UserProfileDTO {
    private String username;
    private String email;
    private String password;

    public UserProfileDTO(String username, String email) {
        this.username = username;
        this.email = email;
    }
    public UserProfileDTO() {
    }
}

