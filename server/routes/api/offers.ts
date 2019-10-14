import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.get('/allactive', async (req, res, next) => {
        try {
            let data = await knex('offers').select('*');
            res.json(data);
        } catch (error) {
            console.log(error);
            res.json(500);
        }
});

export default router;