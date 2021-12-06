class Pokemon{
    constructor(nom, lvl, pdv, speed, type){
        this.nom = nom
        this.lvl = lvl
        this.pdv = pdv
        this.speed = speed
        this.type = type
    }
}

class Raichu extends Pokemon{
    constructor(nom, lvl, pdv, speed, type, fatal, boule, vive, eclair){
        super(nom, lvl, pdv, speed, type)
        //this.fatal = (a,b) =>
        //this.boule = (a,b) =>
        //this.vive = (a,b) =>
        //this.eclair = (a,b) =>
    }      
}

class Dracolosse extends Pokemon{
    constructor(nom, lvl, pdv, speed, type, danse, laser, vol, vampi){
        super(nom, lvl, pdv, speed, type)
        //this.danse = (a,b) =>
        //this.laser = (a,b) =>
        //this.vol = (a,b) =>
        //this.vampi = (a,b) => 
    }
}

let raichu = new Raichu ("Raichu", 54, 100, 80, ["Electrique", "Fée"])
let dracolosse = new Dracolosse ("Dracolosse", 57, 100, 65, ["Dragon"])