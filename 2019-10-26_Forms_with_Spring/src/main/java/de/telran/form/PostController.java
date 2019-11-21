package de.telran.form;

import de.telran.form.dto.PostDto;
import de.telran.form.service.PostService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
@Slf4j
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }



    @PostMapping
    public Long createPost(@RequestBody PostDto post){
        log.info(
                "Request received. Title={}, body={}, date={}, author firstName={}, author LastName={}",
                post.getTitle(),
                post.getBody(),
                post.getDate(),
                post.getAuthorEntity().getFirstName(),
                post.getAuthorEntity().getLastName()
        );
        return postService.createPost(post);
    }

    /*@PostMapping
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
    }*/
}
