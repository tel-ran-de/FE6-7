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

    $('form#'+ formId + ' button[type=submit]').on('click',
        function(event) {
        event.preventDefault();
        console.log(event);
        const formData = $('form#' + formId).serializeArray();
        console.log(formData);
        const formDataJson = convertToJson(formData);
        console.log(formDataJson);

        $.ajax({
            url: '/post',
            type: 'POST',
            data: JSON.stringify(formDataJson),
            contentType: "application/json",
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

});

