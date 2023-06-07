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
    const Personaje = await PersonajeServices.getNotAllAtributos()
    res.status(200).send(Personaje)
})

app.get('/Personaje/:nombre', async (req, res) => {
    const Personaje = await PersonajeServices.getByName(req.params.nom)
    res.status(200).send(Personaje)

})

app.get('/Personaje/:edad', async (req, res) => {
    const Personaje = await PersonajeServices.getByAge(req.params.edad)
    res.status(200).send(Personaje)

})

app.get('/Personaje/:peso', async (req, res) => {
    const Personaje = await PersonajeServices.getByWeight(req.params.peso)
    res.status(200).send(Personaje)

})

app.get('/Personaje/:idPelicula', async (req, res) => {
    const Personaje = await PersonajeServices.getByPeliserie(req.params.idPelicula)
    res.status(200).send(Personaje)

})

app.get('/Peliserie', async (req, res) => {
    const Peliserie = await PersonajeServices.getNotAllAtributosPel()
    res.status(200).send(Peliserie)

})

app.get('/Peliserie', async (req, res) => {
    const Peliserie = await PersonajeServices.getNotAllAtributosPel()
    res.status(200).send(Peliserie)

})

app.get('/Peliserie', async (req, res) => {
    const Peliserie = await PersonajeServices.getAllPeli()
    res.status(200).send(Peliserie)

})

app.put('/Pelserie/:id', async (req, res) => {
    try {
        await PersonajeServices.updatePeli(req.params.id, req.body);
        res.status(200).json({ message: 'Pelicula Actualizado'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el update' });

    }
})

app.delete('/Peliserie/:id', async (req, res) => {
    try {
        await PersonajeServices.deleteByIdPeli(req.params.id);
        res.status(200).json({ message: 'Peliserie Eliminado'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el delete' });

    }
})

app.post('/Peliserie', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PersonajeServices.insert(req.body)
        res.status(200).json({ message: 'Peliserie creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
})

app.get('/Peliserie/:titulo', async (req, res) => {
    const Peliserie = await PersonajeServices.getByTitulo(req.params.titulo)
    res.status(200).send(Peliserie)

})

app.get('/Peliserie/:order', async (req, res) => {
    const Peliserie = await PersonajeServices.getAllOrdered(req.params.order)
    res.status(200).send(Peliserie)

})