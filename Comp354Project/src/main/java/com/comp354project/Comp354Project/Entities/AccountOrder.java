package com.comp354project.Comp354Project.Entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity(name="AccountOrder")
public class AccountOrder { //decided to name this AccountOrder, simply because order is a MySQL keyword, making the generated SQL caca :)

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id_account_order", nullable = false, unique = true)
    private Integer idAccountOrder;

    @OneToOne
    @NotNull
    private Payment payment;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "idAccount")
    private Account account;

    @NotNull
    private Date date;

    @OneToMany(
            mappedBy = "order"
    )
    private List<OrderItem> orderItemList = new ArrayList<>();

    public AccountOrder(){
        super();
        date = new Date();
    }

    public Integer getId() {
        return idAccountOrder;
    }

    public void setId(Integer idOrder) {
        this.idAccountOrder = idOrder;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<OrderItem> getOrderItemList() {
        return orderItemList;
    }

    public void setOrderItemList(List<OrderItem> orderItemList) {
        this.orderItemList = orderItemList;
    }
}