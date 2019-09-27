package com.comp354project.Comp354Project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.comp354project.Comp354Project.bean.Employee;
import com.comp354project.Comp354Project.service.EmployeeServImpl;


@RestController
public class EmployeeCtrl {

	@Autowired
	EmployeeServImpl empService;

	// Method to test the angular fetch call.
	@CrossOrigin(origins="http://localhost:4200")							// @CrossOrigin is used to handle the request from a difference origin.
	@RequestMapping(value= "/getemployees", method= RequestMethod.GET) 
	public List<Employee> getAllEmployees() {
		return empService.getAllEmployees();
	}
}