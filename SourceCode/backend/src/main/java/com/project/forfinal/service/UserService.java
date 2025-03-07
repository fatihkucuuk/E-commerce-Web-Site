package com.project.forfinal.service;

import com.project.forfinal.entity.DTOs.UserProfileDTO;
import com.project.forfinal.entity.User;
import com.project.forfinal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserProfileDTO getUserProfile(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
        return new UserProfileDTO(user.getUsername(), user.getEmail());
    }

    public UserProfileDTO updateUserProfile(String username, UserProfileDTO userProfileDTO) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
        user.setEmail(userProfileDTO.getEmail());
        if (!userProfileDTO.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(userProfileDTO.getPassword()));
        }
        userRepository.save(user);
        return new UserProfileDTO(user.getUsername(), user.getEmail());
    }
}
