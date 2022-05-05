package com.crs_second_route.second_route.vo.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Getter
@Setter
@NoArgsConstructor
public class NewUserDTO {
    private long id;

    private String profilePicture;

    private String firstName;
    private String lastName;
    private String middleName;
    private String dateOfBirth;
    private String fatherFirstName;
    private String fatherLastName;
    private String motherFirstName;
    private String motherLastName;
    private String maritalStatus;
    private String gender;
    private String language;
//    private String majOffice;

    private String identificationType;
    private String IdentificationNumber;
    private String PlaceOfIssue;
    private String DateOfIssue;
    private String DateOfExpiry;

    private String email;
    private String password;
    private String phoneNumber;

    // Place of Birth
    private String birthCountryId;
    private String otherBirthProvince;
    private String birthProvinceId;
    private String birthDistrictId;
    private String birthSectorId;
    private String birthCellId;

    // Place of Birth
    private String registrationCountryId;
    private String registrationProvinceId;
    private String otherRegistrationProvince;
    private String registrationDistrictId;
    private String registrationSectorId;
    private String registrationCellId;

    // Place of Birth
    private String residentCountryId;
    private String otherResidentProvince;
    private String residentProvinceId;
    private String residentDistrictId;
    private String residentSectorId;
    private String residentCellId;

    private String[] occupation;
    private String[] profession;
    private String[] nationality;


}
