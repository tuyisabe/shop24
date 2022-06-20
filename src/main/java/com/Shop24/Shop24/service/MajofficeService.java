package com.crs_second_route.second_route.service;



import com.crs_second_route.second_route.vo.MajOffice;

import java.util.List;

public interface MajofficeService {
    MajOffice findById(long id);

    List<MajOffice> listMajorOffices();

    public void saveMajorOffices(MajOffice majOffice);

    int deleteMajorOffice(long id);
    
    int majOfficeCount();

}
