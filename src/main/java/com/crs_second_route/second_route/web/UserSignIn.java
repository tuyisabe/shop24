package com.crs_second_route.second_route.web;

import com.crs_second_route.second_route.service.CountryService;
import com.crs_second_route.second_route.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Random;

@Controller
public class UserSignIn {
    private static final String INDEX = "second_route/user_sign_in/login";
    private static final String REDIRECT_INDEX = "redirect:/applicant_route";
    private static final String REDIRECT_TO_LOGOUT = "redirect:/login?logout";

    @Autowired
    private ProvinceService provinceService;

    @Autowired
    private CountryService countryService;

    @GetMapping(value ="")
    public String index(Model model) {
        Random text = new Random();
        int randomInt = text.nextInt(1000000) + 1;
        System.out.println(">>>>>>>>>>>>");
        System.out.println(randomInt);
        System.out.println(">>>>>>>>>>>>>>");
        return "second_route/user_sign_in/login";
    }
     @GetMapping(value = "/login")
    public String login(Model model) {
        return INDEX;
    }
    @GetMapping(value = "/forget")
    public String resetPassword(Model model) {
        return  "second_route/user_sign_in/reset_password";
    }

    @GetMapping(value = "/send_email")
    public String sendmEmail(Model model) {
        model.addAttribute("provinces", provinceService.findAll());
        model.addAttribute("countries", countryService.findAll());
        return  "second_route/user_sign_in/send_email";
    }

    @GetMapping(value = "/confirm_email")
    public String confirmEmail(Model model) {
        return  "second_route/user_sign_in/confirm_email";
    }
    @GetMapping(value = "/email_alert")
    public String emailAlert(Model model) {
        return  "second_route/user_sign_in/email_alert";
    }
    @GetMapping(value = "/personal_authentication")
    public String personalAuthentication(Model model) {
        return  "second_route/user_sign_in/personal_authentication1";
    }
    @GetMapping(value = "/personal_information")
    public String personalInformation(Model model) {
        return  "second_route/user_sign_in/personal_information";
    }
    @GetMapping(value = "/complete")
    public String complete(Model model) {
        return  "second_route/user_sign_in/complete";
    }


}