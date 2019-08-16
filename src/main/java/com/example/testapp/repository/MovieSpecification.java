package com.example.testapp.repository;

import com.example.testapp.model.Movie;
import com.example.testapp.model.Status;
import org.springframework.data.jpa.domain.Specification;

public class MovieSpecification {
    public static Specification<Movie> getBooksByStatus(Status status) {
        return (root, query, criteriaBuilder) -> {
            return criteriaBuilder.equal(root.get("status"), status);
        };
    }
}
