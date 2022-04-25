package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.MajOfficeDAO;
import com.crs_second_route.second_route.service.MajofficeService;
import com.crs_second_route.second_route.vo.MajOffice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List; 
@Service
public class MajOfficeServiceImpl implements MajofficeService {
    @Autowired
    private MajOfficeDAO majOfficeDAO;

    @Override
    public MajOffice findById(long id) {
        return majOfficeDAO.findById(id).get();
    }
    @Override
    public List<MajOffice> listMajorOffices() {
        return majOfficeDAO.selectMajOffices();
    }

    public void saveMajorOffices(MajOffice majOffice) {
        majOfficeDAO.save(majOffice);

    }

    @Override
    public int deleteMajorOffice(long id) {
        return majOfficeDAO.deleteMajOffice(id);
    }
    @Override
    public int majOfficeCount() { 
        return majOfficeDAO.majCount();
    }


}
