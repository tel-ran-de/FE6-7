package de.telran.form.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
public class AuthorEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String lastName;
    private Date date;

    @ManyToOne(targetEntity = AuthorEntity.class)
    private AuthorEntity authorEntity;
}
