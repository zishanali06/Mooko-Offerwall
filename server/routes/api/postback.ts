import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.get('/get', async (req, res, next) => {
        console.log(req.query);
        let offerinfo = req.query;
        try {
            let [balance] = await knex('users').select('balance').where('id', '=', offerinfo.sub1);
            let newnum = parseFloat(offerinfo.pay);
            console.log("New num" + newnum);
            let newbalance = balance.balance + newnum;
            let change = await knex('users').where('id', '=', offerinfo.sub1).update({ balance: newbalance });
            console.log("New Bal" + newbalance);
            res.json(balance);
        } catch (error) {
            console.log(error);
            res.json(500);
        }
});

export default router;