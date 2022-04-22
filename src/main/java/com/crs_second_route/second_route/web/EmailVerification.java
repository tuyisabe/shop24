package com.crs_second_route.second_route.web;

import com.crs_second_route.second_route.service.VerificationRegistrationService;
import com.crs_second_route.second_route.vo.VerificationRegistration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Controller
public class EmailVerification {
    @Autowired
    private VerificationRegistrationService verificationRegistrationService;

    @PostMapping("/verify_email/{email}")
    public Object sendEmail(HttpServletRequest request, @PathVariable("email") String email) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {

            System.out.println(">>>>>>");
            System.out.println(email);
            System.out.println(">>>>>>>>>");
            String from = "noreply@nppa.gov.rw";
            String subject = "Verification Code";
            String to = email;
            Random randomInt = new Random();
            String text = String.valueOf(randomInt.nextInt(1000000));
            VerificationRegistration verificationRegistration = new VerificationRegistration();
            verificationRegistration.setEmail(to);
            verificationRegistration.setVerificationCode(text);
            verificationRegistration.setCreatedAt(new Timestamp(new Date().getTime()));
            verificationRegistration.setExpiryDate(new Timestamp(new Date().getTime()));


            ExecutorService emailExecutor = Executors.newCachedThreadPool();
            emailExecutor.execute(new Runnable() {
                @Override
                public void run() {
                    verificationRegistrationService.sendSimpleMessage(from, to, subject, text);
                    verificationRegistrationService.saveCode(verificationRegistration);
                }
            });
            map.put("success", "user deleted successful");
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);

        }
 
        catch (Exception e) {
            map.put("message", e);
            throw new RuntimeException(e);
        }
    }
}
