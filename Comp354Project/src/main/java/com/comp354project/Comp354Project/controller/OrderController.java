package com.comp354project.Comp354Project.controller;

import com.comp354project.Comp354Project.Entities.*;
import com.comp354project.Comp354Project.repository.*;
import org.json.simple.JSONObject;
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

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private AccountOrderRepository orderRepository;

    @GetMapping(path="/account-orders/{id}")
    public Iterable<AccountOrder> getAccountOrdersFromAccountId(@PathVariable(value = "id") int id)
            throws IllegalArgumentException {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account not found for id: " + id));
        return account.getOrders();
    }

    @GetMapping(path="/orders/{id}")
    public Iterable<OrderItem> getOrderItemsFromAccountOrderId(@PathVariable(value = "id") int id)
            throws IllegalArgumentException {
        AccountOrder accountOrder = accountOrderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("AccountOrder not found for id: " + id));
        return accountOrder.getOrderItemList();
    }

    @GetMapping(path="/product/{id}")
    public Product getProductFromOrderItemId(@PathVariable(value = "id") int id)
            throws IllegalArgumentException {
        OrderItem orderItem = orderItemRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("OrderItem not found for id: " + id));
        return orderItem.getProduct();
    }

    @RequestMapping(value="/add", method = RequestMethod.POST)
    public String AddOrder(@RequestBody  List<Integer> prodIds){
        JSONObject response = new JSONObject();

        Payment payment = new Payment();
        payment.setPaymentType("paypal");
        paymentRepository.save(payment);

        Account user = accountRepository.findByEmail("admin@admin.com");
        AccountOrder order = new AccountOrder(user, payment);
        orderRepository.save(order);

        for(Integer id: prodIds)
        {
            Product p = productRepository.findByIdOverride(id);
            OrderItem ordItem = new OrderItem(order, p , p.getPrice(), 1);
            orderItemRepository.save(ordItem);
        }

        response.put("message", "Order created successfully");

        return "";
    }
}
