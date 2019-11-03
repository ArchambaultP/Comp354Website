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

    /**
     * Insert given Account into database.
     * @param account - The Account to be inserted in the database.
     * @return The account inserted.
     */
    public Account save(Account account) {
        return accountRepository.save(account);
    }

    /**
     * Update an account in the db with its new values.
     * TODO: might not need this method if save() updates an Account that already exists (and not duplicate it)
     * @param account - the new account with an id
     * @return updated account
     */
    public Account updateAccount(Account account){
        Account addedAccount = accountRepository.getAccountByIdAccount(account.getId());
        addedAccount.setEmail(account.getEmail());
        addedAccount.setName(account.getName());
        addedAccount.setAddress1(account.getAddress1());
        addedAccount.setAddress2(account.getAddress2());
        addedAccount.setCity(account.getCity());
        addedAccount.setProvince(account.getProvince());
        addedAccount.setPostalCode(account.getPostalCode());
        addedAccount.setCountry(account.getCountry());
        addedAccount.setPhone(account.getPhone());
        addedAccount.setShippingAddress(account.getShippingAddress());
        addedAccount.setShippingCity(account.getShippingCity());
        addedAccount.setShippingPostalCode(account.getShippingPostalCode());
        addedAccount.setShippingCountry(account.getShippingCountry());
        addedAccount.setCanSell(account.isCanSell());
        addedAccount.setCanBuy(account.isCanBuy());
        // TODO: check if current user is SuperAdmin to setAdmin()

        accountRepository.save(addedAccount);

        return addedAccount;
    }
}
