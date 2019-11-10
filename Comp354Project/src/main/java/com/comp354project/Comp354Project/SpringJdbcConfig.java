package com.comp354project.Comp354Project;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Configuration
@Component
public class SpringJdbcConfig {
    @Bean
    public DataSource mysqlDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");


        /*//For localhost :
        dataSource.setUrl("jdbc:mysql://localhost:3306/test?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC");
        dataSource.setUsername("root");
        dataSource.setPassword(""); //may need to set this password depending on your db root user credentials
        */

        //dataSource.setUrl("jdbc:mysql://remotemysql.com:3306/I2HFBXbU7k?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC");
        //dataSource.setUsername("I2HFBXbU7k");
        //dataSource.setPassword("3lQ4cp5uw3"); //may need to set this password depending on your db root user credentials*/

        dataSource.setUrl("jdbc:mysql://localhost:3306/comp354");
        dataSource.setUsername("root");
        dataSource.setPassword(""); //may need to set this password depending on your db root user credentials*/

        return dataSource;
    }
}