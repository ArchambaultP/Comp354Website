package com.comp354project.Comp354Project.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.comp354project.Comp354Project.Entities.Product;
import com.comp354project.Comp354Project.Entities.Review;
import com.comp354project.Comp354Project.Entities.Category;
import com.comp354project.Comp354Project.Entities.Department;
import com.comp354project.Comp354Project.Entities.Account;
import com.comp354project.Comp354Project.repository.ProductRepository;
import com.comp354project.Comp354Project.repository.ReviewRepository;
import com.comp354project.Comp354Project.repository.CategoryRepository;
import com.comp354project.Comp354Project.repository.DepartmentRepository;
import com.comp354project.Comp354Project.repository.AccountRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;


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

    @Autowired
    private ReviewRepository reviewRepository;


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
    @GetMapping(path="/products/add")
    @ResponseBody
    public String addProduct(@RequestParam(value = "productName") String productName,
                             @RequestParam(value = "description") String description,
                             @RequestParam(value = "price") String price,
                             @RequestParam(value = "quantity") String quantity,
                             @RequestParam(value = "categoryName") String categoryName,
                             @RequestParam(value = "userId") String userId,
                             @RequestParam(value = "imageUrl") String imageUrl) {

        Account acc = accountRepository.getAccountByIdAccount(Integer.parseInt(userId));
        Category category = categoryRepository.findByName(categoryName).get(0);
        if(productRepository.findByName(productName).isEmpty()){
            Product prod = new Product();
            prod.setName(productName);
            prod.setDescription(description);
            prod.setPrice((Double.parseDouble(price)));
            prod.setQuantity(Integer.parseInt(quantity));
            prod.setPermanentPosting(true);
            prod.setImageURL(imageUrl);
            prod.setCategory(category);
            prod.setAccount(acc);
            prod.setUserId(Integer.parseInt(userId));
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

    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path="/account/user/{id}/products")
    public List<Product> getUserProducts(@PathVariable Integer id) {
        return productRepository.findById_account(id);
    }

    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path="/reviews/{id}")
    public List<Review> getAllReviewsByProduct(@PathVariable Integer id)
    {
        Product product=productRepository.findByIdOverride(id);
        return product.getReviews();
    }


    @CrossOrigin(origins="http://localhost:4200")
    @PostMapping(path="/reviews/add")
    public String createReview( @RequestBody String jsonString)
    {

        JsonNode actualObj = null;
        try {
            ObjectMapper mapper = new ObjectMapper();
            actualObj = mapper.readTree(jsonString);
        }catch(Exception e){};

        //Integer productId = actualObj.get("productId").intValue();
        Integer productId = Integer.parseInt(actualObj.get("productId").toString().replace("\"",""));

        Integer rating = Integer.parseInt(actualObj.get("rating").toString().replace("\"",""));
        Integer userId = actualObj.get("userId").intValue();
        String description = actualObj.get("description").toString();
        String prodName = actualObj.get("productName").toString();

        Product product = productRepository.findByIdOverride(78);


        Account acc = accountRepository.findByIdOverride(userId);

        Review review = new Review(product, acc, rating, description);


        acc.addReview(review);
        //accountRepository.save(acc);

        product.addReview(review);
        //productRepository.save(product);

        reviewRepository.save(review);
        return "done";

    }
}
