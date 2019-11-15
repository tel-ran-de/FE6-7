package de.telran.form;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/author")
@Slf4j
public class AuthorController {
    @PostMapping
    public String createNewPost(@RequestParam("firstName") String firstName,
                                @RequestParam("lastName") String lastName) {
        log.info(
                "Request received. firstName={}, lastName={}",
                firstName,
                lastName
        );
        return "New author added";
    }
}
