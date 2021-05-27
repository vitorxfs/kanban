"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configRoutes = function (app) {
    app.get('/ping', function (_, res) { return res.send('pong'); });
};
exports.default = configRoutes;
