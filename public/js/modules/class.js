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
    constructor(nom, lvl, pdv, speed, type){
        super(nom, lvl, pdv, speed, type)
        this.fatal = (a) => {
            a.pdv -= 30
        }
        this.boule = (a) => {
            a.pdv -= 25
        }
        this.vive = (a) => {
            a.pdv -= 15
        }
        this.eclair = (a) => {
            a.pdv -= 20
        }
    }      
}

class Dracolosse extends Pokemon{
    constructor(nom, lvl, pdv, speed, type){
        super(nom, lvl, pdv, speed, type)
        this.danse = (b) => {
            b.pdv -= 15
        }
        this.laser = (b) => {
            b.pdv -= 30
        }
        this.vol = (b) => {
            b.pdv -= 25
        }
        this.vampi = (b) => {
            b.pdv -= 25
        }
    }
}

let raichu = new Raichu ("Raichu", 54, 100, 80, ["Electrique", "Fée"])
let dracolosse = new Dracolosse ("Dracolosse", 57, 100, 65, ["Dragon"])