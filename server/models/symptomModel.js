const db = require("../config/db");

// Symptom DB table class and and SQL methods

class Symptom {
  constructor(symp_id, symp_title_et, symp_title_ru, symp_title_en) {
    this.symp_id = symp_id;
    this.symp_title_et = symp_title_et;
    this.symp_title_ru = symp_title_ru;
    this.symp_title_en = symp_title_en;
  }

  async saveNewSymptom() {
    let sql = `INSERT INTO symptoms(symp_title_et,symp_title_ru,symp_title_en)
    VALUES('${this.symp_title_et}','${this.symp_title_ru}','${this.symp_title_en}')`;

    const [newSymptom, _] = await db.execute(sql);
    return newSymptom;
  }

  static findAll() {
    let sql = "SELECT * FROM symptoms;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM symptoms WHERE id = ${id};`;
    return db.execute(sql);
  }

  static findByIdAndUpdate(id) {
    let sql = `UPDATE symptoms SET symp_title_et = ${this.symp_title_et}, symp_title_ru = ${this.symp_title_ru}, symp_title_en = ${this.symp_title_en} WHERE id = ${id} ;`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM symptoms WHERE id = ${id};`;
    return db.execute(sql);
  }

  // DropDown fetching functions
  static findByTitleEt() {
    let sql = `SELECT symp_id, symp_title_et FROM symptoms;`;
    return db.execute(sql);
  }
}

module.exports = Symptom;