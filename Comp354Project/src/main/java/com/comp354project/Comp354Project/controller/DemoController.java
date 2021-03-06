package com.comp354project.Comp354Project.controller;


import com.comp354project.Comp354Project.Entities.*;
import com.comp354project.Comp354Project.repository.*;
import com.comp354project.Comp354Project.repository.AccountRepository;
import com.comp354project.Comp354Project.repository.ReviewRepository;
import com.comp354project.Comp354Project.repository.DemoRepository;
import com.comp354project.Comp354Project.repository.CategoryRepository;
import com.comp354project.Comp354Project.repository.DepartmentRepository;
import com.comp354project.Comp354Project.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.comp354project.Comp354Project.utilities.PasswordHelper;

@CrossOrigin(origins="http://localhost:4200")
@RestController    // This means that this class is a Controller
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class DemoController {
    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private DemoRepository demoRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private AccountOrderRepository accountOrderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    private final PasswordHelper pwdHelper = new PasswordHelper();

    @GetMapping(path="/add") // Map ONLY Get Requests
    public @ResponseBody String addNewUser (@RequestParam String name
            , @RequestParam String email) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        Demo n = new Demo();
        n.setName(name);
        n.setEmail(email);
        demoRepository.save(n);


        Category c = new Category();
        return "Saved";
    }

    @GetMapping(path="/instantiateRightsAndAccounts")
    public @ResponseBody String instantiateRights()
    {

        Account adminAcc = accountRepository.findByEmail("admin@admin.com");
        if((adminAcc == null) || adminAcc.getEmail().isEmpty()){
            Account acc = new Account();
            //acc.setId(1);
            acc.setName("superadmin");
            acc.setEmail("admin@admin.com");
            String salt = pwdHelper.getSalt();
            acc.setPassword(pwdHelper.hash("pwdHash", salt));
            acc.setSalt(salt);
            acc.setAddress1(" ");
            acc.setCity(" ");
            acc.setPhone(" ");
            acc.setCountry(" ");
            acc.setPostalCode(" ");
            acc.setProvince(" ");
            acc.setDatejoined(new Date(0));
            acc.setSuperAdmin(true);
            acc.setAdmin(true);
            acc.setCanBuy(true);
            acc.setCanSell(true);

            accountRepository.save(acc);
        }

        Account sellerAcc1 = accountRepository.findByEmail("seller1@outlook.com");
        if((sellerAcc1 == null) || sellerAcc1.getEmail().isEmpty()){
            Account acc1 = new Account();
            //cc1.setId(2);
            acc1.setName("seller1");
            acc1.setEmail("seller1@outlook.com");
            String salt = pwdHelper.getSalt();
            acc1.setPassword(pwdHelper.hash("pwdHash2", salt));
            acc1.setSalt(salt);
            acc1.setAddress1(" ");
            acc1.setCity(" ");
            acc1.setPhone(" ");
            acc1.setCountry(" ");
            acc1.setPostalCode(" ");
            acc1.setProvince(" ");
            acc1.setDatejoined(new Date(0));
            acc1.setCanBuy(true);
            acc1.setCanSell(true);

            accountRepository.save(acc1);
        }

        Account sellerAcc2 = accountRepository.findByEmail("seller2@outlook.com");
        if((sellerAcc2 == null) || sellerAcc2.getEmail().isEmpty()){
            Account acc = new Account();
            //acc.setId(3);
            acc.setName("seller2");
            acc.setEmail("seller2@outlook.com");
            String salt = pwdHelper.getSalt();
            acc.setPassword(pwdHelper.hash("pwdHash3", salt));
            acc.setSalt(salt);
            acc.setAddress1(" ");
            acc.setCity(" ");
            acc.setPhone(" ");
            acc.setCountry(" ");
            acc.setPostalCode(" ");
            acc.setProvince(" ");
            acc.setDatejoined(new Date(0));
            acc.setCanBuy(true);
            acc.setCanSell(true);

            accountRepository.save(acc);
        }

        Account buyerAcc = accountRepository.findByEmail("buyer@outlook.com");
        if((buyerAcc == null) || buyerAcc.getEmail().isEmpty()){
            Account acc = new Account();
            //acc.setId(4);
            acc.setName("buyer");
            acc.setEmail("buyer@outlook.com");
            String salt = pwdHelper.getSalt();
            acc.setPassword(pwdHelper.hash("pwdHash4", salt));
            acc.setSalt(salt);
            acc.setAddress1(" ");
            acc.setCity(" ");
            acc.setPhone(" ");
            acc.setCountry(" ");
            acc.setPostalCode(" ");
            acc.setProvince(" ");
            acc.setDatejoined(new Date(0));
            acc.setCanBuy(true);
            acc.setCanSell(true);

            accountRepository.save(acc);
        }

        return "done";
    }


    @GetMapping(path="/instantiateDepartmentAndCategory")
    public @ResponseBody String instantiateDept()
    {
        Department electronic = new Department();
        if(departmentRepository.findByName("Electronic").isEmpty()) {
            //electronic.setId(1);
            electronic.setName("Electronic");
            electronic.setDescription("I saw beyonces tizzles and my pizzle went crizzle i'm in the shizzle sizzle pimpin' i saw beyonces tizzles and my pizzle went crizzle, fo shizzle adipiscing fo shizzle");
            departmentRepository.save(electronic);
        }

        Department houseAndKitchen = new Department();
        if(departmentRepository.findByName("House And Kitchen").isEmpty()) {
            //houseAndKitchen.setId(2);
            houseAndKitchen.setName("House And Kitchen");
            houseAndKitchen.setDescription("Nullizzle sapizzle velizzle, shit volutpizzle, dang quizzle, brizzle vizzle, shizzlin dizzle. Pellentesque eget tortizzle. Sed erizzle.");
            departmentRepository.save(houseAndKitchen);
        }

        Department clothingAndAccessory = new Department();
        if(departmentRepository.findByName("Clothing And Accessory").isEmpty()) {
            //clothingAndAccessory.setId(3);
            clothingAndAccessory.setName("Clothing And Accessory");
            clothingAndAccessory.setDescription("Break yo neck, yall yo mamma shizzle my nizzle crocodizzle check it out shizznit tempizzle cool.");
            departmentRepository.save(clothingAndAccessory);
        }

        if(categoryRepository.findByName("Computers And Tablets").isEmpty()){
            Category computerAndTablets = new Category();
            computerAndTablets.setName("Computers And Tablets");
            computerAndTablets.setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            computerAndTablets.setDepartment(departmentRepository.findByName("Electronic").get(0));
            categoryRepository.save(computerAndTablets);
        }

        if(categoryRepository.findByName("TV And HomeTheatre").isEmpty()){
            Category tvAndHomeTheatre = new Category();
            tvAndHomeTheatre.setName("TV And HomeTheatre");
            tvAndHomeTheatre.setDescription("Libero justo laoreet sit amet cursus. Odio morbi quis commodo odio.");
            tvAndHomeTheatre.setDepartment(departmentRepository.findByName("Electronic").get(0));
            categoryRepository.save(tvAndHomeTheatre);
        }

        if(categoryRepository.findByName("Home Office").isEmpty()){
            Category homeOffice = new Category();
            homeOffice.setName("Home Office");
            homeOffice.setDescription("Praesent semper feugiat nibh sed pulvinar proin gravida.");
            homeOffice.setDepartment(departmentRepository.findByName("House And Kitchen").get(0));
            categoryRepository.save(homeOffice);
        }

        if(categoryRepository.findByName("Kitchen").isEmpty()){
            Category kitchen = new Category();
            kitchen.setName("Kitchen");
            kitchen.setDescription("At augue eget arcu dictum varius duis at consectetur lorem.");
            kitchen.setDepartment(departmentRepository.findByName("House And Kitchen").get(0));
            categoryRepository.save(kitchen);
        }

        if(categoryRepository.findByName("Woman Clothing").isEmpty()){
            Category womanClothing = new Category();
            womanClothing.setName("Woman Clothing");
            womanClothing.setDescription("Elit scelerisque mauris pellentesque pulvinar pellentesque habitant.");
            womanClothing.setDepartment(departmentRepository.findByName("Clothing And Accessory").get(0));
            categoryRepository.save(womanClothing);
        }

        if(categoryRepository.findByName("Men Clothing").isEmpty()){
            Category menClothing = new Category();
            menClothing.setName("Men Clothing");
            menClothing.setDescription("Nullam vehicula ipsum a arcu cursus vitae congue mauris.");
            menClothing.setDepartment(departmentRepository.findByName("Clothing And Accessory").get(0));
            categoryRepository.save(menClothing);

        }

        return "done";
    }

    @GetMapping(path="/instantiateProduct")
    public @ResponseBody String instantiateProduct(){

        //review -- remove
        /*
        Review rev=new Review();
        rev.setDescription("Very nice product.");
        rev.setAccount(accountRepository.findByEmail("seller1@outlook.com"));
        rev.setRating(5);
        //reviewRepository.save(rev);
        */


        if(productRepository.findByName("Microsoft Surface Pro 6").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("Microsoft Surface Pro 6");
            prod.setDescription("(Intel Core i5, 8GB RAM, 256GB)");
            prod.setPrice(1179.0);
            prod.setQuantity(20);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298148ld.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Computers And Tablets").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Apple Ipad Pro").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("Apple Ipad Pro");
            prod.setDescription("(10.5-inch, Wi-Fi, 256GB)");
            prod.setPrice(999.0);
            prod.setQuantity(20);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://assets.pcmag.com/media/images/616567-apple-ipad-pro.jpg?thumb=y");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Computers And Tablets").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Acer ChromeBook").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");

            prod.setName("Acer ChromeBook");
            prod.setDescription("(14\" FHD IPS Display/ICQ N3160 / 4GB RAM)");
            prod.setPrice(399.0);
            prod.setQuantity(20);
            prod.setPermanentPosting(true);
            prod.setImageURL("http://dwm.technology/wp-content/uploads/2017/08/a6517cbe8d08.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Computers And Tablets").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Acer Aspire7").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("Acer Aspire7");
            prod.setDescription("(15.6\" FHD IPS Display/ Ci7 9750H/GTX 1650 4GB/ 16GB Ram/ 512 SSD)");
            prod.setPrice(1499.0);
            prod.setQuantity(20);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://static.acer.com/up/Resource/Acer/Laptops/Aspire_7/photogallery/20190104/Acer-Aspire-7-A715-73G-photogallery-02.png");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Computers And Tablets").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }


        if(productRepository.findByName("Sony XBR65X900F/A LCD Television").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("Sony XBR65X900F/A LCD Television");
            prod.setDescription("(65\", Black)");
            prod.setPrice(1998.0);
            prod.setQuantity(10);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6179/6179726_sd.jpg;maxHeight=640;maxWidth=550");
            prod.setAccount(accountRepository.findByEmail("seller1@outlook.com"));
            prod.setCategory(categoryRepository.findByName("TV And HomeTheatre").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Samsung UN40NU7100FXZC").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("Samsung UN40NU7100FXZC");
            prod.setDescription("(40\" 4K Ultra HD Smart LED TV (2018), Charcoal Black)");
            prod.setPrice(478.0);
            prod.setQuantity(10);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://images.samsung.com/is/image/samsung/ca-uhdtv-nu7100-un40nu7100fxzc-frontblack-99882967?$PD_GALLERY_L_JPG$");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("TV And HomeTheatre").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("TCL 40S325-CA").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("TCL 40S325-CA");
            prod.setDescription("(1080p Smart LED Television (2019), 40\")");
            prod.setPrice(299.0);
            prod.setQuantity(10);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://multimedia.bbycastatic.ca/multimedia/products/500x500/131/13185/13185854.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("TV And HomeTheatre").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("LG OLED65C8PUA").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("LG OLED65C8PUA");
            prod.setDescription("(65\" 4K Ultra HD Smart OLED TV)");
            prod.setPrice(3049.94);
            prod.setQuantity(10);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://www.lg.com/us/images/tvs/md05913436/gallery/OLEDC8_1100_v1.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("TV And HomeTheatre").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }


        if(productRepository.findByName("Furinno 12095GYW").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("Furinno 12095GYW");
            prod.setDescription("(Econ Multipurpose Home Office Computer Writing Desk with Bin, French Oak Grey)");
            prod.setPrice(148.47);
            prod.setQuantity(30);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://images-na.ssl-images-amazon.com/images/I/71Jmpf0gxlL._SX425_.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Home Office").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("AmazonBasics Mid-Back Desk Office Chair with Armrests").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("AmazonBasics Mid-Back Desk Office Chair with Armrests");
            prod.setDescription("(Mesh Back, Swivels - Black)");
            prod.setPrice(89.14);
            prod.setQuantity(30);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://images-na.ssl-images-amazon.com/images/I/91ulA958MKL._SY355_.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Home Office").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Sharpie Pens").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller1@outlook.com");
            prod.setName("Sharpie Pens");
            prod.setBrand("Sharpie");
            prod.setDescription("(Fine Point (0.8mm), Black, 2 Pack - 1742659)");
            prod.setPrice(3.99);
            prod.setQuantity(300);
            prod.setPermanentPosting(true);
            prod.setImageURL("https://smedia.webcollage.net/rwvfp/wc/cp/25256916_legacycode/module/sharpieus/_cp/products/1490871840958/tab-1c2d7515-3c53-4c92-80c9-ec995ddd223d/a7ddbc73-26e0-45d7-8164-c108d1149290.jpg.w960.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Home Office").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }


        if(productRepository.findByName("Jamie Oliver Non-Stick Silicone Spatula Set of 2").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller2@outlook.com");
            prod.setName("Jamie Oliver Non-Stick Silicone Spatula Set of 2");
            prod.setDescription("(Kitchen Utensils for Baking and Cooking - Heat Resistant)");
            prod.setPrice(23.24);
            prod.setQuantity(40);
            prod.setPermanentPosting(false);
            prod.setImageURL("https://secure.img1-fg.wfcdn.com/im/93971896/compr-r85/6324/63246885/default_name.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Kitchen").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("T-fal Intuition 30cm Non-Stick Wok").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller2@outlook.com");
            prod.setName("T-fal Intuition 30cm Non-Stick Wok");
            prod.setBrand("T-fal");
            prod.setDescription("(Advanced non-stick coating is metal utensil-safe and resistant to scratches for easy cooking and even easier cleanup)");
            prod.setPrice(45.66);
            prod.setQuantity(50);
            prod.setPermanentPosting(false);
            prod.setImageURL("https://pisces..com//BestBuy_US/images/products/6179/6179726_sd.jpg;maxHeight=640;maxWidth=550");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Kitchen").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Damascus Chef Knife 8 inch").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller2@outlook.com");
            prod.setName("Damascus Chef Knife 8 inch");
            prod.setDescription("(Kitchen Knife Ultra Sharp Knife with Ergonomic Handle, Stain & Corrosion Resistant Chefs Knives)");
            prod.setPrice(79.99);
            prod.setQuantity(20);
            prod.setPermanentPosting(false);
            prod.setImageURL("https://images-na.ssl-images-amazon.com/images/I/81aoEiJKEJL._SX425_.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Kitchen").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }


        if(productRepository.findByName("Jerzees Men's Long-Sleeve T-Shirt").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller2@outlook.com");
            prod.setName("Jerzees Men's Long-Sleeve T-Shirt");
            prod.setDescription("(Size : Medium)");
            prod.setPrice(9.09);
            prod.setQuantity(300);
            prod.setPermanentPosting(false);
            prod.setImageURL("https://images-na.ssl-images-amazon.com/images/I/41LpY4FDk2L.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Men Clothing").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Levi's Men's 559 Relaxed Straight Fit Jean").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller2@outlook.com");
            prod.setName("Levi's Men's 559 Relaxed Straight Fit Jean");
            prod.setBrand("Levi");
            prod.setDescription("(Size : 30Wx30L)");
            prod.setPrice(63.90);
            prod.setQuantity(300);
            prod.setPermanentPosting(false);
            prod.setImageURL("https://images-na.ssl-images-amazon.com/images/I/81ehlYkOk6L._UX522_.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Men Clothing").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Haggar Mens Cool 18 Hidden Expandable-Waist Plain-Front Pant").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller2@outlook.com");
            prod.setName("Haggar Mens Cool 18 Hidden Expandable-Waist Plain-Front Pant");
            prod.setDescription("(Size : 32Wx30L)");
            prod.setPrice(47.47);
            prod.setQuantity(300);
            prod.setPermanentPosting(false);
            prod.setImageURL("https://images-na.ssl-images-amazon.com/images/I/71bRcCj5gQL._UX466_.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Men Clothing").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }


        if(productRepository.findByName("Hanes Womens Long Sleeve Tee Shirt").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller2@outlook.com");
            prod.setName("Hanes Womens Long Sleeve Tee Shirt");
            prod.setDescription("(Size : Medium)");
            prod.setPrice(8.99);
            prod.setQuantity(300);
            prod.setPermanentPosting(false);
            prod.setImageURL("https://images-na.ssl-images-amazon.com/images/I/81K0dTtZ6fL._UX466_.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Woman Clothing").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Levi's Womens 721 High Rise Skinny Jeans").isEmpty()){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller2@outlook.com");
            prod.setName("Levi's Womens 721 High Rise Skinny Jeans");
            prod.setBrand("Levi");
            prod.setDescription("(Size : 27(long))");
            prod.setPrice(42.99);
            prod.setQuantity(300);
            prod.setPermanentPosting(false);
            prod.setImageURL("https://images-na.ssl-images-amazon.com/images/I/91EhPwFynNL._UX342_.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Woman Clothing").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }
        if(productRepository.findByName("Dickies Women's Slim Fit Boot Cut Stretch Twill Pant").isEmpty() ){
            Product prod = new Product();
            Account acc = accountRepository.findByEmail("seller2@outlook.com");
            prod.setName("Dickies Women's Slim Fit Boot Cut Stretch Twill Pant");
            prod.setDescription("(Size : 10(long), Color : Dark Navy)");
            prod.setPrice(44.99);
            prod.setQuantity(300);
            prod.setPermanentPosting(false);
            prod.setImageURL("https://images-na.ssl-images-amazon.com/images/I/71kjQEzhaNL._UL1500_.jpg");
            prod.setAccount(acc);
            prod.setCategory(categoryRepository.findByName("Woman Clothing").get(0));
            prod.setUserId(acc.getId());
            productRepository.save(prod);
        }

        return "done";
    }

    @GetMapping(path="/instatiateOrders")
    public @ResponseBody String instatiateOrders(){

        if(accountRepository.findByEmail("seller1@outlook.com") == null
                || productRepository.findByName("Microsoft Surface Pro 6").isEmpty()
                || productRepository.findByName("Apple Ipad Pro").isEmpty()){
            return "ERROR - /demo/instatiateOrders: Please instantiate accounts & products first.";
        }

        // ACCOUNT ORDER 1
        Payment payment = new Payment();
        payment.setPaymentType("Credit");
        payment.setPaymentConfirmed(true);
        payment.setPaymentDate(new Date(0));

        AccountOrder accountOrder = new AccountOrder();
        accountOrder.setAccount(accountRepository.findByEmail("seller1@outlook.com"));
        accountOrder.setDate(new Date(0));
        accountOrder.setPayment(payment);
        payment.setOrder(accountOrder);

        List<OrderItem> orderItems = new ArrayList<>();

        OrderItem temp1 = new OrderItem();
        temp1.setOrder(accountOrder);
        temp1.setProduct(productRepository.findByName("Microsoft Surface Pro 6").get(0));
        temp1.setPrice(productRepository.findByName("Microsoft Surface Pro 6").get(0).getPrice());
        temp1.setQuantity(1);
        //temp1.setShippingDate(new Date(0));
        orderItems.add(temp1);

        OrderItem temp2 = new OrderItem();
        temp2.setOrder(accountOrder);
        temp2.setProduct(productRepository.findByName("Apple Ipad Pro").get(0));
        temp2.setPrice(productRepository.findByName("Apple Ipad Pro").get(0).getPrice());
        temp2.setQuantity(1);
        //temp2.setShippingDate(new Date(0));
        orderItems.add(temp2);

        accountOrder.setOrderItemList(orderItems);

        paymentRepository.save(payment);
        accountOrderRepository.save(accountOrder);
        orderItemRepository.save(temp1);
        orderItemRepository.save(temp2);

        // ACCOUNT ORDER 2
        Payment payment2 = new Payment();
        payment2.setPaymentType("Bank");
        payment2.setPaymentConfirmed(true);
        payment2.setPaymentDate(new Date(0));

        AccountOrder accountOrder2 = new AccountOrder();
        accountOrder2.setAccount(accountRepository.findByEmail("seller1@outlook.com"));
        accountOrder2.setDate(new Date(0));
        accountOrder2.setPayment(payment2);
        payment2.setOrder(accountOrder2);

        List<OrderItem> orderItems2 = new ArrayList<>();

        OrderItem temp3 = new OrderItem();
        temp3.setOrder(accountOrder2);
        temp3.setProduct(productRepository.findByName("Levi's Womens 721 High Rise Skinny Jeans").get(0));
        temp3.setPrice(productRepository.findByName("Levi's Womens 721 High Rise Skinny Jeans").get(0).getPrice());
        temp3.setQuantity(1);
        //temp1.setShippingDate(new Date(0));
        orderItems2.add(temp3);

        OrderItem temp4 = new OrderItem();
        temp4.setOrder(accountOrder2);
        temp4.setProduct(productRepository.findByName("Damascus Chef Knife 8 inch").get(0));
        temp4.setPrice(productRepository.findByName("Damascus Chef Knife 8 inch").get(0).getPrice());
        temp4.setQuantity(1);
        //temp2.setShippingDate(new Date(0));
        orderItems2.add(temp4);

        accountOrder2.setOrderItemList(orderItems2);

        paymentRepository.save(payment2);
        accountOrderRepository.save(accountOrder2);
        orderItemRepository.save(temp3);
        orderItemRepository.save(temp4);

        /*Account seller = accountRepository.findByEmail("seller1@outlook.com");

        List<AccountOrder> accountOrders = new ArrayList<>();
        accountOrders.add(accountOrder);
        seller.setOrders(accountOrders);

        accountRepository.save(seller);*/

        return "done";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Demo> getAllUsers() {
        // This returns a JSON or XML with the users
        return demoRepository.findAll();
    }
}