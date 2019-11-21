package de.telran.form.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PostDto {
    private String title;
    private String body;
    private Date date;
    private Long authorId;
}
