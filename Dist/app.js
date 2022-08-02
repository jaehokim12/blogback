"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var service_1 = require("./service");
var app = (0, express_1.default)();
app.get('/', (function (req, res) {
    service_1.service;
    console.log('req', req);
    res.send('root');
}));
app.listen(4000, function () {
    console.log('server listening port:4000');
});
exports.default = app;
