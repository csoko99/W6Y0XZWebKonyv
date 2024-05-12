-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Máj 09. 23:15
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `real-madrid`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `squad`
--

CREATE TABLE `squad` (
  `id` int(11) NOT NULL,
  `mez_szam` int(11) NOT NULL,
  `nev` varchar(250) NOT NULL,
  `teljes_nev` varchar(250) NOT NULL,
  `pozicio` varchar(250) NOT NULL,
  `erosebb_lab` varchar(250) NOT NULL,
  `szuletett` date NOT NULL,
  `nemzetiseg` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `squad`
--

INSERT INTO `squad` (`id`, `mez_szam`, `nev`, `teljes_nev`, `pozicio`, `erosebb_lab`, `szuletett`, `nemzetiseg`) VALUES
(1, 1, 'Courtois', 'Thibaut Courtois', 'Kapus', 'Jobb', '1992-05-11', 'Belga'),
(2, 13, 'Lunin', 'Andriy Lunin', 'Kapus', 'Jobb', '1999-02-11', 'Ukrán'),
(3, 25, 'Kepa', 'Kepa Arrizabalaga', 'Kapus', 'Bal', '1994-10-03', 'Spanyol'),
(4, 2, 'Carvajal', 'Daniel Carvajal Ramos', 'Védő', 'Jobb', '1992-01-11', 'Spanyol'),
(5, 3, 'Militao', 'Éder Gabriel Militão', 'Védő', 'Bal', '1998-01-18', 'Brazil'),
(6, 4, 'Alaba', 'David Alaba', 'Védő', 'Bal', '1992-06-24', 'Osztrák'),
(7, 6, 'Nacho', 'José I. Fernández Iglesias', 'Védő', 'Jobb', '1990-01-18', 'Spanyol'),
(8, 17, 'Lucas', 'Lucas Vázquez Iglesias', 'Védő', 'Jobb', '1991-07-01', 'Spanyol'),
(9, 20, 'Garcia', 'Francisco José García Torres', 'Védő', 'Jobb', '1999-08-14', 'Spanyol'),
(10, 22, 'Rudiger', 'Antonio Rüdiger', 'Védő', 'Bal', '1993-03-03', 'Német'),
(11, 23, 'Mendy', 'Ferland Mendy', 'Védő', 'Bal', '1995-06-08', 'Francia'),
(12, 5, 'Bellingham', 'Jude Bellingham', 'Középpályás', 'Jobb', '2003-06-29', 'Angol'),
(13, 8, 'Kroos', 'Toni Kroos', 'Középpályás', 'Bal', '1990-01-04', 'Német'),
(14, 10, 'Modric', 'Luka Modric', 'Középpályás', 'Bal', '1985-09-09', 'Horváth'),
(15, 12, 'Camavinga', 'Eduardo Camavinga', 'Középpályás', 'Bal', '2002-11-10', 'Francia'),
(16, 18, 'Tchouameni', 'Aurélien Tchouaméni', 'Középpályás', 'Jobb', '2000-01-27', 'Francia'),
(17, 19, 'Ceballos', 'Daniel Ceballos Fernández', 'Középpályás', 'Jobb', '1996-08-07', 'Spanyol'),
(18, 15, 'Valverde', 'Federico Santiago Valverde Dipetta', 'Középpályás', 'Jobb', '1998-07-22', 'Uruguay'),
(19, 24, 'Guler', 'Arda Güler', 'Középpályás', 'Jobb', '2005-02-25', 'Török'),
(20, 7, 'Vini', 'Vinicius Paixao de Oliveira Junior', 'Csatár', 'Bal', '2000-07-12', 'Brazil'),
(21, 11, 'Rodrygo', 'Rodrygo Goes', 'Csatár', 'Jobb', '2001-01-09', 'Brazil'),
(22, 14, 'Joselu', 'Joselu Mato', 'Csatár', 'Jobb', '1990-03-27', 'Spanyol'),
(23, 21, 'Brahim', 'Brahim Díaz', 'Csatár', 'Jobb', '1999-08-03', 'Spanyol'),
(24, 0, 'Ancelotti', 'Carlo Ancelotti', 'Edző', '', '1959-06-10', 'Olasz');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `squad`
--
ALTER TABLE `squad`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `squad`
--
ALTER TABLE `squad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
