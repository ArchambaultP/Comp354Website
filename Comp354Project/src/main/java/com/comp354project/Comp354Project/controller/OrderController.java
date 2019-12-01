package com.comp354project.Comp354Project.controller;

import com.comp354project.Comp354Project.Entities.*;
import com.comp354project.Comp354Project.repository.*;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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


    @Autowired
    private AccountOrderRepository orderRepository;


    @RequestMapping(value="/add", method = RequestMethod.POST)
    public String AddOrder(@RequestBody  List<Integer> prodIds){
        JSONObject response = new JSONObject();

       /* if(acc != null){
            String salt = pwdHelper.getSalt();
            acc.setPassword(pwdHelper.hash(password,salt));
            acc.setSalt(salt);

            try{
                accountRepository.save(acc);
                response.put("id",acc.getId());
                response.put("name",acc.getName());
                response.put("email",acc.getEmail());
                response.put("canBuy",acc.isCanBuy());
                response.put("canSell",acc.isCanSell());
                response.put("isAdmin",acc.isAdmin());
                response.put("isSuperAdmin",acc.isSuperAdmin());
                response.put("error",false);
                response.put("message","Password successful updated. Please Sign In.");
            }catch(Exception e){
                response.put("error",true);
                response.put("message","An unexpected error occurred. Please try again.");
            }
        }else{
            response.put("error",true);
            response.put("message","Invalid email address.");
        }*/

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
