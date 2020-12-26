const sheet = Vue.createApp({
    data() {
        return {
            name: '',
            race: '',
            alignment: '',
            character_classes: []
        }
    }
})


sheet.component('character_classes', {
    props: ['class_entry'],
    template: `<li>lvl {{class_entry.level}} {{ class_entry.name }}</li>`
})

const CharacterSheet = sheet.mount('#sheet')

function getName() {
    var name_url = 'http://localhost:5000/api/v0/character/name';

    $.ajax({
        url: name_url
    }).then(function(data) {
        CharacterSheet.name = data.data.name;
    });
}

function updateCharacter() {
    var url = 'http://localhost:5000/api/v0/character'

    $.ajax({
        url: url
    }).then(function(data) {
        CharacterSheet.name = data.data.name;
        CharacterSheet.race = data.data.race;
        CharacterSheet.alignment = data.data.alignment;
        CharacterSheet.character_classes = data.data.classes;
    });
}
