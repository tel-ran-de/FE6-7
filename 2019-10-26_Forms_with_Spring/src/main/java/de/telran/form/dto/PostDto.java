package de.telran.form.dto;

import de.telran.form.entity.AuthorEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;

@Data
public class PostDto {
    private String title;
    private String postBody;
    private Date date;
    private String firstName;
    private String lastName;
}

