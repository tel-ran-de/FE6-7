package de.telran.form.dto;

import de.telran.form.entity.AuthorEntity;
import lombok.Data;

import java.util.Date;

@Data
public class PostDto {
    private String title;
    private String body;
    private Date date;
    private AuthorEntity authorEntity;
}
