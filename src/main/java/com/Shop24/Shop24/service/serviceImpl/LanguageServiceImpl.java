package com.crs_second_route.second_route.service.serviceImpl;

import java.util.List;

import com.crs_second_route.second_route.dao.LanguageDAO;
import com.crs_second_route.second_route.service.LanguageService;
import com.crs_second_route.second_route.vo.LanguageVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LanguageServiceImpl implements LanguageService {
	@Autowired
	private LanguageDAO languageDAO;

	@Override
	public LanguageVO getLanguageById(long id) {
		return languageDAO.findLanguageById(id);
	}

	@Override
	public LanguageVO findByCode(String code) {
		return languageDAO.findByCode(code);
	}

	@Override
	public LanguageVO save(LanguageVO language) {
		return languageDAO.save(language);
	}

	@Override
	public List<LanguageVO> findAll() {
		return languageDAO.findAll();
	}

	@Override
	public void delete(long id) {
		languageDAO.deleteById(id);
	}

	@Override
	public boolean languageExist() throws Exception {
		Long language = languageDAO.count();
		if (language > 0) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public void manageLanguage(List<LanguageVO> languageList, String action) throws Exception {
		if (action.equals("save") || action.equals("update")) {
			languageDAO.saveAll(languageList);
		}

	}

	@Override
	public List<LanguageVO> findAllLanguage() {
		return languageDAO.findAll();
	}


}
