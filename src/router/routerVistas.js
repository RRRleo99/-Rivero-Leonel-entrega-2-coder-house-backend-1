import { Router } from "express";
import ProductManager from "./src/data/ProductMaganer";

const router = Router()
const gastosProducts = new ProductManager()

router.get("/", (req,res)=>{
    res.render("hay", {productos: gastosProducts.obtenerProducts()})
})

router.get("/", (req,res)=>{
    res.render("realTimeProduct")
})

export default router;