
let count = 0;

let environmentTitle = "The Room That Refuses Morning";

let environmentElements = ["curtain", "dust", "warm floor", "half-open door"];

let mainEntity = {
    name: "The Curtain",
    type: "soft border",
    mood: "suspicious",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

$("#title-button").click(function () {
    $("#environment-output").html(environmentTitle);
});

$("#objects-button").click(function () {
    $("#environment-output").html(environmentElements.join(", "));
});

$("#room-button").click(function () {
    $("#environment-output").html(mainEntity.name + ": " + mainEntity.mood);
});

$("#count-button").click(function () {
    count = count + 1;
    $("#environment-output").html("Touches: " + count);
});
