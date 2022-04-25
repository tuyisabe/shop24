package com.crs_second_route.second_route.service;

import java.util.List;

import com.crs_second_route.second_route.vo.IdentificationType;

public interface IdentificationTypeService {
    IdentificationType findById(long id);

    IdentificationType findByCode(String code);

    boolean identificationTypeExist() throws Exception;

    void manageIdentificationType(List<IdentificationType> identificationTypeList, String action) throws Exception;

    void saveIdentificationType(IdentificationType identificationType);

    List<IdentificationType> listAllIdentificationType();

    void updateIdentificationType(IdentificationType identificationType);

    int deleteIdentificationType(long id);

    public int countingIdentification();

    IdentificationType findSingleById( long id);
}
