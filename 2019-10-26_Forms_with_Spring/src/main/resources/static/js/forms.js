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
    }
);

const isEmptyValidator = function ($input) {
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

let isFormValid = function(form) {
    for (let key of Object.keys(form.inputs)) {
        const $input = $('form#'+ form.id +' [name=' + key + ']');
        if (!$input.hasClass('is-valid'))
            return false;
    }
    return true;
};

const disableFormButton = function(form) {
    $('form#'+ form.id +' button').attr('disabled', true);
};

const enableFormButton = function(form) {
    $('form#'+ form.id +' button').attr('disabled', false);
};

let validateForm = function(form) {
    disableFormButton(form);

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
                        disableFormButton(form);
                        return;
                    }
                }
                markInputValid($input);
                if (isFormValid(form)) {
                    enableFormButton(form);
                }
            }
        });
    });
};

const convertToJson = function(array = []) {
    let obj = {};
    array.forEach(function(element) {
        obj[element.name] = element.value;
    });
    return obj;
};

let requestJsonData = function(form) {
    $('form#'+ form.id + ' button[type=submit]').on('click',
        function(event) {
            event.preventDefault();
            console.log(event);
            const formData = $('form#' + form.id).serializeArray(); // собирает данные из полей и складывает их в таблицу
            console.log(formData);
            const formDataJson = convertToJson(formData); // обр. к функции из -forms, конв. данные таблицы в Json
            console.log(formDataJson);
            $.ajax({                            // посылает данные на BE
                url: '/author',
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
}