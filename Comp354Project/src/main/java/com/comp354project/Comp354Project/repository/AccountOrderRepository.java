package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.Entities.AccountOrder;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AccountOrderRepository extends CrudRepository<AccountOrder, Integer> {
    List<AccountOrder> findAccountOrderByAccount_IdAccount(int id_account);
}