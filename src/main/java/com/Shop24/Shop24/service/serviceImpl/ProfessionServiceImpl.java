package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.ProfessionDao;
import com.crs_second_route.second_route.service.ProfessionService;
import com.crs_second_route.second_route.vo.Profession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessionServiceImpl implements ProfessionService {
    @Autowired
    private ProfessionDao repository;


    @Override
    public List<Profession> listProfession() {
        return repository.findAll();
    }

    @Override
    public Profession findById(long id) {
        return repository.findById(id).get();
    }

    @Override
    public Profession save(Profession profession) {
        return repository.save(profession);
    }


    @Override
    public int delete(long id) {
       return  repository.deleteProfession(id);
    }

    @Override
    public List<Profession> findAll() { 
        return repository.listProfession();
    }

    @Override
    public int countingProfession() { 
        return repository.professionCount();
    }
}
