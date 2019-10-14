import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        try {
            let data = await knex('users').select('*').where('id', '=', id);
            res.json(data);
        } catch (error) {
            console.log(error);
            res.json(500);
        }
    };
});

export default router;