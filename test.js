function getName() {
    var url = "http://localhost:5000/api/v0/character/name";

    $.ajax({
        url: url
    }).then(function(data) {
        $('#character-name').text(data.data.name);
    });
}

function saveName() {
    var name = $('#name').val();
}
