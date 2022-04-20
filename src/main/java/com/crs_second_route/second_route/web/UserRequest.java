package com.crs_second_route.second_route.web;
import com.crs_second_route.second_route.service.UserTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserRequest {
    private static final String INDEX = "second_route/user_request/application_list";
    private static final String REDIRECT_INDEX = "redirect:/application_list";
    private static final String REDIRECT_TO_LOGOUT = "redirect:/login?logout";
    @Autowired
    private UserTableService userTableService;


    @GetMapping(value = "/application_list")
    public String applicationsList(Model model) {
//        userTableService.findAll();
        return "second_route/user_request/application_list";
    }
    @GetMapping(value = "/request_one")
    public String requestOne(Model model) {
        return "second_route/user_request/application_equest_one";
    }
    @GetMapping(value = "/request_two")
    public String requestTwo(Model model) {
        return "second_route/user_request/application_equest_two";
    }
    @GetMapping(value = "/request_three")
    public String requestThree(Model model) {
        return "second_route/user_request/application_request_three";
    }
    @GetMapping(value = "/application_search")
    public String applicationsSearch(Model model) {
        return "second_route/user_request/list_search_result";
    }
    @GetMapping(value = "/search_result")
    public String detailSearchResult(Model model) {
        return  "second_route/user_request/list_search_result";
    }
    @GetMapping(value = "/user_detail")
    public String userDetail(Model model) {
        return  "second_route/user_request/user_detail";
    }
    @GetMapping(value = "/application_details")
    public String applicationDetails(Model model) {
        return  "second_route/user_request/application_details";
    }
}
