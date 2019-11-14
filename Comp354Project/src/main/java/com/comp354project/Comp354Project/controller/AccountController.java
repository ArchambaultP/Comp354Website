package com.comp354project.Comp354Project.controller;
import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.json.simple.JSONObject;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/account")
public class AccountController {
    @Autowired
    private AccountRepository accountRepository;

    /**
     * Endpoint to check if an email is unique
     * @param email To be validated
     * @return JSON response.
     */
    @RequestMapping(value="/email/{email}", method = GET)
    public String isValidEmail(@PathVariable("email") String email){
        JSONObject response = new JSONObject();
        response.put("valid",true);
        Account acc = accountRepository.findByEmail(email);
        if(acc != null){
            response.put("error","An account with this email already exists.");
            response.replace("valid",false);
        }
        return response.toJSONString();
    }
}
