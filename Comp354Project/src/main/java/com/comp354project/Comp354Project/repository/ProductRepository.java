package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
    public Product findByName(String name);
}