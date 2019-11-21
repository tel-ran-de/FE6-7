$(function() {
    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan4096Validator = createIsNotMoreThanValidator(4096);

    const formId = 'addNewPostForm';
    const addPostForm = {
        id: formId,
        inputs: {
            title: [isEmptyValidator, isNotMoreThan50Validator],
            body: [isEmptyValidator, isNotMoreThan4096Validator]
        }
    };

    validateForm(addPostForm);

    $('form#'+ formId + ' button[type=submit]').on('click',
        function(event) {
        event.preventDefault();
        console.log(event);
        const formData = $('form#' + formId).serializeArray();
        console.log(formData);

        $.ajax({
            url: '/post',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(convertToJson(formData)),
            success: function(response) {
                console.log(response);
                $('form div.alert-success').html(response);
                $('form div.alert-success').show();
            },
            error: function(error) {
                $('form div.alert-danger').html(error.responseText);
                $('form div.alert-danger').show();
            }
        });
    });

    $.ajax({
        url: '/author',
        type: 'GET',
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });

});

