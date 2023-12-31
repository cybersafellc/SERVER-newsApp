const express = require("express");
const app = express();
const port = 9000;
const bodyParser = require("body-parser");
const cors = require("cors");
const date = require("date-and-time");
//
const ressponse = require("./ressponse");
const connection = require("./connection");

app.use(bodyParser.json());
app.use(cors());

app.get(`/all-news`, async (req, res) => {
  try {
    connection.query(`SELECT * FROM news_list`, (err, ress) => {
      if (err) {
        ressponse(500, "Terjadi kesalahan saat query ke database", res, err);
      } else if (ress) {
        ressponse(200, "Data berhasil dikirim", res, ress);
      }
    });
  } catch (error) {
    ressponse(
      500,
      "terjadi kesalahan dalam membaca semua berita dalam mysql",
      res,
      null
    );
  }
});
app.post(`/post-news`, (req, res) => {
  try {
    const now = new Date();
    const time = date.format(now, "ddd, MMM DD YYYY | HH:mm");
    connection.query(
      `INSERT INTO news_list(id, title, text_value, date) VALUES (?,?,?,?)`,
      [null, req.body.title, req.body.text_value, time],
      (err, ress) => {
        if (err) {
          ressponse(500, "Terjadi kesalahan saat query ke database", res, err);
        } else if (ress) {
          ressponse(200, "Data berhasil dikirim", res, ress);
        }
      }
    );
  } catch (error) {
    ressponse(
      500,
      "terjadi kesalahan dalam membaca semua berita dalam mysql",
      res,
      null
    );
  }
});
app.use((req, res) => {
  ressponse(404, "Halaman tidak ditemukan", res, null);
});
app.use((err, req, res, next) => {
  console.error(err);
  ressponse(500, "Terjadi kesalahan dalam server", res, null);
});

app.listen(port, () => {
  console.log(`Server runing on port : ${port}`);
});
