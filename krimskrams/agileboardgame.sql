-- Adminer 4.2.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

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
  `location` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `cards` (`id`, `index`, `type`, `title`, `price`, `analysis`, `development`, `test`, `location`) VALUES
(1,	1,	'userstory',	'us1',	100,	4,	7,	6,	'cardpool'),
(2,	2,	'userstory',	'us2',	200,	3,	4,	7,	'none'),
(3,	3,	'userstory',	'us3',	150,	4,	8,	4,	'none'),
(4,	4,	'userstory',	'us4',	300,	3,	8,	6,	'none'),
(5,	5,	'userstory',	'us5',	150,	6,	7,	5,	'none'),
(6,	6,	'userstory',	'us6',	50,	4,	8,	8,	'none'),
(7,	7,	'userstory',	'us7',	350,	5,	8,	6,	'none'),
(8,	8,	'userstory',	'us8',	250,	1,	6,	3,	'none'),
(9,	9,	'userstory',	'us9',	4,	8,	6,	6,	'none'),
(10,	10,	'userstory',	'us10',	200,	3,	8,	4,	'none'),
(11,	11,	'userstory',	'us11',	100,	2,	8,	4,	'none'),
(12,	12,	'userstory',	'us12',	150,	5,	3,	3,	'none'),
(13,	13,	'userstory',	'us13',	200,	7,	8,	5,	'none'),
(14,	14,	'userstory',	'us14',	300,	3,	7,	5,	'none'),
(15,	15,	'userstory',	'us15',	50,	5,	3,	2,	'none'),
(16,	16,	'userstory',	'us16',	150,	3,	6,	6,	'none'),
(17,	17,	'userstory',	'us17',	100,	8,	8,	3,	'none'),
(18,	18,	'userstory',	'us18',	250,	4,	8,	5,	'none'),
(19,	19,	'userstory',	'us19',	350,	3,	8,	6,	'none'),
(20,	20,	'userstory',	'us20',	250,	4,	8,	3,	'none'),
(21,	21,	'userstory',	'us21',	150,	7,	6,	5,	'none'),
(22,	22,	'userstory',	'us22',	200,	6,	3,	5,	'none'),
(23,	23,	'userstory',	'us23',	100,	3,	8,	4,	'none'),
(24,	24,	'userstory',	'us24',	50,	2,	6,	5,	'none'),
(25,	25,	'userstory',	'us25',	300,	4,	8,	7,	'none'),
(26,	26,	'userstory',	'us26',	250,	3,	6,	3,	'none'),
(27,	27,	'userstory',	'us27',	100,	2,	4,	8,	'none'),
(28,	28,	'userstory',	'us28',	50,	3,	6,	4,	'none'),
(29,	29,	'userstory',	'us29',	150,	6,	5,	2,	'none'),
(30,	30,	'userstory',	'us30',	4,	4,	8,	5,	'none'),
(31,	31,	'userstory',	'us31',	250,	5,	3,	4,	'none'),
(32,	32,	'userstory',	'us32',	150,	8,	2,	9,	'none'),
(33,	33,	'userstory',	'us33',	200,	4,	8,	5,	'none'),
(34,	34,	'userstory',	'us34',	150,	4,	6,	3,	'none'),
(35,	35,	'userstory',	'us35',	50,	6,	8,	8,	'none'),
(36,	36,	'userstory',	'us36',	350,	1,	8,	5,	'none'),
(37,	37,	'userstory',	'us37',	100,	8,	6,	4,	'none'),
(38,	38,	'userstory',	'us38',	50,	2,	6,	5,	'none'),
(39,	39,	'userstory',	'us39',	50,	2,	6,	5,	'none'),
(40,	40,	'userstory',	'us40',	200,	3,	8,	4,	'none'),
(41,	41,	'userstory',	'us41',	100,	3,	8,	5,	'none'),
(42,	42,	'userstory',	'us42',	50,	6,	8,	5,	'none'),
(43,	43,	'userstory',	'us43',	250,	5,	8,	4,	'none'),
(44,	44,	'userstory',	'us44',	150,	2,	6,	5,	'none'),
(45,	45,	'userstory',	'us45',	300,	4,	8,	3,	'none'),
(46,	46,	'userstory',	'us46',	100,	3,	6,	8,	'none'),
(47,	47,	'userstory',	'us47',	100,	2,	7,	3,	'none'),
(48,	48,	'userstory',	'us48',	50,	3,	6,	3,	'none'),
(49,	49,	'userstory',	'us49',	150,	5,	3,	6,	'none'),
(50,	50,	'userstory',	'us50',	50,	6,	4,	2,	'none'),
(51,	51,	'userstory',	'us51',	200,	3,	7,	3,	'none'),
(52,	52,	'userstory',	'us52',	150,	6,	8,	4,	'none'),
(53,	53,	'userstory',	'us53',	100,	3,	5,	5,	'none'),
(54,	54,	'userstory',	'us54',	50,	5,	8,	4,	'none'),
(55,	55,	'userstory',	'us55',	150,	2,	4,	3,	'none'),
(56,	56,	'userstory',	'us56',	200,	4,	8,	4,	'none'),
(57,	57,	'userstory',	'us57',	150,	2,	8,	3,	'none'),
(58,	58,	'userstory',	'us58',	50,	5,	8,	6,	'none'),
(59,	59,	'userstory',	'us59',	150,	7,	6,	3,	'none'),
(60,	60,	'userstory',	'us60',	250,	5,	7,	6,	'none'),
(61,	1,	'defect',	'd1',	0,	1,	6,	4,	'cardpool'),
(62,	2,	'defect',	'd2',	0,	3,	4,	7,	'none'),
(63,	3,	'defect',	'd3',	0,	2,	7,	5,	'none'),
(64,	4,	'defect',	'd4',	0,	5,	8,	6,	'none'),
(65,	5,	'defect',	'd5',	0,	7,	5,	3,	'none'),
(66,	6,	'defect',	'd6',	0,	5,	7,	3,	'none'),
(67,	7,	'defect',	'd7',	0,	1,	6,	3,	'none'),
(68,	1,	'maintenance',	'm1',	0,	4,	7,	4,	'cardpool'),
(69,	2,	'maintenance',	'm2',	0,	2,	5,	3,	'none'),
(70,	3,	'maintenance',	'm3',	0,	3,	8,	7,	'none'),
(71,	4,	'maintenance',	'm4',	0,	2,	5,	4,	'none'),
(72,	5,	'maintenance',	'm5',	0,	5,	7,	3,	'none');

