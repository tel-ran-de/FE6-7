$(function() {

    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan4096Validator = createIsNotMoreThanValidator(4096);

    const formID = "formPost";
    const addPostForm = {
        id: formID,
        inputs: {
            title: [isEmptyValidator, isNotMoreThan50Validator],
            postBody: [isEmptyValidator, isNotMoreThan4096Validator]
        }
    };

    validateForm(addPostForm);

    $('form#'+formID+ ' button[type=submit]').on('click', function (event) {
        event.preventDefault();
        console.log(event);
        let formData = $('form#'+formID).serialize();
        console.log(formData);

        $.ajax({
            url: '/post/add-post',
            type: 'POST',
            data: formData,
            success: function (response) {
                console.log(response);
                $('form div.alert-success').html(response);
                $('form div.alert-success').show();
            },
            error: function (error) {
                console.log(error);
                $('form div.alert-danger').html(response);
                $('form div.alert-danger').show();
            }
            }
        );
    })

});