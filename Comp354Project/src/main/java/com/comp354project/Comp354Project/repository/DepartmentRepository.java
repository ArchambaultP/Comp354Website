package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Department;
import org.springframework.data.repository.CrudRepository;

public interface DepartmentRepository extends CrudRepository<Department, Integer> {
    public Department findByName(String name);
}