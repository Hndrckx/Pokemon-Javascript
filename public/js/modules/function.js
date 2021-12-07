export function fight(lead, cpu) {
    let player1;
    let player2;
    alert("Un Pokémon sauvage apparaît, c'est un " + (cpu.nom));
    alert("Vous envoyez Raichu au combat");
    while (lead.pdv > 0 && cpu.pdv > 0) {
        player1 = +prompt("Quelle attaque voulez-vous utiliser ? 1.Fatal Foudre  2.Boul'Elec  3.Vive-Attaque  4")
        player2 = Math.floor(Math.random() * 4 + 1)
        if (lead.speed > cpu.speed) {
            switch (player1) {
                case 1:
                    lead.fatal(cpu)
                    alert("Il reste " + (cpu.pdv) + " hp à " + (cpu.nom))
                    break;
                case 2:
                    lead.boule(cpu)
                    alert("Il reste " + (cpu.pdv) + " hp à " + (cpu.nom))
                    break;
                case 3:
                    lead.vive(cpu)
                    alert("Il reste " + (cpu.pdv) + " hp à " + (cpu.nom))
                    break;
                case 4:
                    lead.eclair(cpu)
                    alert("Il reste " + (cpu.pdv) + " hp à " + (cpu.nom))
                    break;
            }

            switch (player2) {
                case 1:
                    cpu.danse(lead)
                    alert("Il reste " + (lead.pdv) + " hp à " + (lead.nom))
                    break;
                case 2:
                    cpu.laser(cpu)
                    alert("Il reste " + (lead.pdv) + " hp à " + (lead.nom))
                    break;
                case 3:
                    cpu.vol(cpu)
                    alert("Il reste " + (lead.pdv) + " hp à " + (lead.nom))
                    break;
                case 4:
                    cpu.vampi(lead)
                    alert("Il reste " + (lead.pdv) + " hp à " + (lead.nom))
                    break;

            }
        } else {
            switch (player2) {
                case 1:
                    cpu.danse(lead)
                    alert("Il reste " + (lead.pdv) + " hp à " + (lead.nom))
                    break;
                case 2:
                    cpu.laser(cpu)
                    alert("Il reste " + (lead.pdv) + " hp à " + (lead.nom))
                    break;
                case 3:
                    cpu.vol(cpu)
                    alert("Il reste " + (lead.pdv) + " hp à " + (lead.nom))
                    break;
                case 4:
                    cpu.vampi(lead)
                    alert("Il reste " + (lead.pdv) + " hp à " + (lead.nom))
                    break;
            }
            switch (player1) {
                case 1:
                    lead.fatal(cpu)
                    alert("Il reste " + (cpu.pdv) + " hp à " + (cpu.nom))
                    break;
                case 2:
                    lead.boule(cpu)
                    alert("Il reste " + (cpu.pdv) + " hp à " + (cpu.nom))
                    break;
                case 3:
                    lead.vive(cpu)
                    alert("Il reste " + (cpu.pdv) + " hp à " + (cpu.nom))
                    break;
                case 4:
                    lead.eclair(cpu)
                    alert("Il reste " + (cpu.pdv) + " hp à " + (cpu.nom))
                    break;
            }

        }
        // alert('squallalalalala')

        // let result;
        // if (cpu.pdv <= 0) {
        //     result = "Félicitations, tu as gagné le combat";
        // } else if (lead.pdv <= 0) {
        //     result = "Ton Pokémon est K.O.";
        // }
        // return result;
    }
}