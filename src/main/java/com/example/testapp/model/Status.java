package com.example.testapp.model;

public enum Status {

    ACTIVE(1L, "active"),
    DONE(2L, "done");

    private Long id;
    private String name;

    Status(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public static Status from(Long id) {
        for (Status position : values()) {
            if (position.getId().equals(id))
                return position;
        }

        throw new IllegalArgumentException("Cannot get position for ID " + id);
    }

    public static Status from(String name) {
        for (Status position : values()) {
            if (position.getName().toUpperCase().equals(name.toUpperCase()))
                return position;
        }

        throw new IllegalArgumentException("No such position " + name);
    }
}