import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/',homeController.getHomePage);
    router.get('/leanwill',(req,res)=> {
        return res.send("Hello World with LeanWill");
    });
    return app.use("/",router)
}

module.exports = initWebRoutes;
