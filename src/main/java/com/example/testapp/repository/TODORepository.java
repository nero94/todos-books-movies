package com.example.testapp.repository;

import com.example.testapp.model.TODO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TODORepository extends JpaRepository<TODO, Long>, JpaSpecificationExecutor<TODO> {
}