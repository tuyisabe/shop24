package com.crs_second_route.second_route.vo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "crs_user_table")
@Getter
@Setter
@NoArgsConstructor
public class UserTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Lob
    @Column(name = "photo", columnDefinition="BLOB")
    private String profilePicture;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(columnDefinition = "VARCHAR(255) GENERATED ALWAYS AS (CONCAT(first_name, ' ' , last_name, ' ' , middle_name))", insertable = false, updatable = false)
    private String fullName;

    private Date dateOfBirth;
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

    @Column(unique = true, nullable = false)
    private String email;
    @Column(unique = false, nullable = false)
    private String password;

    private String phoneNumber;

    @OneToMany(mappedBy = "userId", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<UserOccupation> occupation;

    @OneToMany(mappedBy = "userId", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<UserProfession> profession;

    @OneToMany(mappedBy = "userId", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<UserNationalities> nationality;

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

    @Column(name = "created_at")
    @CreatedDate
    private Date createdAt;

    @Column(name = "last_modified_at")
    @LastModifiedDate
    private Date lastModifiedAt;
    @Column(name = "is_deleted", insertable = false, columnDefinition = "boolean default false")
    private boolean isDeleted;
}
