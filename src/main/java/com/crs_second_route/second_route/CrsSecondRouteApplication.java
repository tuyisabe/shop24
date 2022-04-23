package com.crs_second_route.second_route;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// @EnableScheduling
//@Configuration
@EnableAutoConfiguration
// @ComponentScan
public class CrsSecondRouteApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrsSecondRouteApplication.class, args);
	}

}
