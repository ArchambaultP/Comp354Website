package com.comp354project.Comp354Project.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="password_recovery")
public class PasswordReset {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idPasswordReset;
    private String email;
    private String code;
    private boolean active;

    public PasswordReset() {
        active = true;
    }

    public Integer getIdPasswordReset() {
        return idPasswordReset;
    }

    public void setIdPasswordReset(Integer idPasswordReset) {
        this.idPasswordReset = idPasswordReset;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
