package com.crs_second_route;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@Configuration
@EnableAutoConfiguration
@ComponentScan
public class CrsSecondRouteApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrsSecondRouteApplication.class, args);
	}

}
