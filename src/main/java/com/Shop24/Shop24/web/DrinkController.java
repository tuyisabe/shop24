package com.Shop24.Shop24.web;

 ;
import com.Shop24.Shop24.service.DrinkService;
import com.Shop24.Shop24.vo.DrinkVo;
import com.Shop24.Shop24.vo.dto.DrinkDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
 import org.springframework.ui.Model;
 import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
 import java.util.List;
 import java.util.Map;
@RestController

public class DrinkController {
    @Autowired
    private DrinkService drinkService;



    @PostMapping(path = "/add", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public DrinkVo add(@RequestBody DrinkVo drinkVo) throws Exception  {
        return  drinkService.createDrink(drinkVo);
    }

    @RequestMapping("/add_drink")
    public ResponseEntity<Map<String, Object>> registerSystemGroup(
            @RequestBody DrinkDTO drinkDTO, HttpServletRequest request) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();
        try {
            DrinkVo drinkVo = new DrinkVo();
            System.out.println(">>>>>>>>>>>");

            drinkVo.setAddress(drinkDTO.getAddress());
            drinkVo.setName(drinkDTO.getName());
            drinkVo.setCategory(drinkDTO.getCategory());
            drinkService.createDrink(drinkVo);


            return new ResponseEntity<Map<String, Object>> (map, HttpStatus.OK);

        }
        catch (Exception e) {
            map.put("message", e); return new
                    ResponseEntity<Map<String, Object>> (map, HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/all_drinks")
    public ResponseEntity<Map<String, Object>> getProducts() {
        Map<String, Object> map = new HashMap<>();
        try {
           map.put("product", drinkService.selectAllDrinks());

            return new ResponseEntity<Map<String, Object>> (map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("error", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);

        }
    }

    @GetMapping("/gettingDrinkById/{id}")
    public ResponseEntity<Map<String, Object>> gettingDrink(@PathVariable("id") long id, Model model) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            List<DrinkVo> drinkVoResult = drinkService.findDrinkById(id);
            map.put("drink", drinkVoResult);

            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("message", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);
        }
    }



}
