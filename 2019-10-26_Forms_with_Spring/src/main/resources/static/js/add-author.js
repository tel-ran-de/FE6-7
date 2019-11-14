$(function() {
    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan25Validator = createIsNotMoreThanValidator(25);
    const isNotLessThan1Validator = createIsNotLessThanValidator(1);


    const addAuthorForm = {
        disableFormButton : function(){
            $('form#'+ this.id +' button[type="submit"]').attr('disabled', true);
        },
        enableFormButton : function(){
            $('form#'+ this.id +' button[type="submit"]').attr('disabled', false);
        },
        isFormValid : function(){
            for (let key of Object.keys(this.inputs)) {
                const $input = $('form#'+ this.id +' [name=' + key + ']');
                if (!$input.hasClass('is-valid'))
                    return false;
            }
            return true;
        },

        id: 'addNewAuthorForm',
        inputs: {
            firstName: [isNotLessThan1Validator, isNotMoreThan25Validator],
            lastName: [isNotLessThan1Validator, isNotMoreThan50Validator]
        }
    };

    validateForm(addAuthorForm);

    $('input').on('blur', ()=> {
        console.log(isFormValid(addAuthorForm))
    })
});

