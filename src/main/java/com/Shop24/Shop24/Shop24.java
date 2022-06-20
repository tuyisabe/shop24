package com.Shop24.Shop24;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// @EnableScheduling
//@Configuration
@EnableAutoConfiguration
// @ComponentScan
public class Shop24 {

	public static void main(String[] args) {
		SpringApplication.run(Shop24.class, args);
	}

}
