package com.project.forfinal.entity;

import com.project.forfinal.constant.ProductStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.parameters.P;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="category")
    private String category;

    @Column(name="price")
    private double price;

    @Column(name="gender")
    private String gender;

    @Column(name="color")
    private String color;

    @Column(name = "stock")
    private String stock;

    @Enumerated(EnumType.STRING)
    @Column(name = "is_active")
    private ProductStatus productStatus = ProductStatus.ACTIVE;

    @Column(name="image1")
    private String image1;

    @Column(name="image2")
    private String image2;
}
