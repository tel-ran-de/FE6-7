$(function () {
    const isNotMoreThan25Validator = createIsNotMoreThanValidator(25);
    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);

    const formId = 'addNewAuthorForm';
    const addAuthorForm = {
        id: formId,
        inputs: {
            firstName: [isEmptyValidator, isNotMoreThan25Validator],
            lastName: [isEmptyValidator, isNotMoreThan50Validator]
        }
    };

    validateForm(addAuthorForm);

    $('form#'+formId+' button[type=submit]').on('click',
        function (event) {
            event.preventDefault();
            console.log(event);
            const formData = $('form#' + formId).serialize();
            console.log(formData);

            $.ajax({
                url: '/author',
                type: 'POST',
                data: formData,
                success: function (response) {
                    console.log(response);
                    $('form div.alert-success').html(response);
                    $('form div.alert-success').show();
                },
                error: function (error) {
                    $('form div.alert-danger').html(error.responseText);
                    $('form div.alert-danger').show();
                }
            });
        });
});
