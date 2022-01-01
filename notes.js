const { default: chalk } = require('chalk')
const fs = require('fs')

const addNote = (title, body) =>{
   
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
       
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

const listNote = () =>{
    console.log(chalk.magentaBright('Your notes: '))
    
    const list = loadNotes()

    list.forEach((note) => {
        console.log(note.title)        
    })
}

const readNote = (title) => {
    
    const notes = loadNotes()
  
    const targetNote = notes.find((note) => note.title === title)

    if(targetNote){
        console.log(chalk.magentaBright(title))
        console.log(chalk.inverse(targetNote.body))
    }else{
        console.log(chalk.bgRedBright('No such note Found!'))
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
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}