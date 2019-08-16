package com.example.testapp.controller;

import com.example.testapp.exception.ResourceNotFoundException;
import com.example.testapp.model.Movie;
import com.example.testapp.model.Status;
import com.example.testapp.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/movies")
    public Iterable<Movie> getMovies(@RequestParam(name = "status", required = false) Status status, Pageable pageable) {
        if (status == null) {
            return movieService.findAll();
        }
        return movieService.findByStatus(status);
    }

    @PostMapping("/movies")
    public Movie createMovie(@Valid @RequestBody Movie movie) {
        return movieService.save(movie);
    }

    @PutMapping("/movies/{id}")
    public Movie updateBook(@PathVariable Long id,
                            @Valid @RequestBody Movie request) {
        return movieService.findById(id)
                .map(movie -> {
                    movie.setName(request.getName());
                    movie.setReleaseYear(request.getReleaseYear());
                    movie.setStudio(request.getStudio());
                    movie.setActors(request.getActors());
                    movie.setStatus(request.getStatus());
                    return movieService.save(movie);
                }).orElseThrow(() -> new ResourceNotFoundException("Movie not found with id " + id));
    }

    @DeleteMapping("/movies/{id}")
    public ResponseEntity<?> deleteMovie(@PathVariable Long id) {
        return movieService.findById(id)
                .map(movie -> {
                    movieService.delete(movie);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Book not found with id " + id));
    }

}
