package com.example.testapp.model;

import javax.validation.constraints.NotNull;

public abstract class Person extends AuditModel {

    @NotNull
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
