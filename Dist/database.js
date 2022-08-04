"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeQuery = exports.pool = void 0;
var mysql = __importStar(require("mysql2"));
exports.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'root',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 10,
    rowsAsArray: true
});
var executeQuery = function (query) {
    if (query === void 0) { query = ''; }
    exports.pool.getConnection(function (err, conn) {
        console.log('errr', err);
        var Query = query;
        conn.query(Query, function (err, results, fields) {
            console.log('errr', err);
            console.log("results:::::", results);
            console.log("fields:::", fields);
        });
        conn.release();
    });
};
exports.executeQuery = executeQuery;
