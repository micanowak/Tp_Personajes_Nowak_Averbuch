import express from "express";
const app = express();
import { PersonajeServices } from "./services/PersonajeServices.js";

const port = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

// verificado
app.delete('/deletePersonaje/:id', async (req, res) => {
    try {
        await PersonajeServices.deleteById(req.params.id);
        res.status(200).json({ message: 'Personaje Eliminado'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el delete' });

    }
})

// verificado
app.get('/allPersonaje', async (req, res) => {
    const Peliserie = await PersonajeServices.getAll()
    res.status(200).send(Peliserie)

})

// verificado
app.put('/updatePersonaje', async (req, res) => {
    try {
        console.log(req.params.id);
        await PersonajeServices.update(req.params.id, req.body);
        res.status(200).json({ message: 'Personaje Actualizado'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el update' });

    }
})

// verificado
app.post('/insertPersonaje', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PersonajeServices.insert(req.body)
        res.status(200).json({ message: 'Personaje creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
})

// verificado
app.get('/notAllPersonaje', async (req, res) => {
    const Personaje = await PersonajeServices.getNotAllAtributosPer()
    res.status(200).send(Personaje)
})

// verificado
app.get('/getPersonajeByNom/:nombre', async (req, res) => {
    const Personaje = await PersonajeServices.getByName(req.params.nombre)
    res.status(200).send(Personaje)

})

// verificado
app.get('/getPersonajeByEdad/:edad', async (req, res) => {
    const Personaje = await PersonajeServices.getByAge(req.params.edad)
    res.status(200).send(Personaje)

})

// verificado
app.get('/getPersonajeByPeso/:peso', async (req, res) => {
    const Personaje = await PersonajeServices.getByWeight(req.params.peso)
    res.status(200).send(Personaje)

})

// verificado
app.get('/getPersonaje/:idPelicula', async (req, res) => {
    const Personaje = await PersonajeServices.getByPeliserie(req.params.idPelicula)
    res.status(200).send(Personaje)

})

// verificado
app.get('/notAllPeliserie', async (req, res) => {
    const Peliserie = await PersonajeServices.getNotAllAtributosPel()
    res.status(200).send(Peliserie)

})

// verificado
app.get('/getPeliserie', async (req, res) => {
    const Peliserie = await PersonajeServices.getAllPeli()
    res.status(200).send(Peliserie)

})

// verificado
app.put('/updatePelserie/:id', async (req, res) => {
    try {
        await PersonajeServices.updatePeli(req.params.id, req.body);
        res.status(200).json({ message: 'Pelicula Actualizado'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el update' });

    }
})

// verificado
app.delete('/deletePeliserie/:id', async (req, res) => {
    try {
        await PersonajeServices.deleteByIdPeli(req.params.id);
        res.status(200).json({ message: 'Peliserie Eliminado'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el delete' });

    }
})

// verificado
app.post('/insertPeliserie', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PersonajeServices.insert(req.body)
        res.status(200).json({ message: 'Peliserie creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
})

// verificado
app.get('/getPeliserie/:titulo', async (req, res) => {
    const Peliserie = await PersonajeServices.getByTitulo(req.params.titulo)
    res.status(200).send(Peliserie)

})

// verificado
app.get('/getPeliserieOrderAsc', async (req, res) => {
    const Peliserie = await PersonajeServices.getAllOrderedAsc()
    res.status(200).send(Peliserie)

})

// verificado
app.get('/getPeliserieOrderDesc', async (req, res) => {
    const Peliserie = await PersonajeServices.getAllOrderedDesc()
    res.status(200).send(Peliserie)

})