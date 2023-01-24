"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promiseJWT = function (jwtFunc, payload) {
    var promise = new Promise(function (resolve, reject) {
        console.log({ payload: payload });
        jwtFunc(payload, process.env.JWT_SECRET_KEY, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
    return promise;
};
exports.default = promiseJWT;
