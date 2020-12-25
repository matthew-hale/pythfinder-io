function getName() {
    var url = "http://localhost:5000/api/v0/character/name";

    $.ajax({
        url: url
    }).then(function(data) {
        $('#character-name').text(data.data.name);
    });
}

function setCharacter() {
    var url = "http://localhost:5000/api/v0/set_character";
    var input = $("#character-data").val();
    var json_input = JSON.parse(input);
    $.ajax({
        url: url,
        type: "PUT",
        data: JSON.stringify(json_input),
        contentType: "application/json;charset=utf-8",
        dataType: "json"
    }).then(function() {
        updateCharacter();
    });
}

function updateCharacter() {
    var url = "http://localhost:5000/api/v0/character";

    getName();
    $.ajax({
        url: url
    }).then(function(data) {
        $('#character-data').text(JSON.stringify(data.data, null, 4));
    });
}

function setName() {
    var url = "http://localhost:5000/api/v0/character/name";
    var json_input = {
        name: "test name"
    };
    $.ajax({
        url: url,
        type: "PUT",
        data: JSON.stringify(json_input),
        contentType: "application/json;charset=utf-8",
        dataType: "json"
    }).then(function() {
        updateCharacter();
    });
}
