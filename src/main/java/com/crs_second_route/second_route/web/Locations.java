package com.crs_second_route.second_route.web;

import com.crs_second_route.second_route.service.CellService;
import com.crs_second_route.second_route.service.DistrictService;
import com.crs_second_route.second_route.service.ProvinceService;
import com.crs_second_route.second_route.service.SectorService;
import com.crs_second_route.second_route.vo.Cell;
import com.crs_second_route.second_route.vo.District;
import com.crs_second_route.second_route.vo.Province;
import com.crs_second_route.second_route.vo.Sector;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
public class Locations {

    @Autowired
    private ProvinceService provinceService;
    @Autowired
    private DistrictService districtService;
    @Autowired
    private SectorService sectorService;
    @Autowired
    private CellService cellService;


    @RequestMapping(value = "/getResidentProvince/{code}", method = RequestMethod.GET)
    public ResponseEntity<Map<String, Object>> getResidentProvinces(HttpServletRequest request,
                                                                    @PathVariable("code") String code) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            Province provinceVO = provinceService.findByCode(code);
            map.put("provinceVO", provinceVO);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("message", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/getResidentDistrict/{code}", method = RequestMethod.GET)
    public ResponseEntity<Map<String, Object>> getResidentDistrict(HttpServletRequest request,
                                                                   @PathVariable("code") String code) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        try {

            District districtVO = districtService.findByCode(code);
            map.put("districtVO", districtVO);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("message", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/getResidentSector/{code}", method = RequestMethod.GET)
    public ResponseEntity<Map<String, Object>> getResidentSector(HttpServletRequest request,
                                                                 @PathVariable("code") String code) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        try {

            Sector sectorVO = sectorService.findByCode(code);
            map.put("sectorVO", sectorVO);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("message", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/getResidentCell/{code}", method = RequestMethod.GET)
    public ResponseEntity<Map<String, Object>> getResidentCel(HttpServletRequest request,
                                                              @PathVariable("code") String code) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        try {

            Cell cellVO = cellService.findByCode(code);
            map.put("cellVO", cellVO);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("message", e);
            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.BAD_REQUEST);
        }
    }
}
