package de.telran.form.service;

import de.telran.form.dto.PostDto;
import de.telran.form.entity.PostEntity;
import de.telran.form.repository.AuthorRepository;
import de.telran.form.repository.PostRepository;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final AuthorRepository authorRepository;

    public PostService(PostRepository postRepository, AuthorRepository authorRepository) {
        this.postRepository = postRepository;
        this.authorRepository = authorRepository;
    }

    public Long createPost(PostDto postDto) {
        PostEntity postEntity = PostEntity.builder()
                .title(postDto.getTitle())
                .body(postDto.getBody())
                .date(postDto.getDate())
                .authorEntity(authorRepository.getOne(postDto.getAuthorId()))
                .build();
        return postRepository.save(postEntity).getId();
    }
}
