package com.Shop24.Shop24.web;


import com.Shop24.Shop24.service.CustomerService;
import com.Shop24.Shop24.vo.CustomerVo;
import com.Shop24.Shop24.vo.dto.CustomerDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class Customer {
    @Autowired
    private CustomerService customerService;

    @RequestMapping("/add_customer")
    public ResponseEntity<Map<String, Object>> registerCustomer(
            @RequestBody CustomerDTO customerDTO, HttpServletRequest request) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();
        try {
            CustomerVo customerVo = new CustomerVo();

            customerVo.setCustomerNames(customerDTO.getCustomerNames());
            customerVo.setAddress(customerDTO.getAddress());
            customerService.createCustomer(customerVo);
            System.out.println(">>>>>>>>>>>");

            return new ResponseEntity<Map<String, Object>> (map, HttpStatus.OK);

        }
        catch (Exception e) {
            map.put("message", e); return new
                    ResponseEntity<Map<String, Object>> (map, HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/all_customer")
    public ResponseEntity<Map<String, Object>> getAllCustomers() {
        Map<String, Object> map = new HashMap<>();
        try {
            map.put("product", customerService.gettingAllCustomer());

            return new ResponseEntity<Map<String, Object>> (map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("error", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);

        }
    }

    @GetMapping("/gettingCustomerById/{id}")
    public ResponseEntity<Map<String, Object>> gettingCustomerById(@PathVariable("id") long id) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            List<CustomerVo> customers = customerService.gettingCustomerById(id);
            map.put("customer", customers);

            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("message", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);
        }
    }
}
