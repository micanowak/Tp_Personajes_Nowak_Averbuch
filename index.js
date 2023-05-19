import express from "express";
const app = express();
import { PersonajeServices } from "./services/PersonajeServices";

const port = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

app.delete('/Personaje/:id', async (req, res) => {
    try {
        await PersonajeServices.deleteById(req.params.id);
        res.status(200).json({ message: 'Personaje Eliminado'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el delete' });

    }
})

app.put('/Personaje/:id', async (req, res) => {
    try {
        await PersonajeServices.update(req.params.id, req.body);
        res.status(200).json({ message: 'Personaje Actualizado'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el update' });

    }
})

app.post('/Personaje', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PersonajeServices.insert(req.body)
        res.status(200).json({ message: 'Personaje creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
})

app.get('/Personaje', async (req, res) => {
    const pizza = await PersonajeServices.getNotAllAtributos(req.params.id)
    res.status(200).send(Personaje)
})


/*app.get('/Personaje', async (req, res) => {
    const pizza = await PersonajeServices.getAll(req.params.id)
    res.status(200).send(pizza)
})

app.get('/Personaje/:id', async (req, res) => {
    const Personaje = await PersonajeServices.getById(req.params.id)
    res.status(200).send(Personaje)

})

app.get('/Pizza', async (req, res) => {
    const pizza = await PersonajeServices.getALL()
    res.status(200).send(pizza)

})

app.put('/Pizza/:id', async (req, res) => {
    try {
        await PersonajeServices.update(req.params.id, req.body);
        res.status(200).json({ message: 'Pizza Actualizada'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el update' });

    }
})
*/