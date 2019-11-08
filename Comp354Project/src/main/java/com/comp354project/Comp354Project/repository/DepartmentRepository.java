package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Department;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface DepartmentRepository extends CrudRepository<Department, Integer> {
    public List<Department> findByName(String name);
}