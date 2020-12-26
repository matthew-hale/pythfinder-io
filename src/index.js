const name = Vue.createApp({
    data() {
        return {
            name: '',
            race: '',
            alignment: '',
        }
    }
})
const mountedName = name.mount('#name')

const classes = Vue.createApp({
    data() {
        return {
            classList: [
            ]
        }
    }
})

classes.component('class-list', {
    props: ['characterclass'],
    template: `<li>lvl {{ characterclass.level }} {{ characterclass.name }}</li>`
})

mountedClasses = classes.mount('#classes')

function updateCharacter() {
    var name_url = 'http://localhost:5000/api/v0/character/name';
    var alignment_url = 'http://localhost:5000/api/v0/character/alignment';
    var race_url = 'http://localhost:5000/api/v0/character/race';
    var classes_url = 'http://localhost:5000/api/v0/character/classes';

    $.ajax({
        url: name_url
    }).then(function(data) {
        mountedName.name = data.data.name;
    });

    $.ajax({
        url: alignment_url
    }).then(function(data) {
        mountedName.alignment = data.data.alignment;
    });

    $.ajax({
        url: race_url
    }).then(function(data) {
        mountedName.race = data.data.race;
    });

    $.ajax({
        url: classes_url
    }).then(function(data) {
        mountedClasses.classList = data.data;
    });
}
