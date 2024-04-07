const router = require("express").Router();

// Controller Imports
const AuthorizationController = require("./controllers/AuthorizationController");

// Middleware Imports
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");

// JSON Schema Imports for payload verification
const registerPayload = require("./schemas/registerPayload");
const loginPayload = require("./schemas/loginPayload");

router.post(
  "/api/admin/signup",
  [SchemaValidationMiddleware.verify(registerPayload)],
  AuthorizationController.register
);

router.post(
  "/api/admin/login",
  [SchemaValidationMiddleware.verify(loginPayload)],
  AuthorizationController.login
);

module.exports = router;
