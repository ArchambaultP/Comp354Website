package com.comp354project.Comp354Project.controller;

import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.Entities.Demo;
import com.comp354project.Comp354Project.service.AdminServImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

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

    @GetMapping(path="/accounts")
    public Iterable<Account> getAccounts() {
        return adminService.getAllAccounts();
    }

    @GetMapping(path="/account/{id}")
    public Account getAccount(@PathVariable int id) {
        return adminService.getAccount(id);
    }

    @DeleteMapping(path="/account/{id}")
    public boolean deleteAccount(@PathVariable int id) {
        return adminService.deleteAccount(id);
    }

    @PostMapping(path="/account")
    public Account createAccount(@RequestBody Account account) {
        return adminService.save(account);
    }

    @PutMapping(path="/account")
    public Account updateAccount(@RequestBody Account account) {
        return adminService.save(account);
    }
}
