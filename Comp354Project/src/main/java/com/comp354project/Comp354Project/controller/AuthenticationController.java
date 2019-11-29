package com.comp354project.Comp354Project.controller;
import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.Entities.PasswordReset;
import com.comp354project.Comp354Project.repository.AccountRepository;
import com.comp354project.Comp354Project.repository.PasswordResetRepository;
import com.comp354project.Comp354Project.utilities.PasswordHelper;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.comp354project.Comp354Project.utilities.EmailService;

import jodd.mail.Email;
import java.util.Arrays;
import java.util.Date;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(path="/auth")
public class AuthenticationController {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private PasswordResetRepository passwordResetRepository;

    private final PasswordHelper pwdHelper=new PasswordHelper();

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public String authenticateUser(@RequestParam("email") String email, @RequestParam("password") String pwd) {
        Account accRecord = accountRepository.findByEmail(email);
        JSONObject response = new JSONObject();
        response.put("error","Invalid Credentials");

        if(accRecord != null){
            byte[] recordPwd = accRecord.getPassword();
            byte[] inputPwd = pwdHelper.hash(pwd,accRecord.getSalt());
            if(Arrays.equals(recordPwd,inputPwd)){
                if(!accRecord.isActive()){
                    response.replace("error","Please confirm your email address.");
                }else{
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
        Account accRecord = accountRepository.findByEmail(email);

        if(accRecord != null){
            response.put("error",true);
            response.put("message","An account with this email already exist.");
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
            acc.setActive(false);

            try{
                accountRepository.save(acc);
                //response.put("registrationSuccess",true);
                confirmEmail(email);
                response.put("error",false);
                response.put("message", "A confirmation email will be sent to you shortly to activate your account.");
                /*
                response.put("id",acc.getId());
                response.put("name",acc.getName());
                response.put("email",acc.getEmail());
                response.put("canBuy",true);
                response.put("canSell",true);
                response.put("isAdmin",accRecord.isAdmin());
                response.put("isSuperAdmin",accRecord.isSuperAdmin());
                 */
            }catch(Exception e){
                response.put("error", true);
                response.put("message","Unexpected error occurred when creating the account.");
                //response.put("registrationSuccess",false);
            }
        }
        return response.toJSONString();
    }
    @RequestMapping(value="/confirmEmail", method = RequestMethod.POST)
    public String confirmEmail(@RequestParam("email") String email){
        String activationCode = pwdHelper.generateRecoveryCode();
        PasswordReset activation = new PasswordReset();
        activation.setEmail(email);
        activation.setCode(activationCode);
        String subject= "354TheStars Account Activation.";
        String instructionTitle = "Welcome to our site, follow the instructions below to activate your account";
        String instructions =  "Head over to 354TheStars. Click the 'Help' button on the top right of the page and select 'Activate Account'. Enter the activation code provided below along with your email address to activate your account.";
        String activationPage = "354TheStars";
        String activationUrl = "http://localhost:4200/";
        String codeName = "Activation Code";

        passwordResetRepository.save(activation);
        EmailService eService = new EmailService();
        String body = eService.buildEmailBody(instructionTitle,instructions,activationPage,activationUrl, codeName, activationCode);
        Email e= eService.buildEmail(email,subject,body);
        eService.sendEmail(e);
        return e.toString();
    }

    @RequestMapping(value="/resetpassword", method = RequestMethod.POST)
    public String resetPassword(@RequestParam("email") String email){
        JSONObject response = new JSONObject();

        PasswordReset pwdReset = new PasswordReset();
        String recoveryCode = pwdHelper.generateRecoveryCode();
        pwdReset.setEmail(email);
        pwdReset.setCode(recoveryCode);
        String subject = "354TheStars - Account Password Reset Request.";
        String instructionTitle = "Thank you for contacting us. Follow the instructions below to reset your password";
        String instructions = "Head over to 354TheStars. Click the 'Help' button on the top right of the page and select 'Reset Password'. Enter your email and the recovery code provided below to set a new password on your account. If you did not request to reset your password, please contact the authorities and ignore this email.";
        String page = "354TheStars";
        String url = "http://localhost:4200/";
        String recCode = "Password Recovery Code";

        try{
            passwordResetRepository.save(pwdReset);
            EmailService eService = new EmailService();
            String body = eService.buildEmailBody(instructionTitle,instructions,page,url,recCode,recoveryCode);
            Email e = eService.buildEmail(email, subject, body);
            eService.sendEmail(e);

            response.put("success",true);
            response.put("message","An email has been sent to the specified address. Please follow the instructions to reset your account's password.");
        }catch (Exception e){
            response.put("success",false);
            response.put("message","An unexpected error occurred. Please try again.");
        }

        return response.toJSONString();
    }

    /**
     * Endpoint used to confirm emails and/or reset account password.
     * @param email Email address associate with user account.
     * @param recoveryCode Unique randomly generated confirmation code.
     * @return true if there is an active recovery/activation record matching the email and code, false otherwise.
     */
    @RequestMapping(value="/passwordrecovery", method = RequestMethod.POST)
    public String passwordRecovery(@RequestParam("email") String email, @RequestParam("code") String recoveryCode){
        JSONObject response = new JSONObject();
        try{
            PasswordReset record = passwordResetRepository.findByCode(recoveryCode);
            Account acc = accountRepository.findByEmail(email);
            if(record.isActive() && (record.getEmail().equals(email))){
                record.setActive(false);
                passwordResetRepository.save(record);
                if(!acc.isActive()){
                    acc.setActive(true);
                    accountRepository.save(acc);
                }
                response.put("success",true);
                response.put("error",false);
            }else{
                response.put("error",true);
                response.put("message","Invalid code or email address.");

            }
        }catch(Exception e){
            response.put("error",true);
            response.put("message","Invalid code or email address.");
        }

        return response.toJSONString();
    }
}
