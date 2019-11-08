$(function() {

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

    const isNotMoreThanValidator = function ($input) {
        if ($input.val().length > 50)
            return {
                valid: false,
                errorMessage: "This field can't be more then 50 symbols"
            };
        return {
            valid: true
        };
    };

    const $inputTitle = $('#title');
    $inputTitle.on({
        focus: function(){
            $inputTitle.removeClass('is-invalid');
        },
        blur: function(){
            const validators = [isEmptyValidator, isNotMoreThanValidator];
            for (let validator of validators) {
                let error = validator($inputTitle);
                if (!error.valid) {
                    $inputTitle.addClass('is-invalid');
                    $inputTitle.removeClass('is-valid');
                    $inputTitle.siblings('.invalid-feedback').html(error.errorMessage);
                    return;
                }
            }
            $inputTitle.addClass('is-valid');
            $inputTitle.removeClass('is-invalid');
        },
        input : function(){
            $("#titleHelp").show();
        },
        click: function(){
            //alert("be careful");
        }
    });

    //--------------------------------------------------------
    const isNotMoreThan4096Validator = function ($input) {
        if ($input.val().length > 4096)
            return {
                valid: false,
                errorMessage: "This field can't be more then 4096 symbols"
            };
        return {
            valid: true
        };
    };

    const $inputPostText = $('#postText');
    $inputPostText.on({
        focus: function(){
            $inputPostText.removeClass('is-invalid');
        },
        blur: function(){
            const validators = [isEmptyValidator, isNotMoreThan4096Validator];
            for (let validator of validators) {
                let error = validator($inputPostText);
                if (!error.valid) {
                    $inputPostText.addClass('is-invalid');
                    $inputPostText.removeClass('is-valid');
                    $inputPostText.siblings('.invalid-feedback').html(error.errorMessage);
                    return;
                }
            }
            $inputPostText.addClass('is-valid');
            $inputPostText.removeClass('is-invalid');
        }
    });

    //-------------------------------------

});

