package com.example.testapp.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "actors")
public class Actor extends Person {
}
