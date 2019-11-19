package de.telran.form;

import de.telran.form.dto.PostDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
@Slf4j
public class PostController {

    @PostMapping
    public String createNewPost(@RequestBody PostDto post) {
        log.info(
                "Request received. Title={}, body={}, date={}, author={}",
                post.getTitle(),
                post.getText(),
                post.getDate(),
                post.getAuthor()
        );
        return "New post created";
    }
}
