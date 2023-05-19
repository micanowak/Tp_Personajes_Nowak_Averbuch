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

    static getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM pizza WHERE id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }*/

    static getNotAllAtributos = async () => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.getNotAllAtributos()');
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
        console.log('Estoy en: PersonajeServices.update(Personaje)');
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

    // FALTA ESTEEEEEEEEE DE ABAJO
    static getAll = async () => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.GetAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT Personaje.*, Peliserie.titulo FROM Personaje INNER JOIN Personaje_X_Peliserie ON IdPersonaje=Personaje.id)')
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}