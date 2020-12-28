const sheet = Vue.createApp({
    data() {
        return {
            character_data: {
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
            },
            equipment_keys: [
                ['name', 'Name'],
                ['weight', 'Weight'],
                ['count', 'Count'],
                ['camp', 'Camp'],
                ['on_person', 'On person'],
                ['location', 'Location']
            ],
            attack_keys: [
                ['name', 'Name'],
                ['attack_type', 'Attack type'],
                ['damage_type', 'Damage type'],
                ['attack_mod', 'Attack mod'],
                ['damage_mod', 'Damage mod'],
                ['damage', 'Damage'],
                ['crit_roll', 'Crit roll'],
                ['crit_multi', 'Crit multiplier'],
                ['range_', 'Range'],
                ['misc', 'Attack modifiers'],
            ],
        }
    }
})

sheet.component('character_classes', {
    props: ['class_entry'],
    template: `<li>lvl {{class_entry.level}} {{ class_entry.name }}</li>`
})

/*
Table component; takes a collection and a list of keys.

The keys are structured like this:

    keys: [
        ['object_key', 'Text representation'],
        ...
    ]

This lets you have a table header that displays a different string than 
the object key it represents.
*/
sheet.component('c-table', {
    props: ['collection', 'keys'],
    template: `
        <table>
            <tr>
            <th
                v-for="key in keys"
            >
                {{ key[1] }}
            </th>
            </tr>
            <tr
                v-for="item in collection"
            >
                <td
                    v-for="key in keys"
                >
                    {{ item[key[0]] }}
                </td>
            </tr>
        </table>
    `
})

const CharacterSheet = sheet.mount('#sheet')

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // turn off display for all tabs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // de-activate all tab buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // set selected tab to active, and turn on display
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function getName() {
    var name_url = 'http://localhost:5000/api/v0/character/name';

    $.ajax({
        url: name_url
    }).then(function(data) {
        CharacterSheet.character_data.name = data.data.name;
    });
}

function updateCharacter() {
    var url = 'http://localhost:5000/api/v0/character'

    $.ajax({
        url: url
    }).then(function(data) {
        CharacterSheet.character_data = data.data;
    });
}
