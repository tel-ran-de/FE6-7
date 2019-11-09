$(function() {

    $('button.btn.btn-primary').on('click',
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );

    const Validator = function ($input, max) {

        if ($input.val().length === 0)
            return {
                valid: false,
                errorMessage: 'This field is required'
            };
        else
        if ($input.val().length > max )
            return {
                valid: false,
                errorMessage: "This field can't be more then " +max+ " symbols"
            };
        else
        return {
            valid: true
        };
    };

    const $inputTitle = $('#title');
    const $inputPost = $('#textOfThePost');

    const inputs = [$inputTitle, $inputPost];
    //const maxLengths = [50,4096];
    const maxLengths = [7,20];

     for ( let i=0; i<inputs.length; i++)
     {
         let input = inputs[i];
         let max = maxLengths[i];

        input.on({
            focus: function () {
                input.removeClass('is-invalid');
            },
            blur: function () {
                    let error = Validator(input,max);
                    if (!error.valid) {
                        input.addClass('is-invalid');
                        input.removeClass('is-valid');
                        input.siblings('.invalid-feedback').html(error.errorMessage);
                        return;
                }
                input.addClass('is-valid');
                input.removeClass('is-invalid');
            },

        });
    }

    $inputTitle.on({
        input: function () {
            $("#titleHelp").show();
        },
        blur: function () {
            $("#titleHelp").hide();
        },

        click: function () {
            //alert("be careful");
        }
    });

});

