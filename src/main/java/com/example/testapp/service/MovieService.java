package com.example.testapp.service;

import com.example.testapp.model.Movie;
import com.example.testapp.model.Status;

import java.util.Optional;

public interface MovieService {
    Iterable<Movie> findAll();

    Iterable<Movie> findByStatus(Status status);

    Movie save(Movie todo);

    Optional<Movie> findById(Long id);

    void delete(Movie todo);
}
