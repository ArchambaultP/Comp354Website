package com.comp354project.Comp354Project.repository;

import com.comp354project.Comp354Project.Entities.Account;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<Account, Integer> {

}