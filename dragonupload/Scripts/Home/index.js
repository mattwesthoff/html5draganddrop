function dragEnter(event) {
    event.stopPropagation();
    event.preventDefault();
    $(event.target).addClass('dragging');
}

function dragLeave(event) {
    event.stopPropagation();
    event.preventDefault();
    $(event.target).removeClass('dragging');
}

function drop(event) {
    event.stopPropagation();
    event.preventDefault();
    $(event.target).removeClass('dragging');
}

$(document).ready(function () {
    var $box = $("#dropbox");
    $box.bind("dragenter", dragEnter);
    $box.bind("dragleave", dragLeave);
    $box.bind("drop", drop);
});