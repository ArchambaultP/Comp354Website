package com.comp354project.Comp354Project.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Rights {

    @Id
    @GeneratedValue
    private Integer idRights;

    private String name;

    @ManyToMany
    private List<Account> accounts = new ArrayList<>();

    public Integer getId() {
        return idRights;
    }

    public void setId(Integer rightsId) {
        this.idRights = rightsId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<Account> accounts) {
        this.accounts = accounts;
    }
}
