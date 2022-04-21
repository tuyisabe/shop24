package com.crs_second_route.second_route.web;

import com.crs_second_route.second_route.service.VerificationRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Controller
public class EmailVerification {
    @Autowired
    private VerificationRegistrationService verificationRegistrationService;

    @GetMapping("/verify_email/{email}")
    public String sendEmail(HttpServletRequest request, @PathVariable("email") String email) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            String from = "noreply@nppa.gov.rw";
            String subject = "Verification code";
            String to = email;
            Random randomInt = new Random();
            String text = String.valueOf(randomInt.nextInt(1000000) + 1);
            ExecutorService emailExecutor = Executors.newCachedThreadPool();
            emailExecutor.execute(new Runnable() {
                @Override
                public void run() {
                    verificationRegistrationService.sendSimpleMessage(from, "niysalomon@gmail.com", subject, text);
                }
            });

        }

//            ExecutorService emailExecutor = Executors.newCachedThreadPool();
//            emailExecutor.execute(new Runnable() {
//                @Override
//                public void run() {
//                    verificationRegistrationService.sendSimpleMessage(from,to,subject,text);
//                }
//            });
//            emailExecutor.shutdown();
//            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
//        }
        catch (Exception e) {
            map.put("message", e);
            throw new RuntimeException(e);
        }
        return "redirect:/forgot_password?success";
    }
}
