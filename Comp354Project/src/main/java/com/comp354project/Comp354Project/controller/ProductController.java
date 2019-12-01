package com.comp354project.Comp354Project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.comp354project.Comp354Project.Entities.Product;
import com.comp354project.Comp354Project.Entities.Category;
import com.comp354project.Comp354Project.Entities.Department;
import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.repository.ProductRepository;
import com.comp354project.Comp354Project.repository.CategoryRepository;
import com.comp354project.Comp354Project.repository.DepartmentRepository;
import com.comp354project.Comp354Project.repository.AccountRepository;

import java.util.List;
import java.util.Optional;

import java.lang.*;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private AccountRepository accountRepository;

    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path="/products")
    public List<Product> getAllProducts(@RequestParam(value = "name", required = false) String name) {
        if (name != null) {
            return productRepository.findByName(name);
        }
        else {
            return (List<Product>) productRepository.findAll();
        }
    }

    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path="/products/{id}")
    public Optional<Product> getProductById(@PathVariable Integer id) {
        return productRepository.findById(id);
    }

    @CrossOrigin(origins="http://localhost:4200")
    @PostMapping(path="/products/add")
    @ResponseBody
    public String addProduct(@RequestParam(value = "productName", required = false) String productName,
                             @RequestParam(value = "description", required = false) String description,
                             @RequestParam(value = "price", required = false) String price,
                             @RequestParam(value = "quantity", required = false) String quantity,
                             @RequestParam(value = "imageUrl", required = false) String imageUrl,
                             @RequestParam(value = "categoryName", required = false) String categoryName,
                             @RequestParam(value = "accountName", required = false) String accountName,
                             @RequestParam(value = "userId", required = false) String userId) {

        Account acc = accountRepository.findByName(accountName).get(0);
        if(productRepository.findByName(productName).isEmpty()){
            Product prod = new Product();
            prod.setName(productName);
            prod.setDescription(description);
            prod.setPrice((Double.parseDouble(price)));
            prod.setQuantity(Integer.parseInt(quantity));
            prod.setPermanentPosting(true);
            prod.setImageURL(imageUrl);
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName(categoryName).get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        return "Done";
    }

    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(value = "/products/delete/{id}")
    public @ResponseBody String deleteProduct(@PathVariable("id") Integer id) {
        productRepository.deleteById(id);
        return "done";
    }

    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path="/categories")
    public List<Category> getAllCategories(@RequestParam(value = "name", required = false) String name) {
        if (name != null) {
            return categoryRepository.findByName(name);
        }

        return (List<Category>) categoryRepository.findAll();
    }

    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path="/categories/{id}")
    public Optional<Category> getCategoryById(@PathVariable Integer id) {
        return categoryRepository.findById(id);
    }


    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path="/departments")
    public List<Department> getAllDepartments(@RequestParam(value = "name", required = false) String name) {
        if (name != null) {
            return departmentRepository.findByName(name);
        }

        return (List<Department>) departmentRepository.findAll();
    }

    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path="/departments/{id}")
    public Optional<Department> getDepartmentById(@PathVariable Integer id) {
        return departmentRepository.findById(id);
    }

}
