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

        $.ajax({
            url: '/post',
            type: 'POST',
            data: JSON.stringify(formDataJson),
            contentType:'application/json',
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
            let code = '';
            for(let val of response) {
                    code=code+'<option value=' + val.id + '>' + val.firstName + ' ' + val.lastName + '</option>';
            }
            $('form#addNewPostForm select[name=authorId]').html(code);
            },
        error: function(error) {
            console.log(error);
    }})

});

