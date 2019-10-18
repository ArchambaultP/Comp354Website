package com.comp354project.Comp354Project.Entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity(name="Department")
public class Department {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idDepartment;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @OneToMany(
            mappedBy = "department",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Category> categories = new ArrayList<>();

    public Integer getId() {
        return idDepartment;
    }

    public void setId(Integer id) {
        this.idDepartment = id;
    }

    public Integer getIdDepartment() {
        return idDepartment;
    }

    public void setIdDepartment(Integer idDepartment) {
        this.idDepartment = idDepartment;
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

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }
}
