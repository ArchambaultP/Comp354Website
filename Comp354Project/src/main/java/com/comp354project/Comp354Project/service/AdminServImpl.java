package com.comp354project.Comp354Project.service;

import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.Entities.Demo;
import com.comp354project.Comp354Project.repository.AccountRepository;
import com.comp354project.Comp354Project.repository.DemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Controller to perform query Accounts from the database.
 *
 * @author ShifatKhan
 */
@Service
public class AdminServImpl {
    @Autowired
    private DemoRepository demoRepository; // Dummy data - TODO: replace this with Account

    @Autowired
    private AccountRepository accountRepository;

    /**
     * Gets all accounts from the database.
     * @return Iterable list of Accounts.
     */
    public Iterable<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    /**
     * Get Account with the id (key) provided.
     * @param id - account's id number
     * @return - The account with the id provided.
     */
    public Account getAccount(int id) {
        return accountRepository
                .findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account with ID: " + id + "not found."));
    }

    public boolean deleteAccount(int id) {
        accountRepository.deleteById(id);
        return true;
    }

    /**
     * Insert given Account into database.
     * @param account - The Account to be inserted in the database.
     * @return The account inserted.
     */
    public Account save(Account account) {
        return accountRepository.save(account);
    }
}
