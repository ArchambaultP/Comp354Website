package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Demo;
import org.springframework.data.repository.CrudRepository;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface DemoRepository extends CrudRepository<Demo, Integer> {
    public Demo findByEmail(String email);
    public Demo getDemoById(int id);
}