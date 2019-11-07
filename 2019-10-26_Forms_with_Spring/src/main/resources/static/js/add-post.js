$(document).ready(function() {
    $('button.btn.btn-primary').click(
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );

    $('#title').click(
        function () {
            alert('be careful');
        }
    );

    $('#title').keydown(
        function () {
            $('#titleHelp').show();
        });
    $('#title').keyup(
        function () {
            $('#titleHelp').hide();
        });
});


