CREATE DATABASE greatnovels;
CREATE USER 'greatnovels' @'localhost' IDENTIFIED BY 'NovelPa$$word';
GRANT ALL ON greatnovels.* TO 'greatnovels' @'localhost';
USE greatnovels;
CREATE TABLE authors (
  id INT auto_increment,
  nameFirst VARCHAR(255) NOT NULL,
  nameLast VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);
CREATE TABLE genres (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (manufacturerId) REFERENCES manufacturers(id)
);
CREATE TABLE novels (
  id INT auto_increment,
  title VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (manufacturerId) REFERENCES manufacturers(id)
);
CREATE TABLE novelsGenres (
  id INT auto_increment,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (novelId) REFERENCES novels(id)
);
INSERT INTO
  greatnovels (name, country)
VALUES
  ("August Storck KG", "DE");
INSERT INTO