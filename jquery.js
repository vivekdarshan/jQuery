/**
 * Created by vivek on 2/1/2017.
 */
$(document).ready(function() {

    $("h2").css("color", "red");
    $("label").addClass("label");

// Submit form with id function.
    $("#btn_id").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();

            $("#form_id").submit(); // Form submission.
            alert(" Name : " + name + " \n Email : " + email + "\n\n Form Submitted Successfully......");
    });

});