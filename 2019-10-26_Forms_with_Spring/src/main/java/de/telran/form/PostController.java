package de.telran.form;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/post")
@Slf4j
public class PostController {

    @GetMapping
    public String createNewPost(@RequestParam("title") String title,
                                @RequestParam("postBody") String body,
                                @RequestParam("date") String date,
                                @RequestParam("author") String author) {
        log.info(
                "Request received. Title={}, body={}, date={}, author={}",
                title,
                body,
                date,
                author
        );
        return "New post created";
    }

   /* @GetMapping
    public String createNewPostAuthor(
            @RequestParam("author_firstName") String author_firstName,
            @RequestParam("author_lastName") String author_lastName)
    {
        log.info(
                "Request received. Title={}, body={}, date={}, author_firstName={}, author_lastName",

                author_lastName,
                author_lastName
        );
        return "New postAuthor created";
    }*/
}
