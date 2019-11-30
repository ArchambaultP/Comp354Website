package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
public interface ProductRepository extends CrudRepository<Product, Integer> {
    public List<Product> findByName(String name);

    @Query(value="SELECT * FROM product WHERE id_account= ?1", nativeQuery = true)
    List<Product> findById_account(Integer idAccount);
}