-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 14-11-2024 a las 00:55:00
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

--
-- Base de datos: `ideas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aprendices`
--

CREATE TABLE `aprendices` (
  `id` int NOT NULL,
  `identificacion` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `ficha` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `aprendices`
--

INSERT INTO `aprendices` (`id`, `identificacion`, `nombre`, `apellido`, `ficha`) VALUES
(2, 1006100292, 'NATALIA', 'ARENAS ROMERO', 396172),
(3, 1117534677, 'LINA VANESSA', 'ARTUNDUAGA MONTERO', 396172),
(4, 1006009698, 'JEAN PAUL', 'ATEHORTUA MONTOYA', 396172),
(5, 1192918361, 'LOREN JHOANA', 'BANGUERA CARDENAS', 396172),
(6, 1007711192, 'JOHAN DAVID', 'BEDOYA MAHECHA', 396172),
(7, 1007103691, 'LAURA DANIELA', 'CAICEDO ZAPATA', 396172),
(8, 1006036900, 'DIEGO FERNANDO', 'CARMONA HENAO', 396172),
(9, 1144187429, 'DANIELA', 'CORTES MACHADO', 396172),
(10, 1109540784, 'XIOMARA', 'CORTES MARTINEZ', 396172),
(11, 1144150983, 'XIOMARA', 'GALVIS SEGURO', 396172),
(12, 1006183245, 'LUISA FERNANDA', 'GOMEZ GIRALDO', 396172),
(13, 1005861949, 'MAIRA ALEJANDRA', 'HENAO SANCHEZ', 396172),
(14, 1109662476, 'JULIANA', 'HERNANDEZ JIMENEZ', 396172),
(15, 1143970965, 'ANGELICA JOANA', 'LOAIZA URBANO', 396172),
(16, 1144204984, 'CEIR ENRIQUE', 'LOZANO ABELLA', 396172),
(17, 1232593093, 'ANDREINA ISABEL', 'MARQUEZ CHACON', 396172),
(18, 1118310539, 'DALLY DANIELA', 'MEJIA CORTES', 396172),
(19, 1192924438, 'ISABELLA', 'MOLINA MURILLO', 396172),
(20, 1130681824, 'JESSICA', 'MONTAÑO ARBOLEDA', 396172),
(21, 1193224895, 'DANIELA', 'NIETO GONZALEZ', 396172),
(22, 1002792976, 'KAROL JULIETH', 'ÑAÑEZ LOPEZ', 396172),
(23, 29363023, 'JACQUELINE', 'OLAYA OLAYA', 396172),
(24, 1032419417, 'RONAL FERNANDO', 'QUICENO DIAZ', 396172),
(25, 1003852136, 'YENIFER', 'RIOS CASTIBLANCO', 396172),
(26, 1005935633, 'KAREN JULIANA', 'SOTO DIAZ', 396172),
(27, 1144107820, 'LINA MARCELA', 'SOTO MORALES', 396172),
(28, 1111662591, 'LUZ CAMILA', 'SOTO RAMOS', 396172),
(29, 1006106764, 'JUAN CAMILO', 'VIVEROS PAZ', 396172),
(30, 1110284430, 'DIANA CAROLINA', 'YEPES GONZALIAS', 396172);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `integrantes` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id`, `nombre`, `integrantes`) VALUES
(6, 'ssgd', 'NATALIA ARENAS ROMERO-JEAN PAUL ATEHORTUA MONTOYA-'),
(7, 'ssgdgsdgsd', 'LAURA VALENTINA ANGULO MERA-LINA VANESSA ARTUNDUAGA MONTERO-');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia`
--

CREATE TABLE `experiencia` (
  `id` int NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `puntos` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `experiencia`
--

INSERT INTO `experiencia` (`id`, `descripcion`, `puntos`) VALUES
(1, 'NO SE TIENE NINGÃÂN CONOCIMIENTO SOBRE LOS ASPECTOS TÃÂCNICOS CLAVES NI SE CUENTA CON EXPERIENCIA RELACIONADA', 0),
(2, 'SE CONOCEN A NIVEL BAJO LOS PROCESOS TÃÂCNICOS DEL NEGOCIO', 5),
(3, 'SE CONOCEN EN UN NIVEL MEDIO LOS PROCESOS TÃÂCNICOS DEL NEGOCIO Y SE CUENTA CON ALGUNA EXPERIENCIA RELACIONADA CON LA IDEA DE NEGOCIO', 10),
(4, 'SE CONOCEN PERFECTAMENTE LOS PROCESOS TÃÂCNICOS DEL NEGOCIO Y SE TIENE EXPERIENCIA EN LA IDEA DE NEGOCIO', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ideas`
--

CREATE TABLE `ideas` (
  `id` int NOT NULL,
  `grupo` int NOT NULL,
  `idea` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `sector` int NOT NULL,
  `ptos` float NOT NULL,
  `innovacion` int NOT NULL,
  `ptosfactor` float NOT NULL,
  `mercado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `conocimiento` int NOT NULL,
  `ptoscon` float NOT NULL,
  `ptostotal` float NOT NULL,
  `fuentes` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ideas`
--

INSERT INTO `ideas` (`id`, `grupo`, `idea`, `sector`, `ptos`, `innovacion`, `ptosfactor`, `mercado`, `conocimiento`, `ptoscon`, `ptostotal`, `fuentes`) VALUES
(1, 6, 'asfasf', 11, 15, 2, 5, 'asfasfas', 1, 0, 20, 'B. DESARROLLO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `innovacion`
--

CREATE TABLE `innovacion` (
  `id` int NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `puntaje` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `innovacion`
--

INSERT INTO `innovacion` (`id`, `descripcion`, `puntaje`) VALUES
(1, 'NO HAY NINGÃÂN ELEMENTO DE INNOVACIÃÂN EN LA IDEA.', 0),
(2, 'EXISTE UN BAJO FACTOR DE INNOVACIÃÂN EN EL PRODUCTO O SERVICIO Y ES FÃÂCIL DE IMITAR.', 5),
(3, 'EXISTE ALGÃÂN FACTOR DE INNOVACIÃÂN EN EL PRODUCTO, SERVICIO, PROCESOS, MARKETING O CANALES DE DISTRIBUCIÃÂN, CON UNAS BARRERAS ACEPTABLES DE IMITACIÃÂN A LA INNOVACIÃÂN.', 10),
(4, 'EXISTE FACTOR MUY ALTO DE INNOVACIÃÂN EN EL PRODUCTO, SERVICIO, PROCESOS, MARKETING O CANALES DE DISTRIBUCIÃÂN, CON UNAS BARRERAS ALTAS DE IMITACIÃÂN A LA INNOVACIÃÂN. LA INNOVACIÃÂN ES PROTEGIBLE CON SECRETOS INDUSTRIALES O PATENTES!', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sector_economico`
--

CREATE TABLE `sector_economico` (
  `id` int NOT NULL,
  `descripcion` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `puntaje` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sector_economico`
--

INSERT INTO `sector_economico` (`id`, `descripcion`, `puntaje`) VALUES
(1, 'ECOTURISMO Y OCIO', 10),
(2, 'CONSTRUCCIÃÂN ECOAMBIENTAL', 10),
(3, 'MANUFACTURA AUTOMATIZADA', 10),
(4, 'MANUFACTURA 3D', 10),
(5, 'ROBÃÂTICA', 15),
(6, 'FIND TECH', 15),
(7, 'EDUCACIÃÂN VIRTUAL', 15),
(8, 'AGROINDUSTRIA SALUDABLE', 15),
(9, 'E-COMMERCE', 15),
(10, 'INTERNET DE LA COSAS', 15),
(11, 'CUIDADO PERSONAL', 15),
(12, 'PRODUCTOS Y SERVICIOS PARA MASCOTAS', 15),
(13, 'APP', 20),
(14, 'IDENTIFICACIÃÂN BIOMÃÂTRICA', 20),
(15, 'LOGÃÂSTICA 4.0', 20),
(16, 'BIG DATA Y ANALÃÂTICA DE DATOS', 20),
(17, 'BLOCKCHAIN', 20),
(18, 'REALIDAD VIRTUAL O AUMENTADA', 20),
(19, 'INTELIGENCIA ARTIFICIAL', 20),
(20, 'OTROS SECTORES', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aprendices`
--
ALTER TABLE `aprendices`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ideas`
--
ALTER TABLE `ideas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `innovacion`
--
ALTER TABLE `innovacion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aprendices`
--
ALTER TABLE `aprendices`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `ideas`
--
ALTER TABLE `ideas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `innovacion`
--
ALTER TABLE `innovacion`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
