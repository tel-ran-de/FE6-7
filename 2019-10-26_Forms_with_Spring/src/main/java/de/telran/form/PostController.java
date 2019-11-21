package de.telran.form;

import de.telran.form.dto.PostDto;
import de.telran.form.service.PostService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
@Slf4j
public class PostController {

    private final PostService postService;

    public  PostController(PostService postService){
        this.postService = postService;
    }
    @PostMapping
    public Long createNewPost(@RequestBody PostDto post) {
        log.info(
                "Request received. Title={}, body={}, date={}, author={}",
                post.getTitle(),
                post.getBody(),
                post.getDate(),
                post.getAuthorEntity()
        );
        return postService.createPost(post);
    }
}
