package com.Shop24.Shop24.web;

import com.Shop24.Shop24.service.CargoService;
import com.Shop24.Shop24.vo.CargoVo;
import com.Shop24.Shop24.vo.dto.CargoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CargoController {
    @Autowired
    private CargoService cargoService;

    @RequestMapping("/add_cargo")
    public ResponseEntity<Map<String, Object>> registerCargo(
            @RequestBody CargoDTO cargoDTO, HttpServletRequest request) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();
        try {
            CargoVo cargo= new CargoVo();
            cargo.setCargoName(cargoDTO.getCargoName());
            cargo.setLatitude(cargoDTO.getLatitude());
            cargo.setLongitude(cargoDTO.getLongitude());
            cargo.setCreatedDate(new Timestamp(new Date().getTime()));
            cargo.setUpdatedDate(new Timestamp(new Date().getTime()));
            cargoService.createNewCargo(cargo);

            return new ResponseEntity<Map<String, Object>> (map, HttpStatus.OK);

        }
        catch (Exception e) {
            map.put("message", e); return new
                    ResponseEntity<Map<String, Object>> (map, HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/all_cargo")
    public ResponseEntity<Map<String, Object>> getAllCargo() {
        Map<String, Object> map = new HashMap<>();
        try {
            map.put("cargo", cargoService.gettingAllCargo());

            return new ResponseEntity<Map<String, Object>> (map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("error", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);

        }
    }

    @GetMapping("/gettingCargoById/{id}")
    public ResponseEntity<Map<String, Object>> gettingCargoById(@PathVariable("id") long id) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            List<CargoVo> cargos = cargoService.gettingCargoById(id);
            map.put("cargos", cargos);

            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("message", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/gettingCargoByRange/{from}/{to}")
    public ResponseEntity<Map<String, Object>> gettingCargoByRangeDate(@PathVariable("from") String from, @Param("to") String to) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            List<CargoVo> cargoByRange = cargoService.gettingCargoByRangeDate(from, to);
            map.put("cargoByRange", cargoByRange);

            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("message", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);
        }
    }

}
