$(function() {
    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan4096Validator = createIsNotMoreThanValidator(4096);

    const formId = 'addNewPostForm';
    const addPostForm = {
        id: formId,
        inputs: {
            title: [isEmptyValidator, isNotMoreThan50Validator],
            postBody: [isEmptyValidator, isNotMoreThan4096Validator]
        }
    };

    validateForm(addPostForm);

    requestJsonData(addPostForm);

});

