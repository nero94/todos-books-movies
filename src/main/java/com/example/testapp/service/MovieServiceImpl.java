package com.example.testapp.service;

import com.example.testapp.model.Movie;
import com.example.testapp.model.Status;
import com.example.testapp.repository.MovieRepository;
import com.example.testapp.repository.MovieSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public Iterable<Movie> findAll() {
        return movieRepository.findAll();
    }

    @Override
    public Iterable<Movie> findByStatus(Status status) {
        return movieRepository.findAll(MovieSpecification.getBooksByStatus(status));
    }

    @Override
    public Movie save(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public Optional<Movie> findById(Long id) {
        return movieRepository.findById(id);
    }

    @Override
    public void delete(Movie movie) {
        movieRepository.delete(movie);
    }
}