DROP TABLE IF EXISTS `days`;
CREATE TABLE `days` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` int(1) unsigned NOT NULL,
  `current` varchar(20) COLLATE utf8_bin NOT NULL,
  `sprint` int(1) unsigned NOT NULL,
  `actioncard` varchar(20) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `days` (`id`, `title`, `current`, `sprint`, `actioncard`) VALUES
(1,	1,	'yes',	1,	'no'),
(2,	2,	'no',	1,	'no'),
(3,	3,	'no',	1,	'yes'),
(4,	4,	'no',	1,	'no'),
(5,	5,	'no',	1,	'no'),
(6,	1,	'no',	2,	'yes'),
(7,	2,	'no',	2,	'no'),
(8,	3,	'no',	2,	'no'),
(9,	4,	'no',	2,	'no'),
(10,	5,	'no',	2,	'no'),
(11,	1,	'no',	3,	'yes'),
(12,	2,	'no',	3,	'no'),
(13,	3,	'no',	3,	'no'),
(14,	4,	'no',	3,	'no'),
(15,	5,	'no',	3,	'no'),
(16,	1,	'no',	4,	'no'),
(17,	2,	'no',	4,	'no'),
(18,	3,	'no',	4,	'no'),
(19,	4,	'no',	4,	'no'),
(20,	5,	'no',	4,	'no'),
(21,	1,	'no',	5,	'no'),
(22,	2,	'no',	5,	'no'),
(23,	3,	'no',	5,	'no'),
(24,	4,	'no',	5,	'no'),
(25,	5,	'no',	5,	'no'),
(26,	1,	'no',	6,	'no'),
(27,	2,	'no',	6,	'no'),
(28,	3,	'no',	6,	'no'),
(29,	4,	'no',	6,	'no'),
(30,	5,	'no',	6,	'no'),
(31,	1,	'no',	7,	'no'),
(32,	2,	'no',	7,	'no'),
(33,	3,	'no',	7,	'no'),
(34,	4,	'no',	7,	'no'),
(35,	5,	'no',	7,	'no'),
(36,	1,	'no',	8,	'no'),
(37,	2,	'no',	8,	'no'),
(38,	3,	'no',	8,	'no'),
(39,	4,	'no',	8,	'no'),
(40,	5,	'no',	8,	'no');

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
  `location` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `default_cards` (`id`, `index`, `type`, `title`, `price`, `analysis`, `development`, `test`, `location`) VALUES
(1,	1,	'userstory',	'us1',	100,	4,	7,	6,	'cardpool'),
(2,	2,	'userstory',	'us2',	200,	3,	4,	7,	'none'),
(3,	3,	'userstory',	'us3',	150,	4,	8,	4,	'none'),
(4,	4,	'userstory',	'us4',	300,	3,	8,	6,	'none'),
(5,	5,	'userstory',	'us5',	150,	6,	7,	5,	'none'),
(6,	6,	'userstory',	'us6',	50,	4,	8,	8,	'none'),
(7,	7,	'userstory',	'us7',	350,	5,	8,	6,	'none'),
(8,	8,	'userstory',	'us8',	250,	1,	6,	3,	'none'),
(9,	9,	'userstory',	'us9',	4,	8,	6,	6,	'none'),
(10,	10,	'userstory',	'us10',	200,	3,	8,	4,	'none'),
(11,	11,	'userstory',	'us11',	100,	2,	8,	4,	'none'),
(12,	12,	'userstory',	'us12',	150,	5,	3,	3,	'none'),
(13,	13,	'userstory',	'us13',	200,	7,	8,	5,	'none'),
(14,	14,	'userstory',	'us14',	300,	3,	7,	5,	'none'),
(15,	15,	'userstory',	'us15',	50,	5,	3,	2,	'none'),
(16,	16,	'userstory',	'us16',	150,	3,	6,	6,	'none'),
(17,	17,	'userstory',	'us17',	100,	8,	8,	3,	'none'),
(18,	18,	'userstory',	'us18',	250,	4,	8,	5,	'none'),
(19,	19,	'userstory',	'us19',	350,	3,	8,	6,	'none'),
(20,	20,	'userstory',	'us20',	250,	4,	8,	3,	'none'),
(21,	21,	'userstory',	'us21',	150,	7,	6,	5,	'none'),
(22,	22,	'userstory',	'us22',	200,	6,	3,	5,	'none'),
(23,	23,	'userstory',	'us23',	100,	3,	8,	4,	'none'),
(24,	24,	'userstory',	'us24',	50,	2,	6,	5,	'none'),
(25,	25,	'userstory',	'us25',	300,	4,	8,	7,	'none'),
(26,	26,	'userstory',	'us26',	250,	3,	6,	3,	'none'),
(27,	27,	'userstory',	'us27',	100,	2,	4,	8,	'none'),
(28,	28,	'userstory',	'us28',	50,	3,	6,	4,	'none'),
(29,	29,	'userstory',	'us29',	150,	6,	5,	2,	'none'),
(30,	30,	'userstory',	'us30',	4,	4,	8,	5,	'none'),
(31,	31,	'userstory',	'us31',	250,	5,	3,	4,	'none'),
(32,	32,	'userstory',	'us32',	150,	8,	2,	9,	'none'),
(33,	33,	'userstory',	'us33',	200,	4,	8,	5,	'none'),
(34,	34,	'userstory',	'us34',	150,	4,	6,	3,	'none'),
(35,	35,	'userstory',	'us35',	50,	6,	8,	8,	'none'),
(36,	36,	'userstory',	'us36',	350,	1,	8,	5,	'none'),
(37,	37,	'userstory',	'us37',	100,	8,	6,	4,	'none'),
(38,	38,	'userstory',	'us38',	50,	2,	6,	5,	'none'),
(39,	39,	'userstory',	'us39',	50,	2,	6,	5,	'none'),
(40,	40,	'userstory',	'us40',	200,	3,	8,	4,	'none'),
(41,	41,	'userstory',	'us41',	100,	3,	8,	5,	'none'),
(42,	42,	'userstory',	'us42',	50,	6,	8,	5,	'none'),
(43,	43,	'userstory',	'us43',	250,	5,	8,	4,	'none'),
(44,	44,	'userstory',	'us44',	150,	2,	6,	5,	'none'),
(45,	45,	'userstory',	'us45',	300,	4,	8,	3,	'none'),
(46,	46,	'userstory',	'us46',	100,	3,	6,	8,	'none'),
(47,	47,	'userstory',	'us47',	100,	2,	7,	3,	'none'),
(48,	48,	'userstory',	'us48',	50,	3,	6,	3,	'none'),
(49,	49,	'userstory',	'us49',	150,	5,	3,	6,	'none'),
(50,	50,	'userstory',	'us50',	50,	6,	4,	2,	'none'),
(51,	51,	'userstory',	'us51',	200,	3,	7,	3,	'none'),
(52,	52,	'userstory',	'us52',	150,	6,	8,	4,	'none'),
(53,	53,	'userstory',	'us53',	100,	3,	5,	5,	'none'),
(54,	54,	'userstory',	'us54',	50,	5,	8,	4,	'none'),
(55,	55,	'userstory',	'us55',	150,	2,	4,	3,	'none'),
(56,	56,	'userstory',	'us56',	200,	4,	8,	4,	'none'),
(57,	57,	'userstory',	'us57',	150,	2,	8,	3,	'none'),
(58,	58,	'userstory',	'us58',	50,	5,	8,	6,	'none'),
(59,	59,	'userstory',	'us59',	150,	7,	6,	3,	'none'),
(60,	60,	'userstory',	'us60',	250,	5,	7,	6,	'none'),
(61,	1,	'defect',	'd1',	0,	1,	6,	4,	'cardpool'),
(62,	2,	'defect',	'd2',	0,	3,	4,	7,	'none'),
(63,	3,	'defect',	'd3',	0,	2,	7,	5,	'none'),
(64,	4,	'defect',	'd4',	0,	5,	8,	6,	'none'),
(65,	5,	'defect',	'd5',	0,	7,	5,	3,	'none'),
(66,	6,	'defect',	'd6',	0,	5,	7,	3,	'none'),
(67,	7,	'defect',	'd7',	0,	1,	6,	3,	'none'),
(68,	1,	'maintenance',	'm1',	0,	4,	7,	4,	'cardpool'),
(69,	2,	'maintenance',	'm2',	0,	2,	5,	3,	'none'),
(70,	3,	'maintenance',	'm3',	0,	3,	8,	7,	'none'),
(71,	4,	'maintenance',	'm4',	0,	2,	5,	4,	'none'),
(72,	5,	'maintenance',	'm5',	0,	5,	7,	3,	'none');

DROP TABLE IF EXISTS `default_days`;
CREATE TABLE `default_days` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` int(1) unsigned NOT NULL,
  `current` varchar(20) COLLATE utf8_bin NOT NULL,
  `sprint` int(1) unsigned NOT NULL,
  `actioncard` varchar(20) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `default_days` (`id`, `title`, `current`, `sprint`, `actioncard`) VALUES
