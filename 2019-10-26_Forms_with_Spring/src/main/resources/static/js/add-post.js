$(document).ready(function() {
    $('button.btn.btn-primary').click(
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );
});

$(document).ready(function () {
    var variable1 = $('small#titleHelp.form-text.text-muted');
    var variable2 = $('input#title.form-control');
    variable1.hide();
    variable2.on("keydown", function () {
        variable1.show();
    });
    variable1.on("dblclick",function () {
        variable1.hide();
    });
});

$(document).ready(function () {
    $('input#title.form-control').click(
        function(){
            alert("Be careful!!! You are typing the title!!!")
        }
    );
});
