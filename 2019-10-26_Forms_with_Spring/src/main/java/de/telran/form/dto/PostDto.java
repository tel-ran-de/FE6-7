package de.telran.form.dto;

import de.telran.form.entity.PostEntity;
import lombok.*;

import java.util.Date;

@Data
public class PostDto {

    public PostDto() {
    }

    public PostDto(PostEntity postEntity) {
        this.body = postEntity.getBody();
        this.id = postEntity.getId();
        this.title = postEntity.getTitle();
        this.date = postEntity.getDate();
    }

    private Long id;
    private String title;
    private String body;
    private Date date;
    private Long authorId;
}
