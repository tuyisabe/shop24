package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.FileType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
// @Transactional
public interface FileTypeDAO extends JpaRepository<FileType, Long> {

    @Query(value = "SELECT * FROM crs_file_type WHERE is_deleted = 0", nativeQuery = true)
    public List<FileType> selectFile();

    @Modifying
    @Query(value = "UPDATE crs_file_type SET is_deleted= 1 WHERE id= :id", nativeQuery = true)
    int deleting(@Param("id") long id);

    @Query(value = "SELECT count(*) FROM crs_file_type", nativeQuery = true)
    int fileCount();

}
