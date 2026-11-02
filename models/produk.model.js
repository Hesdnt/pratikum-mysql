const db = require('../config/database');

// Seluruh query di sini 100% memakai prepared statement (placeholder ?)
const KATEGORI = ['Periferal', 'Display', 'Komponen Komputer', 'Jaringan'];

const ProdukModel = {
  KATEGORI,

  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM produk ORDER BY id DESC');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM produk WHERE id = ?', [id]);
    return rows[0];
  },

 getByKategoriSecure: async (kategoriInput) => {
    const secureSql = 'SELECT * FROM produk WHERE kategori = ?';

    console.log(
        '\n[PREPARED STATEMENT QUERY]:',
        secureSql,
        'WITH VALUE:',
        [kategoriInput]
    );

    const [rows] = await db.query(secureSql, [kategoriInput]);
    return rows;
},

  create: async (d) => {
    const sql = 'INSERT INTO produk (nama_produk, kategori, harga, stok) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(sql, [d.nama_produk, d.kategori, d.harga, d.stok]);
    return result;
  },

  update: async (id, d) => {
    const sql = 'UPDATE produk SET nama_produk = ?, kategori = ?, harga = ?, stok = ? WHERE id = ?';
    const [result] = await db.execute(sql, [d.nama_produk, d.kategori, d.harga, d.stok, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM produk WHERE id = ?', [id]);
    return result;
  }
};

module.exports = ProdukModel;
