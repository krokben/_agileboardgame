-- Adminer 4.2.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `agileboardgame`;
CREATE DATABASE `agileboardgame` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `agileboardgame`;

DROP TABLE IF EXISTS `cards`;
CREATE TABLE `cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `index` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8_bin NOT NULL,
  `title` varchar(20) COLLATE utf8_bin NOT NULL,
  `price` int(11) NOT NULL,
  `analysis` int(11) NOT NULL,
  `development` int(11) NOT NULL,
  `test` int(11) NOT NULL,
  `hidden` int(1) NOT NULL,
  `location` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `cards` (`id`, `index`, `type`, `title`, `price`, `analysis`, `development`, `test`, `hidden`, `location`) VALUES
(1,	1,	'userstory',	'us1',	100,	4,	7,	6,	0,	'cardpool'),
(2,	2,	'userstory',	'us2',	200,	3,	4,	7,	1,	'cardpool'),
(3,	3,	'userstory',	'us3',	150,	4,	8,	4,	1,	'cardpool'),
(4,	4,	'userstory',	'us4',	300,	3,	8,	6,	1,	'cardpool'),
(5,	5,	'userstory',	'us5',	150,	6,	7,	5,	1,	'cardpool'),
(6,	6,	'userstory',	'us6',	50,	4,	8,	8,	1,	'cardpool'),
(7,	7,	'userstory',	'us7',	350,	5,	8,	6,	1,	'cardpool'),
(8,	8,	'userstory',	'us8',	250,	1,	6,	3,	1,	'cardpool'),
(9,	9,	'userstory',	'us9',	4,	8,	6,	6,	1,	'cardpool'),
(10,	10,	'userstory',	'us10',	200,	3,	8,	4,	1,	'cardpool'),
(11,	11,	'userstory',	'us11',	100,	2,	8,	4,	1,	'cardpool'),
(12,	12,	'userstory',	'us12',	150,	5,	3,	3,	1,	'cardpool'),
(13,	13,	'userstory',	'us13',	200,	7,	8,	5,	1,	'cardpool'),
(14,	14,	'userstory',	'us14',	300,	3,	7,	5,	1,	'cardpool'),
(15,	15,	'userstory',	'us15',	50,	5,	3,	2,	1,	'cardpool'),
(16,	16,	'userstory',	'us16',	150,	3,	6,	6,	1,	'cardpool'),
(17,	17,	'userstory',	'us17',	100,	8,	8,	3,	1,	'cardpool'),
(18,	18,	'userstory',	'us18',	250,	4,	8,	5,	1,	'cardpool'),
(19,	19,	'userstory',	'us19',	350,	3,	8,	6,	1,	'cardpool'),
(20,	20,	'userstory',	'us20',	250,	4,	8,	3,	1,	'cardpool'),
(21,	21,	'userstory',	'us21',	150,	7,	6,	5,	1,	'cardpool'),
(22,	22,	'userstory',	'us22',	200,	6,	3,	5,	1,	'cardpool'),
(23,	23,	'userstory',	'us23',	100,	3,	8,	4,	1,	'cardpool'),
(24,	24,	'userstory',	'us24',	50,	2,	6,	5,	1,	'cardpool'),
(25,	25,	'userstory',	'us25',	300,	4,	8,	7,	1,	'cardpool'),
(26,	26,	'userstory',	'us26',	250,	3,	6,	3,	1,	'cardpool'),
(27,	27,	'userstory',	'us27',	100,	2,	4,	8,	1,	'cardpool'),
(28,	28,	'userstory',	'us28',	50,	3,	6,	4,	1,	'cardpool'),
(29,	29,	'userstory',	'us29',	150,	6,	5,	2,	1,	'cardpool'),
(30,	30,	'userstory',	'us30',	4,	4,	8,	5,	1,	'cardpool'),
(31,	31,	'userstory',	'us31',	250,	5,	3,	4,	1,	'cardpool'),
(32,	32,	'userstory',	'us32',	150,	8,	2,	9,	1,	'cardpool'),
(33,	33,	'userstory',	'us33',	200,	4,	8,	5,	1,	'cardpool'),
(34,	34,	'userstory',	'us34',	150,	4,	6,	3,	1,	'cardpool'),
(35,	35,	'userstory',	'us35',	50,	6,	8,	8,	1,	'cardpool'),
(36,	36,	'userstory',	'us36',	350,	1,	8,	5,	1,	'cardpool'),
(37,	37,	'userstory',	'us37',	100,	8,	6,	4,	1,	'cardpool'),
(38,	38,	'userstory',	'us38',	50,	2,	6,	5,	1,	'cardpool'),
(39,	39,	'userstory',	'us39',	50,	2,	6,	5,	1,	'cardpool'),
(40,	40,	'userstory',	'us40',	200,	3,	8,	4,	1,	'cardpool'),
(41,	41,	'userstory',	'us41',	100,	3,	8,	5,	1,	'cardpool'),
(42,	42,	'userstory',	'us42',	50,	6,	8,	5,	1,	'cardpool'),
(43,	43,	'userstory',	'us43',	250,	5,	8,	4,	1,	'cardpool'),
(44,	44,	'userstory',	'us44',	150,	2,	6,	5,	1,	'cardpool'),
(45,	45,	'userstory',	'us45',	300,	4,	8,	3,	1,	'cardpool'),
(46,	46,	'userstory',	'us46',	100,	3,	6,	8,	1,	'cardpool'),
(47,	47,	'userstory',	'us47',	100,	2,	7,	3,	1,	'cardpool'),
(48,	48,	'userstory',	'us48',	50,	3,	6,	3,	1,	'cardpool'),
(49,	49,	'userstory',	'us49',	150,	5,	3,	6,	1,	'cardpool'),
(50,	50,	'userstory',	'us50',	50,	6,	4,	2,	1,	'cardpool'),
(51,	51,	'userstory',	'us51',	200,	3,	7,	3,	1,	'cardpool'),
(52,	52,	'userstory',	'us52',	150,	6,	8,	4,	1,	'cardpool'),
(53,	53,	'userstory',	'us53',	100,	3,	5,	5,	1,	'cardpool'),
(54,	54,	'userstory',	'us54',	50,	5,	8,	4,	1,	'cardpool'),
(55,	55,	'userstory',	'us55',	150,	2,	4,	3,	1,	'cardpool'),
(56,	56,	'userstory',	'us56',	200,	4,	8,	4,	1,	'cardpool'),
(57,	57,	'userstory',	'us57',	150,	2,	8,	3,	1,	'cardpool'),
(58,	58,	'userstory',	'us58',	50,	5,	8,	6,	1,	'cardpool'),
(59,	59,	'userstory',	'us59',	150,	7,	6,	3,	1,	'cardpool'),
(60,	60,	'userstory',	'us60',	250,	5,	7,	6,	1,	'cardpool'),
(61,	1,	'defect',	'd1',	0,	1,	6,	4,	0,	'cardpool'),
(62,	2,	'defect',	'd2',	0,	3,	4,	7,	1,	'cardpool'),
(63,	3,	'defect',	'd3',	0,	2,	7,	5,	1,	'cardpool'),
(64,	4,	'defect',	'd4',	0,	5,	8,	6,	1,	'cardpool'),
(65,	5,	'defect',	'd5',	0,	7,	5,	3,	1,	'cardpool'),
(66,	6,	'defect',	'd6',	0,	5,	7,	3,	1,	'cardpool'),
(67,	7,	'defect',	'd7',	0,	1,	6,	3,	1,	'cardpool'),
(68,	1,	'maintenance',	'm1',	0,	4,	7,	4,	0,	'cardpool'),
(69,	2,	'maintenance',	'm2',	0,	2,	5,	3,	1,	'cardpool'),
(70,	3,	'maintenance',	'm3',	0,	3,	8,	7,	1,	'cardpool'),
(71,	4,	'maintenance',	'm4',	0,	2,	5,	4,	1,	'cardpool'),
(72,	5,	'maintenance',	'm5',	0,	5,	7,	3,	1,	'cardpool');

DROP TABLE IF EXISTS `default_cards`;
CREATE TABLE `default_cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `index` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8_bin NOT NULL,
  `title` varchar(20) COLLATE utf8_bin NOT NULL,
  `price` int(11) NOT NULL,
  `analysis` int(11) NOT NULL,
  `development` int(11) NOT NULL,
  `test` int(11) NOT NULL,
  `hidden` int(1) NOT NULL,
  `location` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `default_cards` (`id`, `index`, `type`, `title`, `price`, `analysis`, `development`, `test`, `hidden`, `location`) VALUES
