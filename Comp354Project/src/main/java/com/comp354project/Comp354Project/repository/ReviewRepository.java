package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Review;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends CrudRepository<Review, Integer> {
    public List<Review> findByProduct(Product product);
}