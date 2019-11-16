const markInputValid = $input => {
    $input.addClass('is-valid');
    $input.removeClass('is-invalid');
};

const markInputInvalid = ($input, errorMessage) => {
    $input.addClass('is-invalid');
    $input.removeClass('is-valid');
    $input.siblings('.invalid-feedback').html(errorMessage);
};

const markInputPristine = $input => {
    $input.removeClass('is-invalid');
};

$('button.btn.btn-primary').on('click',
    function (event) {
        event.preventDefault();
    }
);

const isEmptyValidator = $input => {
    if ($input.val().length === 0)
        return {
            valid: false,
            errorMessage: 'This field is required'
        };
    return {
        valid: true
    };
};

const createIsNotMoreThanValidator = maxLength => {
    return $input => {
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

const myForm = {
    disabledFormButton: form => {
        $('form#' + form.id + ' button.btn-primary').attr('disabled', true);
    },
    enabledFormButton: form => {
        $('form#' + form.id + ' button.btn-primary').attr('disabled', false);
    },
    isFormValid: form => {
        for (let key of Object.keys(form.inputs)) {
            const $input = $('form#' + form.id + ' [name=' + key + ']');
            if (!$input.hasClass('is-valid'))
                return false;
        }
        return true;
    },
    isFieldValid: form => {
        for (let key of Object.keys(form.inputs)) {
            const $input = $('form#' + form.id + ' [name=' + key + ']');
            if (!$input.hasClass('is-valid'))
                return false;
        }
    }
};

let validateForm = (form) => {
    myForm.disabledFormButton(form);

    Object.keys(form.inputs).forEach(key => {
        const $input = $('form#'+form.id+' [name=' + key +']');
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
                        myForm.disabledFormButton(form);
                        return;
                    }
                }
                markInputValid($input);
                if(myForm.isFormValid(form)) {
                    myForm.enabledFormButton(form);
                }
            }
        });
    });
};

let validateField = form => {

    $('form#' + form.id + ' button.btn-danger').on ( {
        click: function () {
            myForm.disabledFormButton(form);
        }
    })
};