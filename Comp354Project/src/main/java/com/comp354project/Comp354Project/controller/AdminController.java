package com.comp354project.Comp354Project.controller;

import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.Entities.Demo;
import com.comp354project.Comp354Project.service.AdminServImpl;
import com.comp354project.Comp354Project.repository.AccountRepository;
import com.comp354project.Comp354Project.utilities.PasswordHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Simple controller to handle requests for Accounts.
 *
 * @author ShifatKhan
 */
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(path="/admin")
public class AdminController {

    @Autowired
    AdminServImpl adminService;

    @Autowired
    private AccountRepository accountRepository;

    // TODO: Remove - this was replaced with AuthController
    private final PasswordHelper pwdHelper = new PasswordHelper();

    @GetMapping(path="/accounts")
    public Iterable<Account> getAccounts() {
        return accountRepository.findAll();
    }

    @GetMapping(path="/accounts/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable(value = "id") int id)
            throws IllegalArgumentException {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account not found for id: " + id));
        return ResponseEntity.ok().body(account);
    }

    @PostMapping(path="/accounts")
    public Account createAccount(@Valid @RequestBody Account account) {
        return accountRepository.save(account);
    }

    // TODO: Remove - this was replaced with AuthController
    @PutMapping(path="/accounts/{id}")
    public ResponseEntity<Account> updateAccount(@PathVariable(value = "id") int id, @Valid @RequestBody Account accountDetails)
            throws IllegalArgumentException  {
        Account account =  accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account not found for id: " + id));

        String salt = pwdHelper.getSalt();
        account.setPassword(pwdHelper.hash(accountDetails.getPassword().toString(),salt));
        account.setSalt(salt);
        account.setEmail(accountDetails.getEmail());
        account.setName(accountDetails.getName());
        account.setAddress1(accountDetails.getAddress1() == null ? " " : accountDetails.getAddress1());
        account.setCity(accountDetails.getCity() == null ? " " : accountDetails.getCity());
        account.setProvince(accountDetails.getProvince() == null ? " " : accountDetails.getProvince());
        account.setCountry(accountDetails.getCountry() == null ? " " : accountDetails.getCountry());
        account.setPostalCode(accountDetails.getPostalCode() == null ? " " : accountDetails.getPostalCode());
        account.setPhone(accountDetails.getPhone() == null ? " " : accountDetails.getPhone());
        account.setDatejoined(new Date(0));
        account.setCanBuy(accountDetails.isCanBuy());
        account.setCanSell(accountDetails.isCanSell());

        // TODO: Set isAdmin if current user is SuperAdmin.
        // account.setAdmin(accountDetails.isAdmin());

        final Account updatedEmployee = accountRepository.save(account);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping(path="/accounts/{id}")
    public Map<String, Boolean> deleteAccount(@PathVariable(value = "id") int id)
            throws IllegalArgumentException {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found for id: " + id));

        accountRepository.delete(account);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
