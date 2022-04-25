package com.crs_second_route.second_route.vo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.crs_second_route.second_route.vo.extensions.AuditingExtension;
import org.hibernate.annotations.NaturalId;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * These codes must be predefined since they are referenced as they are.
 * Note: Irembo currently does not fetch these from an API.
 * "0": FRENCH
 * "1": ENGLISH
 * "2": KINYARWANDA
 */

@Entity
@Table(name = "crs_language")
@Getter
@Setter
@NoArgsConstructor
public class LanguageVO extends AuditingExtension implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NaturalId
    @Column(name = "code")
    private String code;

    private String nameEnglish;
    private String nameFrench;
    private String nameKinyarwanda;

    public LanguageVO(long id, String code, String nameEnglish, String nameFrench, String nameKinyarwanda) {
        super();
        this.id = id;
        this.code = code;
        this.nameEnglish = nameEnglish;
        this.nameFrench = nameFrench;
        this.nameKinyarwanda = nameKinyarwanda;
    }

}
