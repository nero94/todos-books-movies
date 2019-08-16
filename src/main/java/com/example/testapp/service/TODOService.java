package com.example.testapp.service;

import com.example.testapp.model.TODO;
import com.example.testapp.model.Status;

import java.util.Optional;

public interface TODOService {
    Iterable<TODO> findAll();

    Iterable<TODO> findByStatus(Status status);

    TODO save(TODO todo);

    Optional<TODO> findById(Long id);

    void delete(TODO todo);
}
