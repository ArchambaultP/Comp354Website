package com.comp354project.Comp354Project.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity(name="Category")
public class Category {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idCategory;

    @NotNull
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "idDepartment")
    private Department department;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @OneToMany(
            mappedBy = "category",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    @JsonManagedReference
    private List<Product> products = new ArrayList<>();

    public Integer getId() {
        return idCategory;
    }

    public void setId(Integer idCategory) {
        this.idCategory = idCategory;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
