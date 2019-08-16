package com.example.testapp.repository;

import com.example.testapp.model.Book;
import com.example.testapp.model.Status;
import org.springframework.data.jpa.domain.Specification;

public class BookSpecification {
    public static Specification<Book> getBooksByStatus(Status status) {
        return (root, query, criteriaBuilder) -> {
            return criteriaBuilder.equal(root.get("status"), status);
        };
    }
}
