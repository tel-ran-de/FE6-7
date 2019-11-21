package de.telran.form;

import de.telran.form.dto.AuthorDto;
import de.telran.form.service.AuthorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/author")
@Slf4j

public class AuthorController {

    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @PostMapping
    public Long createNewAuthor(@RequestBody AuthorDto author){
        log.info(
                "Request received. First name = {}, Last name = {}",
                author.getFirstName(),
                author.getLastName()
        );
        return authorService.createAuthor(author);
    }
}
