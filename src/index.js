const sheet = Vue.createApp({
    data() {
        return {
            name: '',
            race: '',
            deity: '',
            homeland: '',
            CMB: 0,
            CMD: 0,
            initiative_mods: '',
            alignment: '',
            character_classes: [],
            description: '',
            notes: '',
            height: '',
            weight: 0,
            gender: '',
            size: '',
            age: 0,
            hair: '',
            eyes: '',
            languages: [],
            spells_per_day: {},
            spells_known: {},
            bonus_spells: {},
            base_attack_bonus: 0,
            gold: 0,
            AC: [],
            speed: {},
            abilities: [],
            hp: {},
            specials: [],
            traits: [],
            feats: [],
            equipment: [],
            saving_throws: [],
            skills: [],
            spells: [],
            attacks: [],
            armor: []
        }
    }
})


sheet.component('character_classes', {
    props: ['class_entry'],
    template: `<li class="character_class">lvl {{class_entry.level}} {{ class_entry.name }}</li>`
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
