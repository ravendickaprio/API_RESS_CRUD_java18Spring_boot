-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-09-2022 a las 00:03:22
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

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
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `Name` varchar(150) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Address` varchar(250) DEFAULT 'Calle sin Numero',
  `Phone` varchar(12) DEFAULT 'S/N'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `Name`, `Email`, `Address`, `Phone`) VALUES
(1, 'Gayle Sillick', 'gsillick0@google.nl', '3206 Shelley Park', '254-368-6859'),
(2, 'Matthiew Taw', 'mtaw1@cafepress.com', '13 Riverside Avenue', '878-434-6147'),
(3, 'Hill Newling', 'hnewling2@sfgate.com', '84 Dahle Pass', '624-531-1423'),
(4, 'Harley Jerzykiewicz', 'hjerzykiewicz3@ifeng.com', '09 Leroy Terrace', '279-806-9258'),
(5, 'Clemens Tebbett', 'ctebbett4@amazon.co.jp', '4663 Loomis Drive', '211-648-4786'),
(6, 'Raff Atherton', 'ratherton5@macromedia.com', '1 Canary Way', '138-228-2655'),
(7, 'Robin Listone', 'rlistone6@goo.ne.jp', '9 Hintze Center', '589-785-8748'),
(8, 'Minnnie Tolossi', 'mtolossi7@dedecms.com', '095 Birchwood Place', '895-137-7821'),
(9, 'Roobbie Shireff', 'rshireff8@engadget.com', '763 Merry Place', '312-869-1283'),
(10, 'Rowe Curds', 'rcurds9@amazonaws.com', '910 Gale Court', '714-262-8575'),
(11, 'Mart Aleswell', 'maleswella@state.gov', '92427 Anhalt Pass', '698-906-9153'),
(12, 'Kaylee Sheeres', 'ksheeresb@cam.ac.uk', '886 Cordelia Way', '432-375-8633'),
(13, 'Lloyd Wormleighton', 'lwormleightonc@furl.net', '13 Rigney Hill', '374-782-7631'),
(14, 'Hunt Slesser', 'hslesserd@elpais.com', '750 Little Fleur Avenue', '551-637-5712'),
(15, 'Roxi Piser', 'rpisere@surveymonkey.com', '870 Macpherson Circle', '977-707-5052'),
(16, 'Mimi Sprules', 'msprulesf@google.pl', '475 Butterfield Lane', '845-900-2185'),
(17, 'Amalle Sharpling', 'asharplingg@nih.gov', '924 Donald Pass', '865-774-7215'),
(18, 'Cletis Rude', 'crudeh@php.net', '2 American Parkway', '631-393-9407'),
(19, 'Deanne Bellie', 'dbelliei@aboutads.info', '6 Farmco Plaza', '661-311-5287'),
(34, 'Odon David', 'ravendickaprio@gmail.com', 'asdasdsad', '2227177258');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
