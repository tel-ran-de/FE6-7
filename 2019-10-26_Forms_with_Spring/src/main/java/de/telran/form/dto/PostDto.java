package de.telran.form.dto;  // dto - data transfer object

import lombok.Data;

@Data // аннотация lombok, заменяет добавление конструктора и прочих необходимых атрибутов
public class PostDto {
    private String title;
    private String body;
    private String date;
    private String author;
}
