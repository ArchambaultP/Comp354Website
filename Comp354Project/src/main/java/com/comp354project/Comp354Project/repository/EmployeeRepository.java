package com.comp354project.Comp354Project.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;
import com.comp354project.Comp354Project.bean.Employee;

@Repository
public class EmployeeRepository {

	// Method to generate the dummy employee records.
	public List<Employee> getAllEmployeesFromDb() {

		// To generate the fake details for the employees.


		// Employee list.
		List<Employee> employeelist = new ArrayList<Employee>();

		// Creating fake employees to be shown on the angular html page.
		for(int i=101; i<=110; i++) {

			// Creating employee model objects.
			Employee myemployee = new Employee();
			myemployee.setId(i);
			myemployee.setName("ray"+i);
			myemployee.setMobile("brau"+i);
			myemployee.setAddress(i+"1234 blv IDK");
			myemployee.setCompanylogo("Real Co");

			// Adding the employee records to the employee list.
			employeelist.add(myemployee);
		}

		return employeelist;
	}
}