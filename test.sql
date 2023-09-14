-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 14-09-2023 a las 04:30:17
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multiplier`
--

CREATE TABLE `multiplier` (
  `id` int(11) NOT NULL,
  `color` varchar(20) NOT NULL,
  `zeros` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `multiplier`
--

INSERT INTO `multiplier` (`id`, `color`, `zeros`) VALUES
(1, 'Black', 0),
(2, 'brown', 1),
(3, 'Red', 2),
(4, 'Orange', 3),
(5, 'Yellow', 4),
(6, 'Green', 6),
(7, 'Blue', 6),
(8, 'Purple', 7),
(9, 'Grey', 8),
(10, 'White', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tolerance`
--

CREATE TABLE `tolerance` (
  `id` int(11) NOT NULL,
  `color` varchar(20) NOT NULL,
  `percentage` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tolerance`
--

INSERT INTO `tolerance` (`id`, `color`, `percentage`) VALUES
(1, 'purple', 0.1),
(2, 'Green', 0.5),
(3, 'Brown', 1),
(4, 'Gold', 5),
(5, 'Silver', 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `multiplier`
--
ALTER TABLE `multiplier`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tolerance`
--
ALTER TABLE `tolerance`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `multiplier`
--
ALTER TABLE `multiplier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tolerance`
--
ALTER TABLE `tolerance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
