package com.crs_second_route.second_route.vo;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.crs_second_route.second_route.vo.extensions.AuditingExtension;
import com.fasterxml.jackson.annotation.JsonBackReference;


import org.hibernate.annotations.NaturalId;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * These codes must be predefined since they are referenced as they are.
 * Note: Irembo currently does not fetch these from an API.
 * "P": PHONE NUMBER
 * "E": EMAIL
 */

@Entity
@Table(name = "crs_alarm_type")
@Getter
@Setter
@NoArgsConstructor
public class AlarmType extends AuditingExtension {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NaturalId
    @Column(name = "code")
    private String code;

    private String nameEnglish;
    private String nameFrench;
    private String nameKinyarwanda;

	/**
	 * @param id
	 * @param code
	 * @param nameEnglish
	 * @param nameFrench
	 * @param nameKinyarwanda
	 */
	public AlarmType(long id, String code, String nameEnglish, String nameFrench, String nameKinyarwanda) {
		this.id = id;
		this.code = code;
		this.nameEnglish = nameEnglish;
		this.nameFrench = nameFrench;
		this.nameKinyarwanda = nameKinyarwanda;
	} 

    
}
