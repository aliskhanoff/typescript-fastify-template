"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const path_1 = require("path");
(0, fastify_1.default)()
    .register(require('fastify-static'), {
    root: (0, path_1.join)(__dirname, '../../frontend/build'),
    prefix: '/',
})
    .listen(process.env.PORT || 1337);
