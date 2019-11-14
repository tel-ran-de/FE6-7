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

// for bottom disable/enable

let isFormValid = function(form) {
    for (let key of Object.keys(form.inputs)) {
        const $input = $('form#'+ form.id +' [name=' + key + ']');
        if (!$input.hasClass('is-valid'))
            return false;
    }
    return true;
};

const disableFormButton = function(form) {
     $('form#'+ form.id +" [type='submit']").attr('disabled', true);
};

const enableFormButton = function(form) {
    $('form#'+ form.id +" [type='submit']").attr('disabled', false);
};

// for function reset+submit bottom

const markAllInputInvalid = function (form) {
    Object.keys(form.inputs).forEach (key => {
        const $input = $('form#'+ form.id +' [name=' + key + ']');
    $input.addClass('is-invalid');
    $input.removeClass('is-valid');
    $input.siblings('.invalid-feedback').html('This field is required');
});
};

const resetSubmit = function(form) {
$('form#'+ form.id +" [type='reset']").on("click", () =>{
    $('form#'+ form.id +" [type='submit']").attr('disabled', true);
    markAllInputInvalid (form);
    });
};

// the main function

let validateForm = function(form) {

    // Подумайте, можем ли мы реорганизовать функцию validateForm,
    // чтобы избавиться от вызовов функций, куда мы отправляем форму в качестве параметра.
    //Think if we can refactor validateForm function to get rid of calls of functions
    // where we send form as a parameter.

        Object.keys(form.inputs).forEach(key => {
            const $input = $('form#'+ form.id +' [name=' + key + ']');  /// probel - very important
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
