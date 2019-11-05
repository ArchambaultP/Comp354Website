package com.comp354project.Comp354Project.Entities;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity(name="Address")
public class Address {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idAddress;

    @ManyToOne
    @JoinColumn(name = "idAccount")
    private Account account;
    private String address1;
    private String address2;
    private String city;
    private String province;
    private String postalCode;
    private String Country;
    private boolean isBilling;
    private boolean isShipping;

    public Account getAccount(){
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public boolean getIsBilling(){
        return isBilling;
    }

    public void setIsBilling(boolean isBilling){
        this.isBilling = isBilling;
    }

    public boolean getIsShipping(){
        return isShipping;
    }

    public void setIsShipping(boolean isShipping){
        this.isShipping = isShipping;
    }
}
