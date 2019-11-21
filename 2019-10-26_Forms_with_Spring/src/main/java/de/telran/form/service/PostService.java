package de.telran.form.service;

import de.telran.form.dto.PostDto;
import de.telran.form.entity.PostEntity;
import de.telran.form.repository.PostRepository;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Long createPost(PostDto post){
        PostEntity postEntity=new PostEntity();
        postEntity.setBody(post.getBody());
        postEntity.setTitle(post.getTitle());
        postEntity.setDate(post.getDate());
        postEntity.setAuthorEntity(post.getAuthorEntity());
             return  postRepository.save(postEntity).getId();


    }
}
