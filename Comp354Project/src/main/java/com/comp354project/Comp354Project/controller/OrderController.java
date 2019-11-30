package com.comp354project.Comp354Project.controller;

import com.comp354project.Comp354Project.Entities.*;
import com.comp354project.Comp354Project.repository.AccountOrderRepository;
import com.comp354project.Comp354Project.repository.AccountRepository;
import com.comp354project.Comp354Project.repository.OrderItemRepository;
import com.comp354project.Comp354Project.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Simple controller to handle requests for Orders.
 *
 * @author ShifatKhan
 */
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(path="/order")
public class OrderController {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private AccountOrderRepository accountOrderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private AccountRepository accountRepository;

    @GetMapping(path="/account-orders/{id}")
    public Iterable<AccountOrder> getAccountOrdersFromAccountId(@PathVariable(value = "id") int id)
            throws IllegalArgumentException {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account not found for id: " + id));
        return account.getOrders();
    }
}
