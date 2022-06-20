package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.ReasonDao;
import com.crs_second_route.second_route.service.ReasonService;
import com.crs_second_route.second_route.vo.Reason;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ReasonServiceImpl implements ReasonService {

    @Autowired
    private ReasonDao repository;

    // @Override
    // public List<ApplicationReason> findAll(){
    // return repository.findAll();
    // }

    @Override
    public List<Reason> listApplicationReasons() {
        return repository.listApplicationReasons();
    }

    @Override
    public Reason findById(long id) {
        return repository.findById(id).get();
    }

    @Override
    public Reason save(Reason applicationReason) {
        return repository.save(applicationReason);
    }

    

    @Override
    public List<Reason> listReasons() {
        return repository.listApplicationReasons();
    }

    @Override
    public int countingReason() { 
        return repository.applicationReasonCount();
    }

    @Override
    public Reason updateReason(Reason reason) {
        return repository.save(reason);
    }

    @Override
    public int delete(long id) { 
        return repository.deleteReasonType(id);
    }

    @Override
    public void update(long id, String nameEnglish, String nameFrench, String nameKinyarwanda) {
        repository.updateReason(id, nameEnglish, nameFrench, nameKinyarwanda);
        
    }

     
}
