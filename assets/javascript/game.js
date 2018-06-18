        
        //variables
        var randomResult;
        var lose = 0;
        var win = 0;
        var userClick = 0;



        var resetAndStart = function () {

            $(".allCrystals").empty();
    
            
            var images = ['https://i.pinimg.com/564x/10/2e/97/102e9759c008a45357295e089e2e2398.jpg',
                         'https://i.pinimg.com/564x/e7/30/73/e73073b3078570983e13ac5f81b3ef74.jpg',
                         'https://i.pinimg.com/564x/f7/5c/13/f75c1326951cca47b8f813ae46f02108.jpg',
                         'https://i.pinimg.com/564x/d5/23/3e/d5233eda50e07044204bb82e639b59b9.jpg'];

            randomResult = Math.floor(Math.random() * 69) + 30;

            $("#result").html('Camera Capacity: ' + randomResult);


    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        var crystal1 = $("<div>");
        crystal1.attr({
            "class": 'crystal1',
            "data-random": random
    });
        crystal1.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });

        console.log(random)        
        $(".allCrystals").append(crystal1);

    }

    $("#userClick").html("Your Score: " + userClick);

    }

resetAndStart();

// Event deligation
$(document).on('click', ".crystal1", function () {

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
        userClick = 0;
        resetAndStart();
    }



});