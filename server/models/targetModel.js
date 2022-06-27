const db = require("../config/db");

class Target {
  constructor(tar_id, tar_title_et, tar_title_ru, tar_title_en) {
    this.tar_id = tar_id;
    this.tar_title_et = tar_title_et;
    this.tar_title_ru = tar_title_ru;
    this.tar_title_en = tar_title_en;
  }

  async saveNewTarget() {
    let sql = `INSERT INTO targets(tar_title_et,tar_title_ru,tar_title_en)
    VALUES('${this.tar_title_et}','${this.tar_title_ru}','${this.tar_title_en}')`;

    const [newTarget, _] = await db.execute(sql);
    return newTarget;
  }

  static findAll() {
    let sql = "SELECT * FROM targets;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM targets WHERE id = ${id};`;
    return db.execute(sql);
  }

  static findByIdAndUpdate(id) {
    let sql = `UPDATE targets SET tar_title_et = ?, tar_title_ru = ?, tar_title_en = ? WHERE id = ${id} ;`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM targets WHERE id = ${id};`;
    return db.execute(sql);
  }

  static findByTitleEt() {
    let sql = `SELECT tar_id, tar_title_et FROM targets;`;
    return db.execute(sql);
  }
}

module.exports = Target;