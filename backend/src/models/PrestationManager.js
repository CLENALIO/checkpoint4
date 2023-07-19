const AbstractManager = require("./AbstractManager");

class PrestationManager extends AbstractManager {
  constructor() {
    super({ table: "prestation" });
  }

  insert(prestation) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      prestation.name,
    ]);
  }

  update(prestation) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [prestation.name, prestation.id]
    );
  }
}

module.exports = PrestationManager;
