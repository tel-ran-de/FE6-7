package de.telran.form;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/author")
@Slf4j
public class AuthorController {
    @PostMapping
    public String createNewAuthor(@RequestParam("firstName") String firstName,
                                  @RequestParam("lastName") String lastName){
        log.info(
                "Request received. FirstName = {}, LastName = {}",
                firstName,
                lastName
        );
        return "New author created";
    }
}
