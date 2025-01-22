// const mail;
// selezioniamo l'elemnto di output
const outputEl = document.getElementById('outputUl');
// console.log(outputEl);
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
// / faccio partire la richiesta Ajax verso l'API per ricevere il numero
for (let i = 0; i < 10; i++) {
    

    axios.get(endpoint)
    .then(responseObj => {
        //codice da eseguire in caso di successo
        const result = responseObj.data;
        let mail = result.response;
        
        console.log(mail);
        // output in pagina
        outputUl.innerText = mail;
    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })
    
    
}


