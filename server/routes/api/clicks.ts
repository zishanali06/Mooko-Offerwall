import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.post('/add', async (req, res, next) => {
        console.log(req.body);
        try {
            let add = await knex('clicks').insert(req.body);
            res.json(add);
        } catch (error) {
            console.log(error);
            res.json(500);
        }
});

router.get('/all', async (req, res, next) => {
    try {
        let add = await knex('clicks').select("*");
        res.json(add);
    } catch (error) {
        console.log(error);
        res.json(500);
    }
});



export default router;