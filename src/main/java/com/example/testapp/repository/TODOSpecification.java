package com.example.testapp.repository;

import com.example.testapp.model.TODO;
import com.example.testapp.model.Status;
import org.springframework.data.jpa.domain.Specification;

public class TODOSpecification {
    public static Specification<TODO> getTODOsByStatus(Status status) {
        return (root, query, criteriaBuilder) -> {
            return criteriaBuilder.equal(root.get("status"), status);
        };
    }
}
