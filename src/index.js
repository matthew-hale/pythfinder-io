const name = Vue.createApp({
    data() {
        return {
            name: 'John Q Sample',
            race: 'human',
            alignment: 'LE',
        }
    }
})
name.mount('#name')

const classes = Vue.createApp({
    data() {
        return {
            classList: [
                {name: "fighter", level: 5},
                {name: "wizard", level: 2}
            ]
        }
    }
})

classes.component('class-list', {
    props: ['characterclass'],
    template: `<li>lvl {{ characterclass.level }} {{ characterclass.name }}</li>`
})

classes.mount('#classes')
