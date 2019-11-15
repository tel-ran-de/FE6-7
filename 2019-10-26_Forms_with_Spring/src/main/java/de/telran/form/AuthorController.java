package de.telran.form;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/author"})
@Slf4j
public class AuthorController {

    @PostMapping
    public String createNewAuthor(@RequestParam("firstName") String firstName,
                               @RequestParam("lastName") String lastName) {
        log.info(
                "Request received. FirstName={}, lastName={}",
                firstName,
                lastName
        );
        return "New author created";
    }
}
