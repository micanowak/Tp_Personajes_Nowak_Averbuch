import config from '../db-config.js';
import sql from 'mssql';

export class PersonajeServices {
    /*static getAll = async () => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM pizza');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

*/

    static getNotAllAtributosPer = async () => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.getNotAllAtributosPer()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT imagen, nombre, id FROM Personaje');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajeServices.deleteBy(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Personaje WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error)
        }
        return rowsAffected;
    }

    static insert = async (Personaje) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.insert(Personaje)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIma', Personaje.imagen)
                .input('pNom', Personaje.nombre)
                .input('pEdad', Personaje.edad)
                .input('pPeso', Personaje.peso)
                .input('pHistoria', Personaje.historia)
                .query('INSERT INTO Personaje (imagen, nombre, edad, peso, historia) VALUES (@pIma, @pNom, @pEdad, @pPeso, @pHistoria)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static update = async (id, Personaje) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.update(id, Personaje)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .input('pIma', Personaje.imagen)
                .input('pNom', Personaje.nombre)
                .input('pEdad', Personaje.edad)
                .input('pPeso', Personaje.peso)
                .input('pHistoria', Personaje.historia)
                .query("UPDATE Personaje SET imagen=@pIma, nombre=@pNom, edad=@pEdad, peso=@pPeso, historia=@pHistoria WHERE id = @pId");
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getAll = async () => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT Personaje.*, Peliserie.titulo FROM Personaje INNER JOIN Personaje_X_Peliserie ON fk_idPersonaje = Personaje.id INNER JOIN Peliserie ON Titulo = Peliserie.titulo WHERE fk_idPersonaje = Personaje.id')
                
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getByName = async (nom) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetByName(nom)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pName', sql.Char, nom)
                .query('SELECT * FROM Personaje WHERE nombre = @pName');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getByAge = async (edad) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetByAge(edad)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pEdad', sql.Int, edad)
                .query('SELECT * FROM Personaje WHERE edad = @pEdad');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getByWeight = async (peso) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetByWeight(peso)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pPeso', sql.Int, peso)
                .query('SELECT * FROM Personaje WHERE peso = @pPeso');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getByPeliserie = async (idPelicula) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetByPeliserie(peli)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdPeli', sql.Int, idPelicula)
                .query('SELECT * from personaje where id = (SELECT fk_idPersonaje from Personaje_X_Peliserie where fk_idPelicula = @pIdPeli)');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getNotAllAtributosPel = async () => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.getNotAllAtributosPel()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT id, imagen, titulo, fechaCreacion FROM Peliserie');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getAllPeli = async () => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetAllPeli()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT Peliserie.*, Personaje.nombre FROM Peliserie INNER JOIN Personaje_X_Peliserie ON fk_idPelicula = Peliserie.id INNER JOIN Personaje ON nombre = Personaje.nombre WHERE fk_idPelicula = Peliserie.id')
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static updatePeli = async (id, Peliserie) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.updatePeli(id, Peliserie)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .input('pIma', Peliserie.imagen)
                .input('pFecha', Peliserie.fechaCreacion)
                .input('pCali', Peliserie.calificacion)
                .input('pTit', Peliserie.titulo)
                .query("UPDATE Peliserie SET imagen=@pIma, titulo=@pTit, fechaCreacion=@pFecha, calificacion=@pCali WHERE id = @pId");
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static deleteByIdPeli = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajeServices.deleteByPeli(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Peliserie WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error)
        }
        return rowsAffected;
    }

    static insertPeli = async (Peliserie) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.insertPeli(Peli)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIma', Peliserie.imagen)
                .input('pTit', Peliserie.titulo)
                .input('pCali', Peliserie.calificacion)
                .input('pFecha', Peliserie.fechaCreacion)
                .query('INSERT INTO Peliserie (imagen, titulo, calificacion, fechaCreacion) VALUES (@pIma, @pTit, @pCali, @pFecha)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getByTitulo = async (titulo) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetByTitulo(titulo)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pTit', sql.Char, titulo)
                .query('SELECT * FROM Peliserie WHERE titulo = @pTit');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getAllOrdered = async (ascORdesc) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetOrdered(ascORdesc)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pAscDesc', sql.Char, ascORdesc)
                .query('SELECT * FROM Peliserie order by fechaCreacion @pAscDesc');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}