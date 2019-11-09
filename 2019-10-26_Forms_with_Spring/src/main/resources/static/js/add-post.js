$(function() {

    const markInputValid = function ($input) {
        $input.addClass('is-valid');
        $input.removeClass('is-invalid');
    };

    const markInputInvalid = function ($input, errorMessage) {
        $input.addClass('is-invalid');
        $input.removeClass('is-valid');
        $input.siblings('.invalid-feedback').html(errorMessage);
    };

    const markInputPristine = function($input) {
        $input.removeClass('is-invalid');
    };

    $('button.btn.btn-primary').on('click',
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );

    const isEmptyValidator = function ($input) {
        console.log($input.val());
        if ($input.val().length === 0)
            return {
                valid: false,
                errorMessage: 'This field is required'
            };
        return {
            valid: true
        };
    };

    const createIsNotMoreThanValidator = function(maxLength) {
        return function ($input) {
            if ($input.val().length > maxLength)
                return {
                    valid: false,
                    errorMessage: "This field can't be more then " + maxLength + " symbols"
                };
            return {
                valid: true
            };
        };
    };

    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan4096Validator = createIsNotMoreThanValidator(4096);

    const $inputTitle = $('#title');
    $inputTitle.on({
        focus: function(){
            markInputPristine($inputTitle);
        },
        blur: function(){
            const validators = [isEmptyValidator, isNotMoreThan50Validator];
            for (let validator of validators) {
                let error = validator($inputTitle);
                if (!error.valid) {
                    markInputInvalid($inputTitle, error.errorMessage);
                    return;
                }
            }
            markInputValid($inputTitle);
        }
    });

    const $inputBody = $('#postBody');
    $inputBody.on({
        focus: function(){
            markInputPristine($inputBody);
        },
        blur: function(){
            const validators = [isEmptyValidator, isNotMoreThan4096Validator];
            for (let validator of validators) {
                let error = validator($inputBody);
                if (!error.valid) {
                    markInputInvalid($inputBody, error.errorMessage);
                    return;
                }
            }
            markInputValid($inputBody);
        },
    });
});

