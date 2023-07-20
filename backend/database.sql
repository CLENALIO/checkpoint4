DROP TABLE IF EXISTS user;

DROP TABLE IF EXISTS reservation;

DROP TABLE IF EXISTS prestation;

DROP DATABASE IF EXISTS amelie;

CREATE DATABASE amelie;

USE amelie;

CREATE TABLE
    user(
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) UNIQUE NOT NULL,
        PRIMARY KEY (id)
    );

CREATE TABLE
    prestation(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) UNIQUE NOT NULL,
        PRIMARY KEY (id)
    );

CREATE TABLE
    reservation(
        date DATE UNIQUE NOT NULL,
        type INT NOT NULL,
        email VARCHAR(100),
        phone VARCHAR(15),
        customername VARCHAR(100),
        PRIMARY KEY (date),
        FOREIGN KEY (type) REFERENCES prestation(id)
    );

INSERT INTO prestation (name)
VALUES ("Tri et conseils"), (
        "Optimisation des espaces et rangement"
    ), ("Congés");

INSERT INTO
    reservation (date, type)
VALUES ("2023-07-22", 3), ("2023-07-23", 3), ("2023-07-29", 3), ("2023-07-30", 3), ("2023-08-05", 3), ("2023-08-06", 3), ("2023-08-12", 3), ("2023-08-13", 3), ("2023-08-19", 3), ("2023-08-20", 3), ("2023-08-26", 3), ("2023-08-27", 3);