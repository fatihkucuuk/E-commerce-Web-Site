package com.project.forfinal.controller;

import com.project.forfinal.entity.Products;
import com.project.forfinal.service.ProductsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProductsController {
    private final ProductsService productsService;

    public ProductsController(ProductsService productsService) {
        this.productsService = productsService;
    }

    @GetMapping("/products")
    public List<Products> getAllProducts() {
        return productsService.findAllActiveProducts();
    }

    @GetMapping("/passive-products")
    public List<Products> getAllPassiveProducts() {
        return productsService.findAllPassiveProducts();
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable Long id) {
        Products products = productsService.getProductsById(id);
        if (products != null) {
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
