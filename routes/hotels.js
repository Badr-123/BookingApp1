import express  from "express";
import { countByCity, createHotel } from "../API/Controllers/hotel.js";
import { updateHotel } from "../API/Controllers/hotel.js";
import { deleteHotel } from "../API/Controllers/hotel.js";
import { getHotel } from "../API/Controllers/hotel.js";
import { getHotels } from "../API/Controllers/hotel.js";
import Hotel from "../API/models/Hotel.js";
import { verifyAdmin } from "../API/utils/verifyToken.js";
const router = express.Router();

//CREATE

router.post("/",verifyAdmin, createHotel);
//UPDATE

router.put("/find/:id", verifyAdmin, updateHotel)
//DELETE

router.delete("/find/:id",verifyAdmin, deleteHotel)
//GET

router.get("/find/:id", getHotel)
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);


export default router;