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
    public String createNewPost(@RequestBody PostDto postDto) {
        log.info(
                "Request received. Title={}, body={}, date={}, author={}",
                postDto.getTitle(),
                postDto.getBody(),
                postDto.getDate(),
                postDto.getAuthor()
        );
        postService.createPost(postDto);
        return "New post created";
    }
}
