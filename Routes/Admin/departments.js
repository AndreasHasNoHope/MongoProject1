const express = require('express');
const DepartmentsController = require("../../controllers/DepartmentsController");
const route = express.Router();

route.get("/", DepartmentsController.list);
route.post("/", DepartmentsController.create);
route.get("/:departmentId", DepartmentsController.getOne);
route.delete("/:departmentId", DepartmentsController.deleteDep);
route.put("/:departmentId", DepartmentsController.updateDepartment);



module.exports = route;
