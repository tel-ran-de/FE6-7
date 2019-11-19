package de.telran.form.service;

import de.telran.form.dto.AuthorDto;
import de.telran.form.entity.AuthorEntity;
import de.telran.form.repository.AuthorRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {

    private final AuthorRepository authorRepository;

    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public Long createAuthor(AuthorDto author) {
        AuthorEntity authorEntity = new AuthorEntity();
        authorEntity.setFirstName(author.getFirstName());
        authorEntity.setLastName(author.getLastName());
        return authorRepository.save(authorEntity).getId();
    }
}
