$(document).ready(function() {
    $('button.btn.btn-primary').click(
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );

    $('#title').click(
        function () {
            alert('please be so kind to write valid text');
        });
});