(1,	1,	'yes',	1,	'no'),
(2,	2,	'no',	1,	'no'),
(3,	3,	'no',	1,	'yes'),
(4,	4,	'no',	1,	'no'),
(5,	5,	'no',	1,	'no'),
(6,	1,	'no',	2,	'yes'),
(7,	2,	'no',	2,	'no'),
(8,	3,	'no',	2,	'no'),
(9,	4,	'no',	2,	'no'),
(10,	5,	'no',	2,	'no'),
(11,	1,	'no',	3,	'yes'),
(12,	2,	'no',	3,	'no'),
(13,	3,	'no',	3,	'no'),
(14,	4,	'no',	3,	'no'),
(15,	5,	'no',	3,	'no'),
(16,	1,	'no',	4,	'no'),
(17,	2,	'no',	4,	'no'),
(18,	3,	'no',	4,	'no'),
(19,	4,	'no',	4,	'no'),
(20,	5,	'no',	4,	'no'),
(21,	1,	'no',	5,	'no'),
(22,	2,	'no',	5,	'no'),
(23,	3,	'no',	5,	'no'),
(24,	4,	'no',	5,	'no'),
(25,	5,	'no',	5,	'no'),
(26,	1,	'no',	6,	'no'),
(27,	2,	'no',	6,	'no'),
(28,	3,	'no',	6,	'no'),
(29,	4,	'no',	6,	'no'),
(30,	5,	'no',	6,	'no'),
(31,	1,	'no',	7,	'no'),
(32,	2,	'no',	7,	'no'),
(33,	3,	'no',	7,	'no'),
(34,	4,	'no',	7,	'no'),
(35,	5,	'no',	7,	'no'),
(36,	1,	'no',	8,	'no'),
(37,	2,	'no',	8,	'no'),
(38,	3,	'no',	8,	'no'),
(39,	4,	'no',	8,	'no'),
(40,	5,	'no',	8,	'no');

