const addToDB = (names) =>{
    localStorage.setItem('names', JSON.stringify(names));
}

const getNames = () =>{
    let storedNames = []
    let names = localStorage.getItem("names")
    if(names){
        storedNames = JSON.parse(names)
    }
    return storedNames
}

const removeFromDb = (id)=>{
    let names = getNames();

    if(names){
        for(id in names){
            delete names[id];
            localStorage.setItem('names', JSON.stringify(names));
        }
    }
}

export{
    addToDB,
    getNames,
    removeFromDb
}