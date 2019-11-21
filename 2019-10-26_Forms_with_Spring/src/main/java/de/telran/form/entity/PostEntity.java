package de.telran.form.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;

/*import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;  */

@Data
@Entity

public class PostEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String body;
    private Date date;
    @ManyToOne(targetEntity = AuthorEntity.class)
    private AuthorEntity authorEntity;
}
