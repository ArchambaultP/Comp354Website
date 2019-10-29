package com.comp354project.Comp354Project.Entities;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.Lob;


@Entity(name="Account")
public class Account {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idAccount;

    @NotNull
    private String email;

    @NotNull
    private String name;

    @NotNull
    @Lob
    private byte[] password;

    @NotNull
    private String salt;

    @NotNull
    private String address1;

    @Null
    private String address2;

    @NotNull
    private String city;

    @NotNull
    private String province;

    @NotNull
    private String postalCode;

    @NotNull
    private String Country;

    @NotNull
    private String phone;

    @Null
    private String shippingAddress;

    @Null
    private String shippingCity;

    @Null
    private String shippingPostalCode;

    @Null
    private String shippingCountry;

    @NotNull
    private Date datejoined;

    private boolean canSell;
    private boolean canBuy;
    private boolean isAdmin;
    private boolean isSuperAdmin;

    @OneToMany(
            mappedBy = "account",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Product> productList = new ArrayList<>();

    @OneToMany(
            mappedBy = "account"
    )
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(
            mappedBy = "account",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<AccountOrder> orders = new ArrayList();

    public Account()
    {
        super();
        datejoined = new Date();
        canSell = false;
        canBuy = false;
        isAdmin = false;
        isSuperAdmin = false;
    }

    public Integer getId() {
        return idAccount;
    }

    public void setId(Integer idAccount) {
        this.idAccount = idAccount;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getPassword() {
        return password;
    }

    public void setPassword(byte[] password) {
        this.password = password;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public String getShippingCity() {
        return shippingCity;
    }

    public void setShippingCity(String shippingCity) {
        this.shippingCity = shippingCity;
    }

    public String getShippingPostalCode() {
        return shippingPostalCode;
    }

    public void setShippingPostalCode(String shippingPostalCode) {
        this.shippingPostalCode = shippingPostalCode;
    }

    public String getShippingCountry() {
        return shippingCountry;
    }

    public void setShippingCountry(String shippingCountry) {
        this.shippingCountry = shippingCountry;
    }

    public Date getDatejoined() {
        return datejoined;
    }

    public void setDatejoined(Date datejoined) {
        this.datejoined = datejoined;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public List<AccountOrder> getOrders() {
        return orders;
    }

    public void setOrders(List<AccountOrder> orders) {
        this.orders = orders;
    }

    public boolean isCanSell() {
        return canSell;
    }

    public void setCanSell(boolean canSell) {
        this.canSell = canSell;
    }

    public boolean isCanBuy() {
        return canBuy;
    }

    public void setCanBuy(boolean canBuy) {
        this.canBuy = canBuy;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public boolean isSuperAdmin() {
        return isSuperAdmin;
    }

    public void setSuperAdmin(boolean superAdmin) {
        isSuperAdmin = superAdmin;
    }

}
