export class Pokemon{
    constructor(nom, lvl, pdv, speed, type){
        this.nom = nom
        this.lvl = lvl
        this.pdv = pdv
        this.speed = speed
        this.type = type
    }
}

 export class poke1 extends Pokemon{
    constructor(nom, lvl, pdv, speed, type){
        super(nom, lvl, pdv, speed, type)
        this.fatal = (a) => {
            a.pdv -= 30
            alert("Fatal Foudre utilisé")
        }
        this.boule = (a) => {
            a.pdv -= 25
            alert("Boul'Elec utilisé")
        }
        this.vive = (a) => {
            a.pdv -= 15
            alert("Vive-Attaque utilisé")
        }
        this.eclair = (a) => {
            a.pdv -= 20
            alert("Éclair utilisé")
        }
    }      
}

export class poke2 extends Pokemon{
    constructor(nom, lvl, pdv, speed, type){
        super(nom, lvl, pdv, speed, type)
        this.danse = (a) => {
            a.pdv -= 15
            alert("Danse Draco utilisé")
        }
        this.laser = (a) => {
            a.pdv -= 30
            alert("Ultralaser utilisé")
        }
        this.vol = (a) => {
            a.pdv -= 25
            alert("Vol utilisé")
        }
        this.vampi = (a) => {
            a.pdv -= 25
            alert("Vampirisme utilisé")
        }
    }
}

export let leadPoke = new poke1 ("Raichu", 54, 100, 80, ["Electrique", "Fée"]);
export let cpuPoke = new poke2 ("Dracolosse", 57, 100, 65, ["Dragon"]);