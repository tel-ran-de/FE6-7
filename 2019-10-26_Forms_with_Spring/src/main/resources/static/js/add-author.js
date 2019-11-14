$(function() {

    const addAuthorForm = {
        id: 'addNewAuthor',
        inputs: {
            firstName: [isEmptyValidator, createIsNotMoreThanValidator(20)],
            lastName: [isEmptyValidator, createIsNotMoreThanValidator(50)]
        }
    };

    //disableFormButton(addAuthorForm);

    validateForm(addAuthorForm);

    resetSubmit(addAuthorForm);



   // $(':reset').on("click", () => { $(':submit').attr('disabled', true)})

    //$('input, textarea').on('blur', ()=> {
     //   console.log(isFormValid(addAuthorForm))
    //})

});

