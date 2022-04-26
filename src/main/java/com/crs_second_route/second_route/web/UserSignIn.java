package com.crs_second_route.second_route.web;

import com.crs_second_route.second_route.dao.UserNationalitiesDAO;
import com.crs_second_route.second_route.service.*;
import com.crs_second_route.second_route.vo.*;
import com.crs_second_route.second_route.vo.dto.NewUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
public class UserSignIn {
    private static final String INDEX = "second_route/user_sign_in/login";
    private static final String REDIRECT_INDEX = "redirect:/applicant_route";
    private static final String REDIRECT_TO_LOGOUT = "redirect:/login?logout";

    @Autowired
    private ProvinceService provinceService;
    @Autowired
    private CountryService countryService;
    @Autowired
    private OccupationService occupationService;
    @Autowired
    private IdentificationTypeService identificationTypeService;
    @Autowired
    private ProfessionService professionService;
    @Autowired
    private NationalityService nationalityService;
    @Autowired
    private LanguageService languageService;
    @Autowired
    private MajofficeService majofficeService;
    @Autowired
    private UserTableService userTableService;
    @Autowired
    private UserNationalitiesService userNationalitiesService;
    @Autowired
    private UserProfessionService userProfessionService;
    @Autowired
    private UserOccupationService userOccupationService;

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
    public String sendmEmail(Model model) throws Exception {
        model.addAttribute("provinces", provinceService.findAll());
        model.addAttribute("countries", countryService.findAll());
        model.addAttribute("occupation",occupationService.findAllOccupation());
        model.addAttribute("profession",professionService.findAll());
        model.addAttribute("nationality",nationalityService.findAll());
        model.addAttribute("maj",majofficeService.listMajorOffices());
        model.addAttribute("languages",languageService.findAll());
        return  "second_route/user_sign_in/send_email";
    }


    @PostMapping("/add_public_users")
    public ResponseEntity<Map<String, Object>> add_personal_info_justiciable(
            @RequestBody NewUserDTO newUserDTO)
            throws Exception {
//        Map<String, Object> message = new HashMap<>();

        UserTable userTable = new UserTable();

        userTable.setProfilePicture(newUserDTO.getProfilePicture());
        userTable.setFirstName(newUserDTO.getFirstName());
        userTable.setLastName(newUserDTO.getLastName());
        userTable.setMiddleName(newUserDTO.getMiddleName());
        userTable.setDateOfBirth(newUserDTO.getDateOfBirth());
        userTable.setFatherFirstName(newUserDTO.getFatherFirstName());
        userTable.setFatherLastName(newUserDTO.getFatherLastName());
        userTable.setMotherFirstName(newUserDTO.getMotherFirstName());
        userTable.setMotherLastName(newUserDTO.getFatherLastName());
        userTable.setMaritalStatus(newUserDTO.getMaritalStatus());
        userTable.setGender(newUserDTO.getGender());
        userTable.setLanguage("newUserDTO.getLanguage()");
        userTable.setMajOffice(newUserDTO.getMajOffice());
        userTable.setIdentificationNumber(newUserDTO.getIdentificationNumber());
        userTable.setIdentificationType(newUserDTO.getIdentificationType());
        userTable.setPlaceOfIssue(newUserDTO.getPlaceOfIssue());
        userTable.setDateOfIssue(newUserDTO.getDateOfIssue());
        userTable.setDateOfExpiry(newUserDTO.getDateOfExpiry());
        userTable.setEmail("niysalom@gmail.com");
        userTable.setPassword("newUserDTO.getPasswor");
        userTable.setPhoneNumber(newUserDTO.getPhoneNumber());
        userTable.setBirthCountryId(newUserDTO.getBirthCountryId());
        userTable.setOtherBirthProvince(newUserDTO.getOtherBirthProvince());
        userTable.setBirthProvinceId(newUserDTO.getBirthProvinceId());
        userTable.setBirthDistrictId(newUserDTO.getBirthDistrictId());
        userTable.setBirthSectorId(newUserDTO.getBirthSectorId());
        userTable.setBirthCellId(newUserDTO.getBirthCellId());
        userTable.setRegistrationCountryId(newUserDTO.getRegistrationCountryId());
        userTable.setRegistrationProvinceId(newUserDTO.getRegistrationProvinceId());
        userTable.setOtherRegistrationProvince(newUserDTO.getOtherRegistrationProvince());
        userTable.setRegistrationDistrictId(newUserDTO.getRegistrationDistrictId());
        userTable.setRegistrationSectorId(newUserDTO.getRegistrationSectorId());
        userTable.setResidentCellId(newUserDTO.getResidentCellId());
        userTable.setResidentCountryId(newUserDTO.getResidentCountryId());
        userTable.setOtherResidentProvince(newUserDTO.getOtherResidentProvince());
        userTable.setResidentDistrictId(newUserDTO.getResidentDistrictId());
        userTable.setResidentSectorId(newUserDTO.getResidentSectorId());
        userTable.setResidentCellId(newUserDTO.getResidentCellId());


        userTableService.createNewUser(userTable);

        for( String nationalityLoop : newUserDTO.getNationality()) {
            Nationality nationality= nationalityService.findById(Long.parseLong(nationalityLoop));
            UserNationalities userNationalities= new UserNationalities();
            userNationalities.setNationality(String.valueOf(nationality.getId()));
            userNationalities.setUserId(userTable);
            userNationalitiesService.saveUserNationality(userNationalities);
        }
        for (String professionLoop : newUserDTO.getProfession()){
            Profession profession = professionService.findById(Long.parseLong(professionLoop));
            UserProfession userProfession = new UserProfession();
            userProfession.setProfession(String.valueOf(profession.getId()));
            userProfession.setUserId(userTable);
            userProfessionService.saveUserProfession(userProfession);
        }

        for (String occupationLoop : newUserDTO.getOccupation()){
            Occupation occupation = occupationService.findById(Long.parseLong(occupationLoop));
            UserOccupation userOccupation = new UserOccupation();
            userOccupation.setOccupation(String.valueOf(occupation.getId()));
            userOccupation.setUserId(userTable);
            userOccupationService.saveUserOccupation(userOccupation);
        }

        return null;
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