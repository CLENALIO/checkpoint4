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

  update(reservation) {
    return this.database.query(
      `update ${this.table} set date = ?, type = ?, email = ?, phone = ?, customername = ? where id = ?`,
      [
        reservation.date,
        reservation.type,
        reservation.email,
        reservation.phone,
        reservation.customername,
      ]
    );
  }

  findAllwithDetails() {
    return this.database
      .query(`select reservation.date, reservation.type, reservation.email, reservation.phone, reservation.customername, prestation.name 
    from  ${this.table}
    LEFT JOIN prestation ON reservation.type = prestation.id`);
  }

  findByIdwithDetails(id) {
    return this.database.query(
      `select reservation.date, reservation.type, reservation.email, reservation.phone, reservation.customername, prestation.name
    from  ${this.table} 
    LEFT JOIN prestation ON reservation.type = prestation.id
    where reservation.id = ?`,
      [id]
    );
  }

  findByDate(date) {
    return this.database.query(
      `select reservation.type from ${this.table} where date = ?`,
      [date]
    );
  }
}

module.exports = ReservationManager;
