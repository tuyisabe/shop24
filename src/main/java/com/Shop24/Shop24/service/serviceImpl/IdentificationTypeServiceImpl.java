package com.crs_second_route.second_route.service.serviceImpl;

import java.util.List;

import com.crs_second_route.second_route.dao.IdentificationTypeDAO;
import com.crs_second_route.second_route.service.IdentificationTypeService;
import com.crs_second_route.second_route.vo.IdentificationType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class IdentificationTypeServiceImpl implements IdentificationTypeService {
	@Autowired
	private IdentificationTypeDAO repository;

	@Override
	public IdentificationType findById(long id) {
		return repository.findById(id).get();
	}



	@Override
	public  IdentificationType findByCode(String code) {
		return repository.findByCode(code);
	}

	@Override
	public boolean identificationTypeExist() throws Exception {
		long identityCount = repository.count();
		if (identityCount > 0) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public void manageIdentificationType(List< IdentificationType> identificationTypeList, String action)
			throws Exception {
		if (action.equals("save") || action.equals("update")) {
			repository.saveAll(identificationTypeList);
		}

	}

	@Override
	public void saveIdentificationType( IdentificationType identificationType) {
		repository.save(identificationType);
	}

	@Override
	public List<IdentificationType> listAllIdentificationType() {
		return repository.findAllAlIdentificationType();
	}

	@Override
	public void updateIdentificationType(IdentificationType identificationType) {
		repository.save(identificationType);
	}

	@Override
	public int deleteIdentificationType(long id) {
		return repository.deleteIdentificationType(id);
	}

	@Override
	public int countingIdentification() { 
		return repository.identificationCount();
	}

	@Override
	public IdentificationType findSingleById(long id) {
		return null;
	}
}
