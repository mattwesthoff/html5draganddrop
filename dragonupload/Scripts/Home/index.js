function dragEnter() {
    $("#msg").text("you're dragging things!");
}

function dragLeave() {
    $("#msg").text("aww come back!");
}

$(document).ready(function () {
    var $box = $("#dropbox");
    $box.bind("dragenter", dragEnter);
    $box.bind("dragleave", dragLeave);
});