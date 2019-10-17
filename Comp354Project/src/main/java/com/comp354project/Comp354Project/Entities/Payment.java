package com.comp354project.Comp354Project.Entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idPayment;

    @NotNull
    private String paymentType;

    @NotNull
    private Date paymentDate;

    @NotNull
    private boolean paymentConfirmed;

    @OneToOne(mappedBy = "payment", cascade = CascadeType.ALL)
    private AccountOrder order;

    public Payment(){
        super();
        paymentDate = new Date();
        paymentConfirmed = false;
    }

    public Integer getId() {
        return idPayment;
    }

    public void setId(Integer idPayment) {
        this.idPayment = idPayment;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public boolean isPaymentConfirmed() {
        return paymentConfirmed;
    }

    public void setPaymentConfirmed(boolean paymentConfirmed) {
        this.paymentConfirmed = paymentConfirmed;
    }

    public AccountOrder getOrder() {
        return order;
    }

    public void setOrder(AccountOrder order) {
        this.order = order;
    }
}
