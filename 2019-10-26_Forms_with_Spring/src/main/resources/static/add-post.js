$(document).ready(function() {
    $('button.btn.btn-primary').click(
        function (event) {
            event.preventDefault();
            console.log(event);
        });
});

$(document).ready(function() {
        $('#title').click(
            function () {
            alert("Be careful")
    });
});
    $(document).ready(function () {
      $('#title').click(
           function () {
               $("#block").show();
           });
    });
