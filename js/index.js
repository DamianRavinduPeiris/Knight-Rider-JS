var iId;
$("#start").on("click", () => {
    $("#audio")[0].play();
    let direction = 1; // Variable to keep track of the movement direction

    iId = setInterval(() => {
        if (direction === 1) {
            $(".container").css("transform", "translateX(50vw)");
            $("#b1").css("background-color", "#FF0000")
            $("#b2").css("background-color", "#DC143C")
            $("#b3").css("background-color", "#CD5C5C")
            $("#b4").css("background-color", "#B22222")
            $("#b5").css("background-color", "#A52A2A")
            $("#b6").css("background-color", "#8B0000")
            $("#b7").css("background-color", "#FF4500")

            direction = -1; // Change direction for the next interval
        } else {
            $(".container").css("transform", "translateX(0)");
            $("#b1").css("background-color", "linear-gradient(#FF0000, white)");
            $("#b2").css("background-color", "linear-gradient(#DC143C, white)");
            $("#b3").css("background-color", "linear-gradient(#CD5C5C, white)");
            $("#b4").css("background-color", "linear-gradient(#B22222, white)");
            $("#b5").css("background-color", "linear-gradient(#A52A2A, white)");
            $("#b6").css("background-color", "linear-gradient(#8B0000, white)");
            $("#b7").css("background-color", "linear-gradient(#FF4500, white)");

            direction = 1; // Change direction for the next interval
        }
    }, 100);

});

$("#stop").on("click", () => {
    clearInterval(iId)
    $("#audio")[0].pause();

});

