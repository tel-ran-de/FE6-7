$(document).ready(function() {
    $('button.btn.btn-primary').click(
        function (event) {
            event.preventDefault();
            console.log(event);
        }
    );

     $("small#titleHelp").hide();

     $ ('input#title.form-control').on({
         focus: function(){
             $("small#titleHelp").show();
         },
         blur: function(){
             $("small#titleHelp").hide();
         },
         input : function(){
             $("small#titleHelp").show();
         },

        click: function(){
            alert(" be careful ");
        }
    });
});

