package de.telran.form;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
@Slf4j
public class PostController {

    @PostMapping
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
}
