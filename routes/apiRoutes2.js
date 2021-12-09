/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import data from '../controllers/apiroutes2controller.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Black Musicians API!');
});

/// /////////////////////////////////////
/// ///blackmusicians database///////////
/// /////////////////////////////////////

router.route('/album')
  .get(async (req, res) => {
    try {
      const result = await db.Album.findAll();
      console.log('touched /album with GET');
      res.json(result);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      await db.Album.update(
        {
          album_name: req.body.album_name,
          album_release_date: req.body.album_release_date,
          record_label_id: req.body.record_label_id
        },
        {
          where: {
            album_id: req.body.album_id
          }
        }
      );
      res.send('Successful Update');
    } catch (err) {
      console.log(err);
      res.json({ err: 'Server Error' });
    }
  })

  .post(async(rec, res) => {
    const album = await db.Album.findAll();
    const currentId = (await album.length) + 1;
    try {
      const newAlbum = await db.Album.create({
        album_id: currentId,
        album_name: req.body.album_name,
        album_release_date: req.body.album_release_date,
        record_label_id: req.body.record_label_id
      });
      res.json(newAlbum);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete(async(rec, res) => {
    try {
      await db.Album.destroy({
        where: {
          album_id: req.params.album_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.route('/performers')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(data.getPerformers, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('touched /performers with GET');
      res.json(result);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (rec, res) => {
    try {
      console.log('touched /performers with PUT');
      res.json({data: data});

      const performers = await db.Performers.update(
        {
          artist_first_name: req.body.artist_first_name,
          artist_last_name: req.body.artist_last_name,
          country_of_origin: req.body.country_of_origin,
          gender: req.body.gender,
          birth_date: req.body.birth_date
        },
        {
          where: {
            artist_id: req.body.artist_id
          }
        }
      );
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .post(async (rec, res) => {
    try {
      console.log('touched /performers with POST');
      res.json({data: data});

      const performers = await db.performers.create({
        artist_id: currentId,
        artist_first_name: req.body.artist_first_name,
        artist_last_name: req.body.artist_last_name,
        country_of_origin: req.body.country_of_origin,
        gender: req.body.gender,
        birth_date: req.body.birth_date
      });
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .delete(async (rec, res) => {
    try {
      console.log('touched /performers with DELETE');
      res.json({data: data});

      const performers = await db.performers.destroy({
        where: {
          artist_id: req.params.artist_id
        }
      });
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  });

router.route('/songs')
  .get(async (rec, res) => {
    try {
      console.log('touched /songs with GET');
      res.json({data: data});

      const songs = await db.songs.findAll({
        where: {
          song_id: req.params.song_id
        }
      });
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put(async (rec, res) => {
    try {
      console.log('touched /songs with PUT');
      res.json({data: data});

      const songs = await db.songs.update(
        {
          track_name: req.body.track_name,
          track_duration: req.body.track_duration,
          album_id: req.body.album_id,
          explicit: req.body.explicit
        },
        {
          where: {
            song_id: req.body.song_id
          }
        }
      );
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .post(async(rec, res) => {
    try {
      console.log('touched /songs with POST');
      res.json({data: data});

      const songs = await db.songs.create({
        track_name: req.body.track_name,
        track_duration: req.body.track_duration,
        album_id: req.body.album_id,
        explicit: req.body.explicit
      });
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .delete(async(rec, res) => {
    try {
      console.log('touched /songs with DELETE');
      res.json({data: data});

      const songs = await db.songs.destroy({
        where: {
          song_id: req.params.song_id
        }
      });
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  });

export default router;