(1,	1,	'userstory',	'us1',	100,	4,	7,	6,	0,	'cardpool'),
(2,	2,	'userstory',	'us2',	200,	3,	4,	7,	1,	'cardpool'),
(3,	3,	'userstory',	'us3',	150,	4,	8,	4,	1,	'cardpool'),
(4,	4,	'userstory',	'us4',	300,	3,	8,	6,	1,	'cardpool'),
(5,	5,	'userstory',	'us5',	150,	6,	7,	5,	1,	'cardpool'),
(6,	6,	'userstory',	'us6',	50,	4,	8,	8,	1,	'cardpool'),
(7,	7,	'userstory',	'us7',	350,	5,	8,	6,	1,	'cardpool'),
(8,	8,	'userstory',	'us8',	250,	1,	6,	3,	1,	'cardpool'),
(9,	9,	'userstory',	'us9',	4,	8,	6,	6,	1,	'cardpool'),
(10,	10,	'userstory',	'us10',	200,	3,	8,	4,	1,	'cardpool'),
(11,	11,	'userstory',	'us11',	100,	2,	8,	4,	1,	'cardpool'),
(12,	12,	'userstory',	'us12',	150,	5,	3,	3,	1,	'cardpool'),
(13,	13,	'userstory',	'us13',	200,	7,	8,	5,	1,	'cardpool'),
(14,	14,	'userstory',	'us14',	300,	3,	7,	5,	1,	'cardpool'),
(15,	15,	'userstory',	'us15',	50,	5,	3,	2,	1,	'cardpool'),
(16,	16,	'userstory',	'us16',	150,	3,	6,	6,	1,	'cardpool'),
(17,	17,	'userstory',	'us17',	100,	8,	8,	3,	1,	'cardpool'),
(18,	18,	'userstory',	'us18',	250,	4,	8,	5,	1,	'cardpool'),
(19,	19,	'userstory',	'us19',	350,	3,	8,	6,	1,	'cardpool'),
(20,	20,	'userstory',	'us20',	250,	4,	8,	3,	1,	'cardpool'),
(21,	21,	'userstory',	'us21',	150,	7,	6,	5,	1,	'cardpool'),
(22,	22,	'userstory',	'us22',	200,	6,	3,	5,	1,	'cardpool'),
(23,	23,	'userstory',	'us23',	100,	3,	8,	4,	1,	'cardpool'),
(24,	24,	'userstory',	'us24',	50,	2,	6,	5,	1,	'cardpool'),
(25,	25,	'userstory',	'us25',	300,	4,	8,	7,	1,	'cardpool'),
(26,	26,	'userstory',	'us26',	250,	3,	6,	3,	1,	'cardpool'),
(27,	27,	'userstory',	'us27',	100,	2,	4,	8,	1,	'cardpool'),
(28,	28,	'userstory',	'us28',	50,	3,	6,	4,	1,	'cardpool'),
(29,	29,	'userstory',	'us29',	150,	6,	5,	2,	1,	'cardpool'),
(30,	30,	'userstory',	'us30',	4,	4,	8,	5,	1,	'cardpool'),
(31,	31,	'userstory',	'us31',	250,	5,	3,	4,	1,	'cardpool'),
(32,	32,	'userstory',	'us32',	150,	8,	2,	9,	1,	'cardpool'),
(33,	33,	'userstory',	'us33',	200,	4,	8,	5,	1,	'cardpool'),
(34,	34,	'userstory',	'us34',	150,	4,	6,	3,	1,	'cardpool'),
(35,	35,	'userstory',	'us35',	50,	6,	8,	8,	1,	'cardpool'),
(36,	36,	'userstory',	'us36',	350,	1,	8,	5,	1,	'cardpool'),
(37,	37,	'userstory',	'us37',	100,	8,	6,	4,	1,	'cardpool'),
(38,	38,	'userstory',	'us38',	50,	2,	6,	5,	1,	'cardpool'),
(39,	39,	'userstory',	'us39',	50,	2,	6,	5,	1,	'cardpool'),
(40,	40,	'userstory',	'us40',	200,	3,	8,	4,	1,	'cardpool'),
(41,	41,	'userstory',	'us41',	100,	3,	8,	5,	1,	'cardpool'),
(42,	42,	'userstory',	'us42',	50,	6,	8,	5,	1,	'cardpool'),
(43,	43,	'userstory',	'us43',	250,	5,	8,	4,	1,	'cardpool'),
(44,	44,	'userstory',	'us44',	150,	2,	6,	5,	1,	'cardpool'),
(45,	45,	'userstory',	'us45',	300,	4,	8,	3,	1,	'cardpool'),
(46,	46,	'userstory',	'us46',	100,	3,	6,	8,	1,	'cardpool'),
(47,	47,	'userstory',	'us47',	100,	2,	7,	3,	1,	'cardpool'),
(48,	48,	'userstory',	'us48',	50,	3,	6,	3,	1,	'cardpool'),
(49,	49,	'userstory',	'us49',	150,	5,	3,	6,	1,	'cardpool'),
(50,	50,	'userstory',	'us50',	50,	6,	4,	2,	1,	'cardpool'),
(51,	51,	'userstory',	'us51',	200,	3,	7,	3,	1,	'cardpool'),
(52,	52,	'userstory',	'us52',	150,	6,	8,	4,	1,	'cardpool'),
(53,	53,	'userstory',	'us53',	100,	3,	5,	5,	1,	'cardpool'),
(54,	54,	'userstory',	'us54',	50,	5,	8,	4,	1,	'cardpool'),
(55,	55,	'userstory',	'us55',	150,	2,	4,	3,	1,	'cardpool'),
(56,	56,	'userstory',	'us56',	200,	4,	8,	4,	1,	'cardpool'),
(57,	57,	'userstory',	'us57',	150,	2,	8,	3,	1,	'cardpool'),
(58,	58,	'userstory',	'us58',	50,	5,	8,	6,	1,	'cardpool'),
(59,	59,	'userstory',	'us59',	150,	7,	6,	3,	1,	'cardpool'),
(60,	60,	'userstory',	'us60',	250,	5,	7,	6,	1,	'cardpool'),
(61,	1,	'defect',	'd1',	0,	1,	6,	4,	0,	'cardpool'),
(62,	2,	'defect',	'd2',	0,	3,	4,	7,	1,	'cardpool'),
(63,	3,	'defect',	'd3',	0,	2,	7,	5,	1,	'cardpool'),
(64,	4,	'defect',	'd4',	0,	5,	8,	6,	1,	'cardpool'),
(65,	5,	'defect',	'd5',	0,	7,	5,	3,	1,	'cardpool'),
(66,	6,	'defect',	'd6',	0,	5,	7,	3,	1,	'cardpool'),
(67,	7,	'defect',	'd7',	0,	1,	6,	3,	1,	'cardpool'),
(68,	1,	'maintenance',	'm1',	0,	4,	7,	4,	0,	'cardpool'),
(69,	2,	'maintenance',	'm2',	0,	2,	5,	3,	1,	'cardpool'),
(70,	3,	'maintenance',	'm3',	0,	3,	8,	7,	1,	'cardpool'),
(71,	4,	'maintenance',	'm4',	0,	2,	5,	4,	1,	'cardpool'),
(72,	5,	'maintenance',	'm5',	0,	5,	7,	3,	1,	'cardpool');

DROP TABLE IF EXISTS `default_workers`;
CREATE TABLE `default_workers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(50) COLLATE utf8_bin NOT NULL,
  `sick` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `default_workers` (`id`, `type`, `sick`) VALUES
(1,	'analyst',	0),
(2,	'developer',	0),
(3,	'developer',	0),
(4,	'developer',	0),
(5,	'developer',	0),
(6,	'tester',	0);

DROP TABLE IF EXISTS `workers`;
CREATE TABLE `workers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(50) COLLATE utf8_bin NOT NULL,
  `sick` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `workers` (`id`, `type`, `sick`) VALUES
(1,	'analyst',	0),
(2,	'developer',	0),
(3,	'developer',	0),
(4,	'developer',	0),
(5,	'developer',	0),
(6,	'tester',	0);

-- 2017-02-03 12:37:59
