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
            }
        }
    }
})

sheet.component('character_classes', {
    props: ['class_entry'],
    template: `<li>lvl {{class_entry.level}} {{ class_entry.name }}</li>`
})

sheet.component('c-table', {
    props: ['collection', 'columns'],
    template: `
    <table>
        <tr>
        <th
            v-for="key in columns"
        >{{ key }}</th>
        </tr>
        <tr
            v-for="item in collection"
        >
            <td
                v-for="key in columns"
            >
                {{ item[key] }}
            </td>
        </tr>
    </table>
    `
})

const CharacterSheet = sheet.mount('#sheet')

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
