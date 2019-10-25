package com.comp354project.Comp354Project.Entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@Entity
public class Review {

    @Id
    @GeneratedValue
    private Integer idReview;

    @Null
    @ManyToOne
    @JoinColumn(name = "idProduct")
    private Product product;

    @Null
    @ManyToOne
    @JoinColumn(name = "idAccount")
    private Account account;

    @NotNull
    private Integer rating;

    @Null
    private String description;

    @Null
    private String reply;

    public Integer getId() {
        return idReview;
    }

    public void setId(Integer idReview) {
        this.idReview = idReview;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getIdReview() {
        return idReview;
    }

    public void setIdReview(Integer idReview) {
        this.idReview = idReview;
    }

    public String getReply() {
        return reply;
    }

    public void setReply(String reply) {
        this.reply = reply;
    }
}
