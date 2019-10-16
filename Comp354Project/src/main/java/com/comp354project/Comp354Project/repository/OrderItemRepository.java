package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.OrderItem;
import org.springframework.data.repository.CrudRepository;

public interface OrderItemRepository extends CrudRepository<OrderItem, Integer> {

}