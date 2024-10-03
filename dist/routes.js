"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateGuestController_1 = require("./controllers/CreateGuestController");
const EditGuestController_1 = require("./controllers/EditGuestController");
const DeleteGuestController_1 = require("./controllers/DeleteGuestController");
const ShowAllGuestController_1 = require("./controllers/ShowAllGuestController");
const ProfileGuestController_1 = require("./controllers/ProfileGuestController");
const routes = (0, express_1.Router)();
routes.get('/guest', new ShowAllGuestController_1.ShowAllGuestController().handle);
routes.post('/guest/signup', new CreateGuestController_1.CreateGuestController().handle);
routes.patch('/guest/profile', new EditGuestController_1.EditGuestController().handle);
routes.get('/guest/profile', new ProfileGuestController_1.ProfileGuestController().handle);
routes.delete('/guest/profile/delete', new DeleteGuestController_1.DeleteGuestController().handle);
exports.default = routes;
