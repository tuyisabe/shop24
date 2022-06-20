package com.Shop24.Shop24;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;


@SpringBootApplication
 @EnableScheduling
@Configuration
@EnableAutoConfiguration
 @ComponentScan
public class Shop24 {

	public static void main(String[] args) {
		SpringApplication.run(Shop24.class, args);
	}

}
