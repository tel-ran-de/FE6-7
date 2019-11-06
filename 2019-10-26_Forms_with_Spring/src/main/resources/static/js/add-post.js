$(document).ready(function() {
    $('button.btn.btn-primary').click(
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );

    $('#title.form-control').click(
        function () {
            alert("Be careful");
        }
    );

   /* $('#title.form-control').keypress(
        function () {
            $("titleHelp").hidden();
        }
    );*/

});


