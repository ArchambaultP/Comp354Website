package com.comp354project.Comp354Project;

import com.comp354project.Comp354Project.bean.Employee;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import java.util.stream.Stream;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class Comp354ProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(Comp354ProjectApplication.class, args);
	}

	@Bean
	CommandLineRunner init(Employee employeeRepository) {
		return args -> {
			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
			//	Employee user = new Employee(name, name.toLowerCase() + "@domain.com");
				//employeeRepository.save(user);
				System.out.println(name);
			});
			//employeeRepository.findAll().forEach(System.out.println());
		};
	}
}
