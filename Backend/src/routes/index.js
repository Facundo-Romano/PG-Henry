const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const passport = require("passport");
const paintingRoute = require("./paintingRoute.js");
const techniqueRoute = require("./techniqueRoute.js");
const artistRoute = require("./artistRoute.js");
const reviewRoute = require("./reviewRoute.js");
const authRoute = require("./authRoute.js");
const favoriteRoute = require("./favoriteRoute.js");
const cartRoute = require("./cartRoute.js");
const checkoutRoute = require("./checkoutRoute.js");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/painting", paintingRoute);
router.use("/technique", techniqueRoute);
router.use("/artist", artistRoute);
router.use("/review", reviewRoute);
router.use(
	"/favorites",
	passport.authenticate("jwt", { session: false }),
	favoriteRoute
);
router.use("/user", authRoute);
router.use(
	"/cart",
	passport.authenticate("jwt", { session: false }),
	cartRoute
);
router.use("/checkout", checkoutRoute);

module.exports = router;
