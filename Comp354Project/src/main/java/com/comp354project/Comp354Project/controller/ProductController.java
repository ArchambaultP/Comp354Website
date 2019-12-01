package com.comp354project.Comp354Project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.comp354project.Comp354Project.Entities.Product;
import com.comp354project.Comp354Project.Entities.Review;
import com.comp354project.Comp354Project.Entities.Category;
import com.comp354project.Comp354Project.Entities.Department;
import com.comp354project.Comp354Project.repository.ProductRepository;
import com.comp354project.Comp354Project.repository.ReviewRepository;
import com.comp354project.Comp354Project.repository.CategoryRepository;
import com.comp354project.Comp354Project.repository.DepartmentRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

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

    @PostMapping(path="/products/add")
    @ResponseBody
    public String addProduct(Product product) {
        productRepository.save(product);
        return "Done";
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


    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path="/reviews/{id}")
    public List<Review> getAllReviewsByProduct(@PathVariable Integer id)
    {
        Product product=productRepository.getProductByIdProduct(id);
        return product.getReviews();
    }

}
