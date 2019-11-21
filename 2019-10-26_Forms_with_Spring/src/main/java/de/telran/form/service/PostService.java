package de.telran.form.service;

import de.telran.form.dto.PostDto;
import de.telran.form.entity.PostEntity;
import de.telran.form.repository.AuthorRepository;
import de.telran.form.repository.PostRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Long createPost(PostDto post) {

        PostEntity postEntity = new PostEntity();
        postEntity.setTitle(post.getTitle());
        postEntity.setBody(post.getBody());
        postEntity.setDate((Date) post.getDate());

        postEntity.setAuthorEntity(post.getAuthorEntity());

        return postRepository.save(postEntity).getId();
    }
}
