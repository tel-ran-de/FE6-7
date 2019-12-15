package de.telran.form.dto;

import de.telran.form.entity.AuthorEntity;
import lombok.*;

import java.util.Date;

@Data
public class AuthorDto {

    public AuthorDto(){

    }
    public AuthorDto(AuthorEntity authorEntity){
        this.id = authorEntity.getId();
        this.firstName = authorEntity.getFirstName();
        this.lastName = authorEntity.getLastName();
        this.date = authorEntity.getDate();
    }
    private Long id;
    private String firstName;
    private String lastName;
    private Date date;
}
