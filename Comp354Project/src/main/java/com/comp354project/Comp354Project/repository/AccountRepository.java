package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.Entities.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AccountRepository extends CrudRepository<Account, Integer> {
    Account findByEmail(String email);
    Account getAccountByIdAccount(int idAccount);
    public List<Account> findByName(String name);

    @Query("SELECT t FROM #{#entityName} t WHERE t.id IN :ids")
    Account findByIdOverride(@Param("ids") Integer id);
}