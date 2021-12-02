/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import controller from '../controllers/apiroutes2controller.js';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Black Musicians API!');
});

/// /////////////////////////////////////
/// ///blackmusicians database///////////
/// /////////////////////////////////////

router.route('/album')
  .get(async(rec, res) => {
    try {
      const result = await db.sequelizeDB.query(controller, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('touched /album with GET');
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((rec, res) => {
    try {
      console.log('touched /album with PUT');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .post((rec, res) => {
    try {
      console.log('touched /album with POST');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .delete((rec, res) => {
    try {
      console.log('touched /album with DELETE');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  });

export default router;