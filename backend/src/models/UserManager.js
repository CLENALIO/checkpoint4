const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set email = ? where id = ?`,
      [user.email, user.id]
    );
  }

  findByMailWithPassword(email, password) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ? AND password = ?`,
      [email, password]
    );
  }
}

module.exports = UserManager;
