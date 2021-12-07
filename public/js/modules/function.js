import{leadPoke, cpuPoke} from "./class.js"

alert("Un Pokémon sauvage apparaît, c'est un "+(cpuPoke.nom));
alert("Vous envoyez Raichu au combat");
export function fight() {
    let player1;
    let player2;
    while (leadPoke.pdv > 0 && cpuPoke.pdv > 0){
        player1 = +prompt ("Quelle attaque voulez-vous utiliser ? 1.Fatal Foudre  2.Boul'Elec  3.Vive-Attaque  4")
        player2 = Math.floor(Math.random()*4+1)
        if (leadPoke.speed > cpuPoke.speed){
            switch (player1){
                case 1:
                    leadPoke.fatal(cpuPoke)
                    alert("Il reste "+(cpuPoke.pdv)+" hp à "+(cpuPoke.nom))
                    break;
                case 2:
                    leadPoke.boule(cpuPoke)
                    alert("Il reste "+(cpuPoke.pdv)+" hp à "+(cpuPoke.nom))
                     break;
                case 3:
                    leadPoke.vive(cpuPoke)
                    alert("Il reste "+(cpuPoke.pdv)+" hp à "+(cpuPoke.nom))
                    break;
                case 4:
                    leadPoke.eclair(cpuPoke)
                    alert("Il reste "+(cpuPoke.pdv)+" hp à "+(cpuPoke.nom))
                    break;
            }

            switch (player2){
                case 1:
                    cpuPoke.danse(leadPoke)
                    alert("Il reste "+(leadPoke.pdv)+" hp à "+(leadPoke.nom))
                    break;
                case 2:
                    cpuPoke.laser(cpuPoke)
                    alert("Il reste "+(leadPoke.pdv)+" hp à "+(leadPoke.nom))
                     break;
                case 3:
                    cpuPoke.vol(cpuPoke)
                    alert("Il reste "+(leadPoke.pdv)+" hp à "+(leadPoke.nom))
                    break;
                case 4:
                    cpuPoke.vampi(leadPoke)
                    alert("Il reste "+(leadPoke.pdv)+" hp à "+(leadPoke.nom))
                    break;

            }
        } else {
            switch (player2){
                case 1:
                    cpuPoke.danse(leadPoke)
                    alert("Il reste "+(leadPoke.pdv)+" hp à "+(leadPoke.nom))
                    break;
                case 2:
                    cpuPoke.laser(cpuPoke)
                    alert("Il reste "+(leadPoke.pdv)+" hp à "+(leadPoke.nom))
                     break;
                case 3:
                    cpuPoke.vol(cpuPoke)
                    alert("Il reste "+(leadPoke.pdv)+" hp à "+(leadPoke.nom))
                    break;
                case 4:
                    cpuPoke.vampi(leadPoke)
                    alert("Il reste "+(leadPoke.pdv)+" hp à "+(leadPoke.nom))
                    break;
            }
            switch (player1){
                case 1:
                    leadPoke.fatal(cpuPoke)
                    alert("Il reste "+(cpuPoke.pdv)+" hp à "+(cpuPoke.nom))
                    break;
                case 2:
                    leadPoke.boule(cpuPoke)
                    alert("Il reste "+(cpuPoke.pdv)+" hp à "+(cpuPoke.nom))
                     break;
                case 3:
                    leadPoke.vive(cpuPoke)
                    alert("Il reste "+(cpuPoke.pdv)+" hp à "+(cpuPoke.nom))
                    break;
                case 4:
                    leadPoke.eclair(cpuPoke)
                    alert("Il reste "+(cpuPoke.pdv)+" hp à "+(cpuPoke.nom))
                    break;
            }

        }
                let result;
                if (cpuPoke.pdv = 0) {
                    result = "Félicitations, tu as gagné le combat";
                } else if(leadPoke.pdv = 0) {
                    result = "Ton Pokémon est K.O.";
                }
                 return result;
                }
}