const db = require('./db');

let controller = {};

/**
 * Busca todos os sites, e, caso houver, o estado da ultima requisicao
 * 
 * @param {function} cb Função de Callback
 */
controller.sites = (cb) => {
    const query = `SELECT site.*, historico_site.status
    FROM site
    LEFT JOIN historico_site ON historico_site.site_id = site.id
    GROUP BY site.id ORDER BY site.id`;

    db.all(query, (err, rows) => {
        if (err) {
            return cb(err);
        } else
            return cb(undefined, rows);
    });
}


/**
 * Busca os ultimos 10 registros do site
 * 
 * @param {int} id ID do site
 * @param {function} cb Função de Callback
 */
controller.historico = (id, cb) => {
    const query = `SELECT * FROM historico_site WHERE site_id = ${id} ORDER BY id DESC LIMIT 10`;

    db.all(query, (err, rows) => {
        if (err) {
            return cb(err);
        } else
            return cb(undefined, rows);
    });
}

/**
 * Persiste o site
 * 
 * @param {Object} site Objeto contendo informações do site
 * @param {string} site.nome Nome do site
 * @param {string} site.url URL de acesso ao site
 * @param {function} cb Função de Callback
 */
controller.inserirSite = (site, cb) => {
    db.run(`INSERT INTO site (nome, url) VALUES ('${site.nome}', '${site.url}');`, (err) => {
        if (err) {
            return cb(err)
        } else {
            return cb(undefined);
        }
    });
}


module.exports = controller;