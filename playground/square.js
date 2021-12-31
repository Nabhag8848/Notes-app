// const square = function(x){
//     return x * x
// }
// const square = (x) => x * x
// const square = (x) => {
//     return x * x
// }
// const square = (x) => x * x
// console.log(square(2))

const party = {

    name: 'Nabhag',
    guestList:['Nabhag','Kunal','Jay'],
    printGuestList(){
        
        this.guestList.forEach((guest) =>{
            console.log(guest + " " + this.name)
        })
    }
}

party.printGuestList()
