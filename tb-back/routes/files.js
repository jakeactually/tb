var express = require('express');
var router = express.Router();
const axios = require('axios');

const api = 'https://echo-serv.tbxnet.com/v1';
const headers = { Authorization: 'Bearer aSuperSecretKey' };

/* GET users listing. */
router.get('/data', async function(req, res, next) {
  const { data: { files } } =  await axios.get(`${api}/secret/files`, { headers });

  const result = await Promise.all(files.map(async file => {
    try {
      const { data: csv } =  await axios.get(`${api}/secret/file/${file}`, { headers });
      return {
        file,
        lines: csv
          .split('\n')
          .slice(1)
          .map(line => line.split(','))
          .filter(line => line.filter(Boolean).length >= 4)
          .map(([file, text, number, hex]) => ({ file, text, number, hex }))
      };
    } catch (error) {
      console.log(error);
      return { file, lines: [] };
    }
  }));

  res.send(result);
});

module.exports = router;
