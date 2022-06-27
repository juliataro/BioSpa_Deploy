const db = require("../config/db");

// Symptom DB table class and and SQL methods

class Disease {
  constructor(dis_id, dis_title_et, dis_title_ru, dis_title_en) {
    this.dis_id = dis_id;
    this.dis_title_et = dis_title_et;
    this.dis_title_ru = dis_title_ru;
    this.dis_title_en = dis_title_en;
  }

  // DropDown fetching functions
  static findByTitleEt() {
    let sql = `SELECT dis_id, dis_title_et FROM diseases;`;
    return db.execute(sql);
  }
}

module.exports = Disease;