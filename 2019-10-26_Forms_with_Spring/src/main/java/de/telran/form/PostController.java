package de.telran.form;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
@Slf4j
public class PostController {

    @PostMapping("/add-post")
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

    @PostMapping("/add-author")
    public String createNewAuthor(@RequestParam("firstName") String firstName,
                                @RequestParam("lastName") String lastName) {


        log.info(
                "Request received. Vorname={}, Name={}, date={}",
                firstName,
                lastName
        );

        return "New author created";
    }
}

/* @RequestMapping for all Requests */