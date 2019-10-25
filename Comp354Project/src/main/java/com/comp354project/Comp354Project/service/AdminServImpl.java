package com.comp354project.Comp354Project.service;

import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.Entities.Demo;
import com.comp354project.Comp354Project.Entities.Rights;
import com.comp354project.Comp354Project.repository.AccountRepository;
import com.comp354project.Comp354Project.repository.DemoRepository;
import com.comp354project.Comp354Project.repository.RightsRepository;
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
    private RightsRepository rightsRepository; // Dummy data
    @Autowired
    private DemoRepository demoRepository; // Dummy data - TODO: replace this with Account

    @Autowired
    private AccountRepository accountRepository;

    /**
     * Gets all accounts from the database.
     * @return Iterable list of Accounts.
     */
    public Iterable<Demo> getAllAccounts() {
        return demoRepository.findAll();
        //return accountRepository.findAll();
    }

    /**
     * Get Account with the id (key) provided.
     * @param id - account's id number
     * @return - The account with the id provided.
     */
    public Demo getAccount(int id) {
        return demoRepository
                .findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Demo with ID: " + id + "not found."));
        /*return accountRepository
                .findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account with ID: " + id + "not found."));
         */
    }

    /**
     * Insert given Account into database.
     * @param account - The Account to be inserted in the database.
     * @return The account inserted.
     */
    public Demo save(Demo account) {
        return demoRepository.save(account);
    }

    /**
     * Setup Dummy data for testing
     * @return
     */
    public String initDummyData()
    {

        List<Rights> rights = new ArrayList<>();
        if(rightsRepository.findByName("Buying") == null) {
            Rights buying = new Rights();
            //buying.setId(1);
            buying.setName("Buying");
            rightsRepository.save(buying);
            rights.add(buying);
        }

        if(rightsRepository.findByName("Selling") == null) {
            Rights selling = new Rights();
            // selling.setId(2);
            selling.setName("Selling");
            rightsRepository.save(selling);
            rights.add(selling);
        }

        if(rightsRepository.findByName("Admin") == null) {
            Rights admin = new Rights();
            // admin.setId(3);
            admin.setName("Admin");
            rightsRepository.save(admin);
            rights.add(admin);
        }

        if(rightsRepository.findByName("SuperAdmin") == null) {
            Rights superAdmin = new Rights();
            //superAdmin.setId(4);
            superAdmin.setName("SuperAdmin");
            rightsRepository.save(superAdmin);
            rights.add(superAdmin);
        }

        Demo temp;
        for (int i = 1; i <= 10; i++){
            temp = demoRepository.findByEmail("demo"+i+"@email.com");
            if(temp == null || temp.getEmail().isEmpty()){
                Demo acc = new Demo();
                acc.setEmail("demo"+i+"@email.com");
                acc.setName("demo"+i);
                demoRepository.save(acc);
            }
        }

        return "Done creating dummy data.";
    }

    /**
     * Update an account in the db with its new values.
     * @param account - the new account with an id
     * @return updated account
     */
    public Demo updateAccount(Demo account){
        Demo addedDemo = demoRepository.getDemoById(account.getId());
        addedDemo.setEmail(account.getEmail());
        addedDemo.setName(account.getName());
        demoRepository.save(addedDemo);

        return addedDemo;
    }
}
