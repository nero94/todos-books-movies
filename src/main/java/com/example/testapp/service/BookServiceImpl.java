package com.example.testapp.service;

import com.example.testapp.model.Book;
import com.example.testapp.model.Status;
import com.example.testapp.repository.BookRepository;
import com.example.testapp.repository.BookSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public Iterable<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Iterable<Book> findByStatus(Status status) {
        return bookRepository.findAll(BookSpecification.getBooksByStatus(status));
    }

    @Override
    public Book save(Book todo) {
        return bookRepository.save(todo);
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public void delete(Book todo) {
        bookRepository.delete(todo);
    }
}
