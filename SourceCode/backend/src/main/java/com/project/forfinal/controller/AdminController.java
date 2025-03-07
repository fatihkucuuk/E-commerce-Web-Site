package com.project.forfinal.controller;

import com.project.forfinal.constant.ProductStatus;
import com.project.forfinal.entity.AuthenticationRequest;
import com.project.forfinal.entity.AuthenticationResponse;
import com.project.forfinal.entity.DTOs.ProductsDTO;
import com.project.forfinal.entity.DTOs.UpdateProductsDTO;
import com.project.forfinal.entity.DTOs.UserDTO;
import com.project.forfinal.entity.Products;
import com.project.forfinal.entity.User;
import com.project.forfinal.repository.UserRepository;
import com.project.forfinal.service.AdminService;
import com.project.forfinal.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;
    private final UserRepository userRepository;
    private final AuthenticationService authenticationService;

    @PostMapping("/add-products")
    public ResponseEntity<Products> addProduct(@RequestBody ProductsDTO productsDTO) {
        return adminService.addProduct(productsDTO);
    }

    @PostMapping("/update-products")
    public ResponseEntity<Products> updateProduct(@RequestBody UpdateProductsDTO updateProductsDTO) {
        return adminService.updateProduct(updateProductsDTO);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Products> deleteProduct(@PathVariable Long id) {
        return adminService.deleteProduct(id);
    }

    @PutMapping("/restore-product/{id}")
    public ResponseEntity<Products> restoreProduct(@PathVariable Long id) {
        return adminService.saveProduct(id);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PutMapping("/products/status")
    public ResponseEntity<Products> updateStatus(Long id, ProductStatus status) {
        if (id == null) {
            throw new IllegalArgumentException("The given id must not be null");
        }
        Products updatedProduct = adminService.updateStatus(id, status);
        return ResponseEntity.ok(updatedProduct);
    }

    @PostMapping("/add-admin")
    public ResponseEntity<User> addUser(@RequestBody UserDTO userDTO) {
        return adminService.addAdmin(userDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> adminLogin(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.adminLogin(request));
    }
}
