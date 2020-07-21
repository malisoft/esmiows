"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdsProducts = void 0;
//for get ids from a productos array and use this return in query with mongoose for exclude this items
exports.getIdsProducts = (items) => {
    let ids = [];
    for (const producto of items) {
        ids.push(producto._id);
    }
    return ids;
};
