CREATE TABLE site (
    id         INTEGER       PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome       VARCHAR (100) UNIQUE  NOT NULL,
    url        TEXT          UNIQUE NOT NULL
);

CREATE TABLE historico_site (
    id              INTEGER   PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    site_id         REFERENCES site (id) ON DELETE CASCADE NOT NULL,
    status          INTEGER,
    error_code      VARCHAR (100),
    request_time    INTEGER,
    data            TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP) 
);

INSERT INTO site (id, nome, url, habilitado) VALUES (1, 'Univates', 'http://univates.br/', 1);
INSERT INTO site (id, nome, url, habilitado) VALUES (2, 'Google.com', 'http://google.com/', 1);
INSERT INTO site (id, nome, url, habilitado) VALUES (3, 'Udemy', 'http://udemy.com/', 1);
INSERT INTO site (id, nome, url, habilitado) VALUES (4, 'YouTube', 'http://youtube.com/', 1);


-- INSERT INTO historico_site (site_id, status, data) VALUES (1, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (1, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (1, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (1, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (2, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (2, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (2, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (3, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (3, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (3, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (4, 200, '2017-09-06 01:28:43');
-- INSERT INTO historico_site (site_id, status, data) VALUES (4, 200, '2017-09-06 01:28:43');