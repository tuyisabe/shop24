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
public class CustomerDTO {
    private String CustomerNames;
    private String address;
    private Timestamp createdDate;
    private Timestamp updatedDate;
}
