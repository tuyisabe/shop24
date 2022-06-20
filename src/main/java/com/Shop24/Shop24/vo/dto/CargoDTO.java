package com.Shop24.Shop24.vo.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Getter
@Setter
@NoArgsConstructor


public class CargoDTO {
    private String cargoName;
    private String longitude;
    private String latitude;
    private String status;
    private Timestamp createdDate;
    private Timestamp updatedDate;
}
