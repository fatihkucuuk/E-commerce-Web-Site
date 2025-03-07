package com.project.forfinal.repository;

import com.project.forfinal.constant.ProductStatus;
import com.project.forfinal.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
    Optional<Products> findById(Long id);

    List<Products> findByProductStatus(ProductStatus status);

    Products findProductById(Long id);
}
