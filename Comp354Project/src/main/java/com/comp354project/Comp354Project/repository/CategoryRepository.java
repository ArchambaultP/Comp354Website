package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Category;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CategoryRepository extends CrudRepository<Category, Integer> {
    public List<Category> findByName(String name);
}