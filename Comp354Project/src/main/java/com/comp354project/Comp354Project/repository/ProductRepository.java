package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Product;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;



public interface ProductRepository extends CrudRepository<Product, Integer> {
    public List<Product> findByName(String name);
    @Modifying
    @Transactional
    @Query(value="delete from Product c where c.idProduct = ?1")
    public void deleteById(Integer id);

    @Query(value="SELECT * FROM product WHERE id_account= ?1", nativeQuery = true)
    List<Product> findById_account(Integer idAccount);

    @Query("SELECT t FROM #{#entityName} t WHERE t.id IN :ids")
    Product findByIdOverride(@Param("ids") Integer id);
}