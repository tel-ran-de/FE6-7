$(function() {

    $("#titleHelp").hide();
    $("#postHelp").hide();

    $('button.btn.btn-primary').on('click',
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );

    const $inputTitle = $('#title');
    const $inputBody = $('#textarea');


    function activateValidation ($input) {
        $input.on({
            focus: function () {
                $input.removeClass('is-invalid');
            },
            blur: function () {
                const validators = [isEmptyValidator, isNotMoreThanValidator];
                for (let validator of validators) {
                    let error = validator($input);
                    if (!error.valid) {
                        $input.addClass('is-invalid');
                        $input.removeClass('is-valid');
                        $input.siblings('.invalid-feedback').html(error.errorMessage);
                        return;
                    }
                }
                $input.addClass('is-valid');
                $input.removeClass('is-invalid');
            },
            input : function(){
                if($input.attr('id') === 'title') $("#titleHelp").show();
                if($input.attr('id') === 'textarea') $("#postHelp").show();
                },
            click: function(){
                // alert("be careful");
            }
        });
    }

    function start() {
        const inputs = [$inputTitle,$inputBody];
        for(let input of inputs){activateValidation(input)}
    }

    start();

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
        if($input.attr('id') === 'textarea'){
            if ($input.val().length > 4096)
                return {
                    valid: false,
                    errorMessage: "This field can't be more then 4096 symbols"
                };
            return {
                valid: true
            };
        }else {
            if ($input.val().length > 50)
                return {
                    valid: false,
                    errorMessage: "This field can't be more then 50 symbols"
                };
            return {
                valid: true
            };
        }
    };


});

