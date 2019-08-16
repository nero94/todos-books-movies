package com.example.testapp.service;

import com.example.testapp.model.TODO;
import com.example.testapp.model.Status;
import com.example.testapp.repository.TODORepository;
import com.example.testapp.repository.TODOSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class TODOServiceImpl implements TODOService {
    @Autowired
    private TODORepository todoRepository;

    @Override
    public Iterable<TODO> findAll() {
        return todoRepository.findAll();
    }

    @Override
    public Iterable<TODO> findByStatus(Status status) {
        return todoRepository.findAll(TODOSpecification.getTODOsByStatus(status));
    }

    @Override
    public TODO save(TODO todo) {
        return todoRepository.save(todo);
    }

    @Override
    public Optional<TODO> findById(Long id) {
        return todoRepository.findById(id);
    }

    @Override
    public void delete(TODO todo) {
        todoRepository.delete(todo);
    }
}
