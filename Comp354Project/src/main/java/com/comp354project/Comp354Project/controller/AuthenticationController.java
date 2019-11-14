package com.comp354project.Comp354Project.controller;
import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.repository.AccountRepository;
import com.comp354project.Comp354Project.utilities.PasswordHelper;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

//import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

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
        Account accRecord = accountRepository.findByEmail(email);
        JSONObject response = new JSONObject();
        response.put("login",false);
        response.put("error","Invalid Credentials");

        if(accRecord != null){
            byte[] recordPwd = accRecord.getPassword();
            byte[] inputPwd = pwdHelper.hash(pwd,accRecord.getSalt());
            if(Arrays.equals(recordPwd,inputPwd)){
                //response.replace("login",true);
                response.remove("login");
                response.put("id",accRecord.getId());
                response.put("name",accRecord.getName());
                response.put("email",accRecord.getEmail());
                response.put("canBuy",accRecord.isCanBuy());
                response.put("canSell",accRecord.isCanSell());
                response.put("isAdmin",accRecord.isAdmin());
                response.put("isSuperAdmin",accRecord.isSuperAdmin());
                response.remove("error");
            }
        }
        return response.toJSONString();
    }

    @RequestMapping(value="/register", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public String registerUser(@RequestParam("email") String email, @RequestParam("password") String pwd
            ,@RequestParam("name") String name, @RequestParam("address") String address, @RequestParam("city") String city
            , @RequestParam("province") String province, @RequestParam("country") String country
            , @RequestParam("postalCode") String postalCode, @RequestParam("phone") String phone){

        JSONObject response = new JSONObject();
        //ArrayList<String> errors = new ArrayList<>();
        response.put("registrationSuccess",false);
        Account accRecord = accountRepository.findByEmail(email);

        if(accRecord != null){
            response.put("error","An account with this email already exist.");
        }else if(!email.isEmpty()&& !pwd.isEmpty() && !name.isEmpty()){
            Account acc = new Account();
            String salt = pwdHelper.getSalt();
            acc.setPassword(pwdHelper.hash(pwd,salt));
            acc.setSalt(salt);
            acc.setEmail(email);
            acc.setName(name);
            acc.setAddress1(address);
            acc.setCity(city);
            acc.setProvince(province);
            acc.setCountry(country);
            acc.setPostalCode(postalCode);
            acc.setPhone(phone);
            acc.setDatejoined(new Date(0));
            acc.setCanBuy(true);
            acc.setCanSell(true);

            try{
                accountRepository.save(acc);
                response.remove("registrationSuccess");
                response.put("id",acc.getId());
                response.put("name",acc.getName());
                response.put("email",acc.getEmail());
                response.put("canBuy",true);
                response.put("canSell",true);
                response.put("isAdmin",accRecord.isAdmin());
                response.put("isSuperAdmin",accRecord.isSuperAdmin());
            }catch(Exception e){
                response.put("error","Unexpected error occurred when creating the account.");
            }

        }
        return response.toJSONString();
    }
}
