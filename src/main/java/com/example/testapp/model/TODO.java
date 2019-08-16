package com.example.testapp.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "todos")
public class TODO extends AuditModel {

    @NotBlank
    @Size(min = 3, max = 256)
    private String title;

    @Enumerated(EnumType.ORDINAL)
    private Status status = Status.ACTIVE;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

}