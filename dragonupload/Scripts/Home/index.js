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
    var files = event.originalEvent.dataTransfer.files;
    if (files.length > 0) {
        var output = "<ul>";
        for (var c = 0; c < files.length; c++) {
            output += "<li>" + files[c].name + "</li>";
        }
        output += "</ul>";
        $("#uploaded_files").html(output);
    }
}

$(document).ready(function () {
    var $box = $("#dropbox");
    $box.bind("dragenter", dragEnter);
    $box.bind("dragleave", dragLeave);
    $box.bind("drop", drop);
});