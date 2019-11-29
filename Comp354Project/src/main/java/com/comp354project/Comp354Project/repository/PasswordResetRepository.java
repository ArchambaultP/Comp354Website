package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.PasswordReset;
import org.springframework.data.repository.CrudRepository;

public interface PasswordResetRepository extends CrudRepository<PasswordReset,Integer> {
    PasswordReset findByCode(String code);
}
