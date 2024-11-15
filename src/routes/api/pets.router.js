import { Router } from "express";
import  PetsController  from "../../controllers/pets.controller.js";
import uploader from "../../utils/uploader.js";

const petsController = new PetsController();
const petsRouter = Router();

petsRouter.get("/", petsController.getAllPets);
petsRouter.post("/", petsController.createPet);
petsRouter.post("/withimage", uploader.single("image"), petsController.createPetWithImage);
petsRouter.put("/:pid", petsController.updatePet);
petsRouter.delete("/:pid", petsController.deletePet);

export default petsRouter;
