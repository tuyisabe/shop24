package com.crs_second_route.second_route.vo;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.crs_second_route.second_route.vo.extensions.AuditingExtension;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "crs_reason")
@Table(name = "crs_reason")
@Getter
@Setter
@NoArgsConstructor
public class Reason extends AuditingExtension implements Serializable { // TODO Remember to add "Other" in
                                                                        // the database here
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String descriptionEnglish;
    private String descriptionFrench;
    private String descriptionKinyarwanda;



}
