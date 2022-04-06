package com.crs_second_route.second_route;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserSignIn {
    private static final String INDEX = "second_route/user_sign_in/login";
    private static final String REDIRECT_INDEX = "redirect:/applicant_route";
    private static final String REDIRECT_TO_LOGOUT = "redirect:/login?logout";

    @GetMapping(value ="")
    public String index(Model model) {
        return "second_route/index";
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