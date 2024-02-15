// Dichiaro l'array di oggetti

const teamMebers = [
    {
        nome: "Wayne Barret",
        ruolo: "Founder & CEO",
        immagine: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Grapgic Designer",
        immagine: "barbara-ramos-graphic-designer.jpg"
    },
];

// Stampo in console gli oggetti dell'array
for(let i = 0; i < teamMebers.length; i++){

    const member = teamMebers[i];

    // creo un ciclo for per far stampare tutte le propietà 
    for( let key in member){
        
        console.log(`${key}: ${member[key]}`)

    }

    // Creo un divisore tra ogni oggtto
    console.log("*********************")

}