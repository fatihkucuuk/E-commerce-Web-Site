package com.project.forfinal.entity.DTOs;

import com.project.forfinal.constant.Role;
import lombok.Data;

@Data
public class UserDTO {
    private String username;
    private String email;
    private String password;
    private Role role;
}
