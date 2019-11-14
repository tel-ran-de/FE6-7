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


//2
    $(document).ready(function () {
      $('#title').click(
           function () {
               $("#block").show();
           });
    });
