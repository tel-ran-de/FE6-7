package de.telran.form.entity;

import lombok.Data;

import java.util.Date;

@Data
public class PostEntity {
    private Long id;
    private String title;
    private String body;
    private Date date;
    private AuthorEntity authorEntity;
}
