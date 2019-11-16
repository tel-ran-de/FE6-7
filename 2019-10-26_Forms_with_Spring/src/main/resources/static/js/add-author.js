$(function() {

    const firstNameValidator = createIsNotMoreThanValidator(25);
    const lastNameValidator = createIsNotMoreThanValidator(50);

    const addAuthorForm = {
        id: "formAuthor",
        inputs: {
            firstName: [isEmptyValidator, firstNameValidator],
            lastName: [isEmptyValidator, lastNameValidator]
        },

    };

    validateForm(addAuthorForm);
    validateField(addAuthorForm);



});