package com.crs_second_route.second_route.vo;


import com.crs_second_route.second_route.vo.extensions.AuditingExtension;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "crs_country")
// @Where(clause = "is_deleted = false")
// @SQLDelete(sql = "UPDATE crs_country SET is_deleted = true WHERE id = ?")
@Getter
@Setter
@NoArgsConstructor
public class Country extends AuditingExtension {

    private static final long serialVersionUID = -1999915107857329107L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true)
    private String alpha2Code;

    @Column(unique = true)
    private String alpha3Code;

    @Column(unique = true)
    private String numericCode;

    @Column(name = "name_english")
    private String nameEnglish;

    @Column(name = "name_french")
    private String nameFrench;

    @Column(name = "name_kinyarwanda")
    private String nameKinyarwanda;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "continent_code")
    private String continentCode;

//    @OneToMany(mappedBy = "countryOfBirth", fetch = FetchType.LAZY)
//    @JsonBackReference
//    private List<Applicant> applicants;
//
//    @OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
//    @JsonBackReference
//    private List<Nationality> nationalities;
}