DROP TABLE IF EXISTS `default_retrospectives`;
CREATE TABLE `default_retrospectives` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


DROP TABLE IF EXISTS `default_workers`;
CREATE TABLE `default_workers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `index` varchar(50) COLLATE utf8_bin NOT NULL,
  `type` varchar(50) COLLATE utf8_bin NOT NULL,
  `location` varchar(50) COLLATE utf8_bin NOT NULL,
  `sick` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `default_workers` (`id`, `index`, `type`, `location`, `sick`) VALUES
(1,	'worker1',	'analyst',	'header',	0),
(2,	'worker2',	'developer',	'header',	0),
(3,	'worker3',	'developer',	'header',	0),
(4,	'worker4',	'developer',	'header',	0),
(5,	'worker5',	'developer',	'header',	0),
(6,	'worker6',	'tester',	'header',	0);

DROP TABLE IF EXISTS `retrospectives`;
CREATE TABLE `retrospectives` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


DROP TABLE IF EXISTS `workers`;
CREATE TABLE `workers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `index` varchar(50) COLLATE utf8_bin NOT NULL,
  `type` varchar(50) COLLATE utf8_bin NOT NULL,
  `location` varchar(50) COLLATE utf8_bin NOT NULL,
  `sick` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `workers` (`id`, `index`, `type`, `location`, `sick`) VALUES
(1,	'worker1',	'analyst',	'header',	0),
(2,	'worker2',	'developer',	'header',	0),
(3,	'worker3',	'developer',	'header',	0),
(4,	'worker4',	'developer',	'header',	0),
(5,	'worker5',	'developer',	'header',	0),
(6,	'worker6',	'tester',	'header',	0);

-- 2017-03-02 14:55:48
