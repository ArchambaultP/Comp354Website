package com.comp354project.Comp354Project.service;

import java.util.List;

import com.comp354project.Comp354Project.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comp354project.Comp354Project.bean.Employee;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.annotation.HttpConstraint;

@Service
public class EmployeeServImpl {

	@Autowired
	EmployeeRepository employeeRepository;

    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:4200")
	public List<Employee> getAllEmployees() {
	    //System.out.println(getAllEmployees()+" it worked"); //Don't S.o.P on the server, it will crash :)
		return employeeRepository.getAllEmployeesFromDb();
	}

}
