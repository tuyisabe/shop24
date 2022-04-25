package com.crs_second_route.second_route.service.serviceImpl;

import java.util.List;

import com.crs_second_route.second_route.dao.NationalityDAO;
import com.crs_second_route.second_route.service.NationalityService;
import com.crs_second_route.second_route.vo.Nationality;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class NationalityServiceImpl implements NationalityService {
	@Autowired
	private NationalityDAO nationalityRepository;

	@Override
	public Nationality findById(long id) {
		return nationalityRepository.findById(id).get();
	}

	@Override
	public Nationality findByCode(String code) {
		return nationalityRepository.findByCode(code);
	}

	@Override
	public Nationality save(Nationality nationality) {
		return nationalityRepository.save(nationality);
	}

	@Override
	public List<Nationality> findAll() {
		return nationalityRepository.findAll();
	}

	@Override
	public void delete(long id) {
		nationalityRepository.deleteById(id);
	}

}
