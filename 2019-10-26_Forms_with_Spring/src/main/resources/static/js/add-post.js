$(document).ready(function() {
    $('button.btn.btn-primary').click(
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );
});


// FIRST TASK
$(document).ready(function() {
    $('#title').click(
        function () {
            alert("take care you are typing the title")
        }
    );
});

//SECOND TASK

$(document).ready(function(){
    $('#titleHelp').hide();
});
$(document).ready(function() {
    $('#title').keypress(function () {
            $('#titleHelp').show()
        }
    );
});
$(document).ready(function() {
    $('#title').keydown(function () {
            $('#titleHelp').hide()
        }
    );
});


