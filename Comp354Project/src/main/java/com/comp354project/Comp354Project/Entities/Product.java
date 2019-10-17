package com.comp354project.Comp354Project.Entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.List;

@Entity(name="Product")
public class Product {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idProduct;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "idCategory")
    private Category category;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "idAccount")
    private Account account;

    @NotNull
    @Column(length = 45)
    private String name;

    @NotNull
    @Column(length = 400)
    private String description;

    @NotNull
    private Double price;

    @NotNull
    private Integer quantity;

    @Null
    private String brand;

    @NotNull
    private boolean permanentPosting;

    @OneToMany(
            mappedBy = "product"
    )
    private List<Review> reviews;

    public Integer getId() {
        return idProduct;
    }

    public void setId(Integer id) {
        this.idProduct = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public boolean isPermanentPosting() {
        return permanentPosting;
    }

    public void setPermanentPosting(boolean permanentPosting) {
        this.permanentPosting = permanentPosting;
    }
}
