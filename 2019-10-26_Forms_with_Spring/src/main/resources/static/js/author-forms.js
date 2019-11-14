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

$('button[type="submit"]').on('click',
    function (event) {
        event.preventDefault();
    }
);

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


const createIsNotLessThanValidator = function(minLength) {
    return function ($input) {
        if ($input.val().length < minLength)
            return {
                valid: false,
                errorMessage: "This field can't be less then " + minLength + " symbols"
            };
        return {
            valid: true
        };
    };
};

let validateForm = function(form) {
    form.disableFormButton();

    Object.keys(form.inputs).forEach(key => {
        const $input = $('form#'+ form.id +' [name=' + key + ']');
        const validators = form.inputs[key];
        $input.on({
            focus: function(){
                markInputPristine($input);
            },
            blur: function(){
                for (let validator of validators) {
                    let error = validator($input);
                    if (!error.valid) {
                        markInputInvalid($input, error.errorMessage);
                        form.disableFormButton();
                        return;
                    }
                }
                markInputValid($input);
                if (form.isFormValid()) {
                    form.enableFormButton();
                }
            }
        });
    });
};


