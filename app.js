// const validator = require('validator')
// const getNotes = require('./notes.js')

// console.log(getNotes())

// const boolean = validator.isEmail('NabhagMotivaras76gmail.com')
// console.log(boolean)

// const isURL = validator.isURL('https:/leetcode.com')
// console.log(isURL)

const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')




yargs.command({

    command: 'add',
    describe: 'Adding a note!',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Body of Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({

    command: 'remove',
    describe: 'To Remove a note!',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({

    command: 'read',
    describe: 'Read a note!',
    handler(){
        console.log('Reading a note')
    }
})

yargs.command({

    command: 'list',
    describe: 'list notes!',
    handler(){
        console.log('listing out all notes')
    }
})

yargs.parse()