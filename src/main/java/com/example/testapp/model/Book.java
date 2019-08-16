package com.example.testapp.model;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "books")
public class Book extends AuditModel {
    @NotEmpty
    private String name;
    private Author author;
    private short releaseYear;
    private int pages;
    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private PublishingHouse publishingHouse;
    @Enumerated(EnumType.ORDINAL)
    private Status status = Status.ACTIVE;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public short getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(short releaseYear) {
        this.releaseYear = releaseYear;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public PublishingHouse getPublishingHouse() {
        return publishingHouse;
    }

    public void setPublishingHouse(PublishingHouse publishingHouse) {
        this.publishingHouse = publishingHouse;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
