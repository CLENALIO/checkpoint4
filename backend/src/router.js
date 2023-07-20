const express = require("express");

const router = express.Router();

const prestationControllers = require("./controllers/prestationControllers");

router.get("/api/prestation", prestationControllers.browse);
router.get("/api/prestation/:id", prestationControllers.read);
router.put("/api/prestation/:id", prestationControllers.edit);
router.post("/api/prestation", prestationControllers.add);
router.delete("/api/prestation/:id", prestationControllers.destroy);

const reservationControllers = require("./controllers/reservationControllers");

router.get("/api/reservation", reservationControllers.browse);
router.get("/api/reservationByDate/:date", reservationControllers.getByDate);
router.put("/api/reservation/:date", reservationControllers.editByDate);
router.post("/api/reservation", reservationControllers.add);
router.delete("/api/reservation/:date", reservationControllers.destroyByDate);

const userControllers = require("./controllers/userControllers");

router.get("/api/user", userControllers.browse);
router.get("/api/user/:id", userControllers.read);
router.put("/api/user/:id", userControllers.edit);
router.post("/api/user", userControllers.add);
router.post("/api/user/login", userControllers.getUserByEmailWithPassword);
router.delete("/api/user/:id", userControllers.destroy);

module.exports = router;
