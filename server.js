import app from "./src/app.js"

const port = process.env.PORT || 3000; // UTILIZA A PORTA DO AMBIENTE DE PRODUÇÃO OU UTILIZA A PORTA 3000(LOCAL)

app.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})