package de.telran.form.dto;

/*import lombok.Data;

@Data*/             //создает на этапе компиляции геттеры и сеттеры
public class AuthorDto {
    private String firstName;
    private String lastName;

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
