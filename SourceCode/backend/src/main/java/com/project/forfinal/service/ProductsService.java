package com.project.forfinal.service;

import com.project.forfinal.constant.ProductStatus;
import com.project.forfinal.entity.Products;
import com.project.forfinal.repository.ProductsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsService {
    private final ProductsRepository productsRepository;

    private static final Logger logger = LoggerFactory.getLogger(ProductsService.class);


    public ProductsService(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public List<Products> findAllActiveProducts() {
        try {
            return productsRepository.findByProductStatus(ProductStatus.ACTIVE);
        } catch (Exception e) {
            logger.error("Error fetching products: ", e);
            throw new RuntimeException("Error fetching products", e);
        }
    }

    public List<Products> findAllPassiveProducts() {
        try {
            return productsRepository.findByProductStatus(ProductStatus.PASSIVE);
        } catch (Exception e) {
            logger.error("Error fetching products: ", e);
            throw new RuntimeException("Error fetching products", e);
        }
    }

    public Products getProductsById(Long id) {
        return productsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Error fetching product by id: " + id));
    }
}

