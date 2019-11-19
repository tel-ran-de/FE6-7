package de.telran.form.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class AuthorEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String lastName;
}
