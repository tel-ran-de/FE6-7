package de.telran.form.dto;

import de.telran.form.entity.AuthorEntity;
import lombok.Data;

@Data
public class PostDto {
    private String title;
    private String body;
    private Data date;
    private AuthorEntity authorEntity;

}
