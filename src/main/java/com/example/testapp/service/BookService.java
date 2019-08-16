package com.example.testapp.service;

import com.example.testapp.model.Book;
import com.example.testapp.model.Status;

import java.util.Optional;

public interface BookService {
    Iterable<Book> findAll();

    Iterable<Book> findByStatus(Status status);

    Book save(Book todo);

    Optional<Book> findById(Long id);

    void delete(Book todo);
}
