package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Payment;
import org.springframework.data.repository.CrudRepository;

public interface PaymentRepository extends CrudRepository<Payment, Integer> {

}