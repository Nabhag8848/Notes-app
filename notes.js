const { default: chalk } = require('chalk')
const fs = require('fs')
const getNotes = () =>{
    return  'Your Notes...'
}

const addNote = (title, body) =>{
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body
        })

        saveNotes(notes)
        console.log(chalk.greenBright('New note Added!'))
    }else {
        console.log(chalk.redBright('Title Already Exist'))
    }   

}

const removeNote = (title) => {
    
    const notes = loadNotes()
    let found = false
    const modifiedNotes = notes.filter((note) => {
        
        if(note.title === title){
            found = true
        }

        return note.title !== title 
    })


    if(found == true){
        console.log(chalk.greenBright('Note Removed!'))
        saveNotes(modifiedNotes)
    }else{
        console.log(chalk.redBright('No note Found!'))
    }
    
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
     
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = { 
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
