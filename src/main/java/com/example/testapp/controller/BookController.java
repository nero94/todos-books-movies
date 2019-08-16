package com.example.testapp.controller;

import com.example.testapp.exception.ResourceNotFoundException;
import com.example.testapp.model.Book;
import com.example.testapp.model.Status;
import com.example.testapp.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public Iterable<Book> getBooks(@RequestParam(name = "status", required = false) Status status, Pageable pageable) {
        if (status == null) {
            return bookService.findAll();
        }
        return bookService.findByStatus(status);
    }

    @PostMapping("/books")
    public Book createBook(@Valid @RequestBody Book book) {
        return bookService.save(book);
    }

    @PutMapping("/books/{id}")
    public Book updateBook(@PathVariable Long id,
                           @Valid @RequestBody Book request) {
        return bookService.findById(id)
                .map(book -> {
                    book.setName(request.getName());
                    book.setAuthor(request.getAuthor());
                    book.setPages(request.getPages());
                    book.setPublishingHouse(request.getPublishingHouse());
                    book.setReleaseYear(request.getReleaseYear());
                    book.setStatus(request.getStatus());
                    return bookService.save(book);
                }).orElseThrow(() -> new ResourceNotFoundException("Book not found with id " + id));
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        return bookService.findById(id)
                .map(book -> {
                    bookService.delete(book);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Book not found with id " + id));
    }
}
