$(document).ready(function() {
    $('button.btn.btn-primary').click(
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );
});

// Add event handler: when click on input title, alert "be careful".

$(document).ready(function() {
    $('#title').click(
        function () {
            alert("be careful")
        }
    );
});

//Show text "Please type here the title of your post." only when typing text in Title input.

$(document).ready(function() {
    $('#titleHelp').hide()
});

$(document).ready(function() {
    $('#title').keypress(
        function () {
            $('#titleHelp').show()
        }
    );
});


