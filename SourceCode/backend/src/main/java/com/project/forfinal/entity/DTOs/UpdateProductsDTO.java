package com.project.forfinal.entity.DTOs;

import com.project.forfinal.constant.ProductStatus;
import lombok.Data;

@Data
public class UpdateProductsDTO {
    private Long id;
    private String name;
    private String category;
    private double price;
    private String gender;
    private String color;
    private String stock;
    private String image1;
    private String image2;
}