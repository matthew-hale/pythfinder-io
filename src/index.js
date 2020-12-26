const sheet = Vue.createApp({
    data() {
        return {
            name: 'John Q Sample',
            race: 'human',
            alignment: 'LE',
            cclass: 'fighter'
        }
    }
})

sheet.mount('#sheet')
