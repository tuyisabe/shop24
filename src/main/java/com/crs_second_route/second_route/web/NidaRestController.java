package com.crs_second_route.second_route.web;
        import java.util.HashMap;
        import java.util.Map;

        import javax.servlet.http.HttpServletRequest;

        import com.crs_second_route.second_route.service.*;
        import com.crs_second_route.second_route.vo.*;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.beans.factory.annotation.Value;
        import org.springframework.http.HttpEntity;
        import org.springframework.http.HttpHeaders;
        import org.springframework.http.HttpMethod;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.MediaType;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.PathVariable;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RequestMethod;
        import org.springframework.web.bind.annotation.RestController;
        import org.springframework.web.client.RestTemplate;

        import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
public class NidaRestController {

    @Autowired
    private VillageService villageService;
    @Autowired
    private CellService cellService;
    @Autowired
    private SectorService sectorService;
    @Autowired
    private DistrictService districtService;
    @Autowired
    private ProvinceService provinceService;

    @Value("${nida.interface.username}")
    private String NIDA_USRN;

    @Value("${nida.interface.pwd}")
    private String NIDA_PWRD;

    @Value("${nida.url.claim.token}")
    private String NIDA_AUTHENTICATE;

    @Value("${nida.interface.keyPhrase}")
    private String NIDA_KEY_PHRASE;

    @Value("${nida.url.citizen}")
    private String NIDA_GET_CITIZEN;

    @RequestMapping(value = "/getNidaResponse/{nidaNumber}", method = RequestMethod.GET)
    public ResponseEntity<String> getResponse(@PathVariable("nidaNumber") String nidaNumber)
            throws JsonProcessingException {

        RestTemplate restTemplate = new RestTemplate();
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            String tokenJson = "{\"username\":" + "\"" + NIDA_USRN + "\", \"password\":" + "\"" + NIDA_PWRD + "\"}";
            HttpEntity<String> tokenEntity = new HttpEntity<>(tokenJson, headers);
            ResponseEntity<String> tokenResponse = restTemplate.exchange(NIDA_AUTHENTICATE, HttpMethod.POST,
                    tokenEntity, String.class);

            headers.set("Authorization", tokenResponse.getBody()); // accessToken can be the secret key you generate.
            headers.setContentType(MediaType.APPLICATION_JSON);
			/* Sample number
			1192579285580061 : Used on test server
			1194079286831051
			1192179822599088
			1193879825497076
			1198789826293096
			1192579828223086
			1193379831891068
			1199389851303080
			1192880271224088
			1192180273559095
			*/

            String requestJson = "{\"documentNumber\":" + "\"" + nidaNumber + "\", \"keyPhrase\":" + "\""
                    + NIDA_KEY_PHRASE + "\"}";
            HttpEntity<String> entity = new HttpEntity<>(requestJson, headers);
            ResponseEntity<String> response = restTemplate.exchange(NIDA_GET_CITIZEN, HttpMethod.POST, entity,
                    String.class);
            return response;

        } catch (Exception ex) {
            System.out.println(ex);
        }
        return null;
    }


    @RequestMapping(value="/getVillageByCode/{code}", method=RequestMethod.GET)
    public ResponseEntity<Map<String, Object>> getdeleteAirConditionerRequest(HttpServletRequest request,
                                                                              @PathVariable ("code")String code) throws Exception{
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            Village villageVO =villageService.findByCode(code);
            map.put("villageVO", villageVO);

            Cell cellVO = cellService.findByCode(villageVO.getCode().substring(0, 8));
            map.put("cellVO", cellVO);

            Sector sectorVO = sectorService.findByCode(villageVO.getCode().substring(0, 6));
            map.put("sectorVO", sectorVO);

            District districtVO = districtService.findByCode(villageVO.getCode().substring(0, 4));
            map.put("districtVO", districtVO);

            Province provinceVO = provinceService.findByCode(villageVO.getCode().substring(0, 2));
            map.put("provinceVO", provinceVO);

            return new ResponseEntity<Map<String, Object>> (map, HttpStatus.OK);
        } catch (Exception e) {
            map.put("message", e);
            return new ResponseEntity<Map<String, Object>> (map, HttpStatus.BAD_REQUEST);
        }
    }

}
