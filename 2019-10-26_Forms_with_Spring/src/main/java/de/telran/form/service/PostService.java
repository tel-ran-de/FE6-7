package de.telran.form.service;

import de.telran.form.dto.AuthorDto;
import de.telran.form.dto.PostDto;
import de.telran.form.entity.AuthorEntity;
import de.telran.form.entity.PostEntity;
import de.telran.form.repository.PostRepository;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    public final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public long createdPost(PostDto post){
        PostEntity postEntity = new PostEntity();
        postEntity.setTitle(post.getTitle());
        postEntity.setBody(post.getBody());
        postEntity.setDate(post.getDate());
        return postRepository.save(postEntity).getId();
    }
}
