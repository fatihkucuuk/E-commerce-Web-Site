package com.project.forfinal.service;

import com.project.forfinal.constant.ProductStatus;
import com.project.forfinal.constant.Role;
import com.project.forfinal.entity.DTOs.ProductsDTO;
import com.project.forfinal.entity.DTOs.UpdateAnswerDTO;
import com.project.forfinal.entity.DTOs.UpdateProductsDTO;
import com.project.forfinal.entity.DTOs.UserDTO;
import com.project.forfinal.entity.Products;
import com.project.forfinal.entity.Questions;
import com.project.forfinal.entity.User;
import com.project.forfinal.repository.ProductsRepository;
import com.project.forfinal.repository.QuestionsRepository;
import com.project.forfinal.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    private final ProductsRepository productsRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final QuestionsRepository questionsRepository;

    public AdminService(ProductsRepository productsRepository, UserRepository userRepository, PasswordEncoder passwordEncoder, QuestionsRepository questionsRepository) {
        this.productsRepository = productsRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.questionsRepository = questionsRepository;
    }


    public ResponseEntity<Products> addProduct(ProductsDTO productsDTO) {
        try {
            Products.ProductsBuilder productsBuilder = Products.builder()
                    .name(productsDTO.getName())
                    .category(productsDTO.getCategory())
                    .price(productsDTO.getPrice())
                    .gender(productsDTO.getGender())
                    .color(productsDTO.getColor())
                    .stock(productsDTO.getStock())
                    .productStatus(ProductStatus.ACTIVE)
                    .image1(productsDTO.getImage1())
                    .image2(productsDTO.getImage2());
            Products createdProduct = productsBuilder.build();
            productsRepository.save(createdProduct);
            return ResponseEntity.ok(createdProduct);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    public ResponseEntity<Products> updateProduct(UpdateProductsDTO productsDTO) {

       try {
           Optional<Products> existingProducts = productsRepository.findById(productsDTO.getId());

           if (existingProducts.isEmpty()) {
               return ResponseEntity.notFound().build();
           }
           Products updatedProducts = existingProducts.get();
           updatedProducts.setId(productsDTO.getId());
           updatedProducts.setName(productsDTO.getName());
           updatedProducts.setCategory(productsDTO.getCategory());
           updatedProducts.setPrice(productsDTO.getPrice());
           updatedProducts.setGender(productsDTO.getGender());
           updatedProducts.setColor(productsDTO.getColor());
           updatedProducts.setStock(productsDTO.getStock());
           updatedProducts.setImage1(productsDTO.getImage1());
           updatedProducts.setImage2(productsDTO.getImage2());

           productsRepository.save(updatedProducts);
           return ResponseEntity.ok(updatedProducts);
       } catch (Exception e) {
           return ResponseEntity.badRequest().body(null);
       }

    }

    public ResponseEntity<Questions> updateAnswer(UpdateAnswerDTO answerDTO) {
        try {
            Optional<Questions> existingQuestion = questionsRepository.findById(answerDTO.getId());

            if (existingQuestion.isEmpty()) {
                return ResponseEntity.notFound().build();
            }
            Questions updatedQuestion = existingQuestion.get();
            updatedQuestion.setAnswer(answerDTO.getAnswer());

            questionsRepository.save(updatedQuestion);
            return ResponseEntity.ok(updatedQuestion);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    public ResponseEntity<Products> deleteProduct(Long id) {
        Products products = productsRepository.findProductById(id);

        if (products != null) {
            products.setProductStatus(ProductStatus.PASSIVE);
            productsRepository.save(products);
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<Products> saveProduct(Long id) {
        Products products = productsRepository.findProductById(id);

        if (products != null) {
            products.setProductStatus(ProductStatus.ACTIVE);
            productsRepository.save(products);
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public Products updateStatus(Long id, ProductStatus status) {
        if (id == null) {
            throw new IllegalArgumentException("The given id must not be null");
        }

        Products products = productsRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
        products.setProductStatus(status);
        return productsRepository.save(products);
    }

    public ResponseEntity<User> addAdmin(UserDTO userDTO) {
        try {
            String encodedPassword = passwordEncoder.encode(userDTO.getPassword());

            User.UserBuilder userBuilder = User.builder()
                    .username(userDTO.getUsername())
                    .email(userDTO.getEmail())
                    .password(encodedPassword)
                    .role(Role.ADMIN);
            User createdUser = userBuilder.build();
            userRepository.save(createdUser);
            return ResponseEntity.ok(createdUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
