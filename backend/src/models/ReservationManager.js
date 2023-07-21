const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  insert(reservation) {
    return this.database.query(
      `insert into ${this.table} (date, type, email, phone, customername) values (?, ?, ?, ?, ?)`,
      [
        reservation.date,
        reservation.type,
        reservation.email,
        reservation.phone,
        reservation.customername,
      ]
    );
  }

  updateByDate(reservation) {
    return this.database.query(
      `update ${this.table} set type = ?, email = ?, phone = ?, customername = ? where date = ?`,
      [
        reservation.type,
        reservation.email,
        reservation.phone,
        reservation.customername,
        reservation.date,
      ]
    );
  }

  findByDate(date) {
    return this.database.query(`select * from ${this.table} where date = ?`, [
      date,
    ]);
  }

  findByMonth() {
    return this.database.query(`select date from ${this.table}`);
  }

  deleteByDate(date) {
    return this.database.query(`delete from ${this.table} where date = ?`, [
      date,
    ]);
  }
}

module.exports = ReservationManager;
