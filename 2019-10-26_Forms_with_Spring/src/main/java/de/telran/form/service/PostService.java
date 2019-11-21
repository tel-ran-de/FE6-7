package de.telran.form.service;

import de.telran.form.dto.PostDto;
import de.telran.form.entity.AuthorEntity;
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

    public Long createPost(PostDto post) {
        PostEntity postEntity = new PostEntity();
        postEntity.setTitle(post.getTitle());
        postEntity.setBody(post.getPostBody());
        postEntity.setDate(post.getDate());

        AuthorEntity authorEntity = createAuthorEntity(post);
        postEntity.setAuthorEntity(authorEntity);

        authorRepository.save(authorEntity);
        return postRepository.save(postEntity).getId();
    }
    public AuthorEntity createAuthorEntity (PostDto post) {
        AuthorEntity authorEntity= new AuthorEntity();
        authorEntity.setFirstName(post.getFirstName());
        authorEntity.setLastName(post.getLastName());
        return authorEntity;
    }
}
