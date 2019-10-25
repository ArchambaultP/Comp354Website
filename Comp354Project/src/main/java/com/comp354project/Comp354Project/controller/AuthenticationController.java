package com.comp354project.Comp354Project.controller;
import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.repository.AccountRepository;
import com.comp354project.Comp354Project.utilities.PasswordHelper;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(path="/auth")
public class AuthenticationController {
    @Autowired
    private AccountRepository accountRepository;

    private final PasswordHelper pwdHelper=new PasswordHelper();

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public String authenticateUser(@RequestParam("email") String email, @RequestParam("password") String pwd) {
        List<Account> accRecord = accountRepository.findByEmail(email);
        JSONObject response = new JSONObject();

        if(!accRecord.isEmpty()){
            byte[] recordPwd = accRecord.get(0).getPassword();
            byte[] inputPwd = pwdHelper.hash(pwd,accRecord.get(0).getSalt());
            if(Arrays.equals(recordPwd,inputPwd)){
                response.put("login",true);
            }else{
                response.put("error","Invalid Credentials");
                response.put("login",false);
            }
        }else{
            response.put("error","Invalid Credentials");
            response.put("login",false);
        }
        return response.toJSONString();
    }
}
