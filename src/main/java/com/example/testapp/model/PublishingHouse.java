package com.example.testapp.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "publishing_house")
public class PublishingHouse extends AuditModel {
    @NotEmpty
    private String name;
    private short yearOfCreation;
    private String city;
    private String country;
    private String phone;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public short getYearOfCreation() {
        return yearOfCreation;
    }

    public void setYearOfCreation(short yearOfCreation) {
        this.yearOfCreation = yearOfCreation;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
