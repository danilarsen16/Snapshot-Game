        
        //variables
        var randomResult;
        var lose = 0;
        var win = 0;
        var userClick = 0;



        var resetAndStart = function () {

            $(".crystals").empty();
    
            randomResult = Math.floor(Math.random() * 69) + 30;

            $("#result").html('Goal Number: ' + randomResult);


    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
    });

        console.log(random)        
        $(".crystals").append(crystal);

    }

    $("#userClick").html("Your Score: " + userClick);

    }

resetAndStart();

// Event deligation
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));
    userClick += num;
    $("#userClick").html("Your Score: " + userClick);


    if (userClick > randomResult) {

        lose++;
        $("#lost").html("Your losses: " + lose);
        userClick = 0;
        resetAndStart();
    }

    else if (userClick === randomResult) {

        win++;
        $("#win").html("Your Wins: " + win);
        alert("yay, you won!")
        userClick = 0;
        resetAndStart();
    }



});