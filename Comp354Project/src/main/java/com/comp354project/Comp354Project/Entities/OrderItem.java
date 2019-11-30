package com.comp354project.Comp354Project.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.Date;

@Entity
public class OrderItem {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idOrderItem;

    @JsonBackReference
    @NotNull
    @ManyToOne
    @JoinColumn(name = "idAccountOrder")
    private AccountOrder order;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "idProduct")
    private Product product;

    @NotNull
    private Double price;

    @NotNull
    private Integer quantity;

    @Null
    private Date shippingDate;

    public Integer getId() {
        return idOrderItem;
    }

    public void setId(Integer idOrderItem) {
        this.idOrderItem = idOrderItem;
    }

    public AccountOrder getOrder() {
        return order;
    }

    public void setOrder(AccountOrder order) {
        this.order = order;
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

    public Date getShippingDate() {
        return shippingDate;
    }

    public void setShippingDate(Date shippingDate) {
        this.shippingDate = shippingDate;
    }

    public Integer getIdOrderItem() {
        return idOrderItem;
    }

    public void setIdOrderItem(Integer idOrderItem) {
        this.idOrderItem = idOrderItem;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
