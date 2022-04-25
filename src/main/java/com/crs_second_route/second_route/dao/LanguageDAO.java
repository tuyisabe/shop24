package com.crs_second_route.second_route.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.crs_second_route.second_route.vo.LanguageVO;

@Repository
public interface LanguageDAO extends JpaRepository<LanguageVO, Long> {
	LanguageVO findByCode(String code);

	LanguageVO findLanguageById(long id);
}
