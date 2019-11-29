package com.comp354project.Comp354Project.controller;
import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.repository.AccountRepository;
import com.comp354project.Comp354Project.utilities.PasswordHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.json.simple.JSONObject;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/account")
public class AccountController {
    @Autowired
    private AccountRepository accountRepository;
    private final PasswordHelper pwdHelper=new PasswordHelper();

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

    /**
     * Change the password of a user account.
     * @param email Email address of the account to update the password.
     * @param password New password to set the account to.
     * @return JSON representation of the user account.
     */
    @RequestMapping(value="changepassword", method = RequestMethod.POST)
    public String changePassword(@RequestParam("email") String email,@RequestParam("pwd") String password){
        JSONObject response = new JSONObject();
        Account acc = accountRepository.findByEmail(email);

        if(acc != null){
            String salt = pwdHelper.getSalt();
            acc.setPassword(pwdHelper.hash(password,salt));
            acc.setSalt(salt);

            try{
                accountRepository.save(acc);
                response.put("id",acc.getId());
                response.put("name",acc.getName());
                response.put("email",acc.getEmail());
                response.put("canBuy",acc.isCanBuy());
                response.put("canSell",acc.isCanSell());
                response.put("isAdmin",acc.isAdmin());
                response.put("isSuperAdmin",acc.isSuperAdmin());
                response.put("error",false);
                response.put("message","Password successful updated. Please Sign In.");
            }catch(Exception e){
                response.put("error",true);
                response.put("message","An unexpected error occurred. Please try again.");
            }
        }else{
            response.put("error",true);
            response.put("message","Invalid email address.");
        }
        return response.toJSONString();
    }
}
