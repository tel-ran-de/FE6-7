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

    const addPostForm = {
        title: [isEmptyValidator, isNotMoreThan50Validator],
        postBody: [isEmptyValidator, isNotMoreThan4096Validator],
    };

    validator(addPostForm);

    function validator(addPostForm) {
    Object.keys(addPostForm).forEach(name => {
        const $input = $(document.getElementsByName(name));
        const validators = addPostForm[name];
        $input.on({
            focus: function(){
                markInputPristine($input);
            },
            blur: function(){
                for (let validator of validators) {
                    let error = validator($input);
                    if (!error.valid) {
                        markInputInvalid($input, error.errorMessage);
                        return;
                    }
                }
                markInputValid($input);
            }
        });
    });}
});

