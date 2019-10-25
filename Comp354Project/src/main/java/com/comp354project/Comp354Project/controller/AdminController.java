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
    public @NotNull Iterable<Demo> getAccounts() {
        return adminService.getAllAccounts();
    }

    @GetMapping(path="/initDummyData")
    public @ResponseBody String instantiateRights() {
        return adminService.initDummyData();
    }

    @PostMapping("/editAccount")
    public @ResponseBody String updateAccount(@RequestParam int id, @RequestParam String email,
                                              @RequestParam String name){
        Demo newDemo = new Demo();
        newDemo.setId(id);
        newDemo.setName(name);
        newDemo.setEmail(email);
        Demo addedDemo = adminService.updateAccount(newDemo);

        return addedDemo.getName() + " updated.";
    }
}
