import elencoCorinthians from "./routes/elenco.js";
import elencoCorinthians2024 from "./routes/elenco2024.js";
import atacantesCorinthians from "./routes/atacantes.js";
import meiasCorinthians from "./routes/meias.js";
import defensoresCorinthians from "./routes/defensores.js";
import goleirosCorinthians from "./routes/goleiros.js";
import express from "express"

const app = express();
const PORT = 3505;

app.listen(PORT, () => console.log('Servidor iniciado'))

app.get('/', (requisicao, resposta) => {
    resposta.send(elencoCorinthians);
})

app.get('/2024', (requisicao, resposta) => {
    resposta.send(elencoCorinthians2024);
})

app.get('/atacantes', (requisicao, resposta) => {
    resposta.send(atacantesCorinthians);
})

app.get('/meias', (requisicao, resposta) => {
    resposta.send(meiasCorinthians)
})

app.get('/defensores', (requisicao, resposta) => {
    resposta.send(defensoresCorinthians)
})

app.get('/goleiros', (requisicao, resposta) => {
    resposta.send(goleirosCorinthians)
})