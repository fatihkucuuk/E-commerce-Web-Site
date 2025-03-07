-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost
-- Üretim Zamanı: 29 May 2024, 14:12:47
-- Sunucu sürümü: 10.4.28-MariaDB
-- PHP Sürümü: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `fswpproject`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `product_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `comments`
--

INSERT INTO `comments` (`id`, `comment`, `created_at`, `rating`, `username`, `product_id`) VALUES
(9, 'Çok memnun kaldım!!!', '2024-05-29 06:22:14.000000', 4, 'fatihkck', 2),
(10, 'Çok güzel pantolon çok beğendim!!', '2024-05-29 06:46:42.000000', 4, 'neslihanbysl', 2);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `stock` varchar(255) DEFAULT NULL,
  `is_active` enum('ACTIVE','PASSIVE') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `products`
--

INSERT INTO `products` (`id`, `category`, `color`, `gender`, `name`, `price`, `image1`, `image2`, `stock`, `is_active`) VALUES
(1, 't-shirt', 'black', 'male', 'STWD LOGO T-SHIRT', 600, '/public/img/products/product1/1.jpg', '/public/img/products/product1/2.jpg', '10', 'ACTIVE'),
(2, 'pants', 'blue', 'female', 'KARGO PANTOLON', 1000, '\\public\\img\\products\\product2\\1.jpg', '\\public\\img\\products\\product2\\2.jpg', '10', 'ACTIVE'),
(3, 'pants', 'blue', 'male', 'BAGGY JEAN', 1150, '\\public\\img\\products\\product3\\1.jpg', '\\public\\img\\products\\product3\\2.jpg', '15', 'ACTIVE'),
(4, 'jacket', 'blue', 'female', 'BASIC DENIM CEKET', 1150, '\\public\\img\\products\\product4\\1.jpg', '\\public\\img\\products\\product4\\2.jpg', '5', 'ACTIVE'),
(5, 'shirt', 'white', 'male', 'ÇİZGİLİ KISA KOLLU GÖMLEK', 1000, '\\public\\img\\products\\product5\\1.jpg', '\\public\\img\\products\\product5\\2.jpg', '7', 'ACTIVE'),
(6, 'shirt', 'white', 'male', 'DOKULU ÇİZGİLİ KISA KOLLU GÖMLEK', 990, '\\public\\img\\products\\product6\\1.jpg', '\\public\\img\\products\\product6\\2.jpg', '10', 'ACTIVE'),
(7, 'pants', 'black', 'female', 'FERMUARLI STRAIGHT PANTOLON', 990, '\\public\\img\\products\\product7\\1.jpg', '\\public\\img\\products\\product7\\2.jpg', '20', 'ACTIVE'),
(8, 'shirt', 'black', 'male', 'KISA KOLLU DOKULU GÖMLEK', 990, '\\public\\img\\products\\product8\\1.jpg', '\\public\\img\\products\\product8\\2.jpg', '15', 'ACTIVE'),
(9, 'shirt', 'black', 'male', 'KISA KOLLU SCARFACE T-SHIRT', 640, '\\public\\img\\products\\product9\\1.jpg', '\\public\\img\\products\\product9\\2.jpg', '10', 'ACTIVE'),
(10, 'jacket', 'green', 'female', 'OVERSIZE SUNI DERI BIKER CEKET', 1790, '\\public\\img\\products\\product10\\1.jpg', '\\public\\img\\products\\product10\\2.jpg', '3', 'ACTIVE'),
(11, 't-shirt', 'aqua', 'male', 'BLACK LABEL BASKILI KISA KOLLU T-SHIRT', 520, '\\public\\img\\products\\product11\\1.jpg', '\\public\\img\\products\\product11\\2.jpg', '2', 'ACTIVE'),
(12, 'jacket', 'darkblue', 'male', 'PREMIUM DENIM INCE KOVBOY CEKETI', 1390, '\\public\\img\\products\\product12\\1.jpg', '\\public\\img\\products\\product12\\2.jpg', '1', 'ACTIVE'),
(13, 'pants', 'yellow', 'male', 'SKATER PANTOLON', 1390, '\\public\\img\\products\\product13\\1.jpg', '\\public\\img\\products\\product13\\2.jpg', '5', 'ACTIVE'),
(14, 't-shirt', 'white', 'female', 'KISA KOLLU POLIAMID T-SHIRT', 320, '\\public\\img\\products\\product14\\1.jpg', '\\public\\img\\products\\product14\\2.jpg', '4', 'ACTIVE'),
(15, 't-shirt', 'white', 'female', 'KISA KOLLU POLO T-SHIRT', 500, '\\public\\img\\products\\product15\\1.jpg', '\\public\\img\\products\\product15\\2.jpg', '10', 'ACTIVE');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `questions`
--

CREATE TABLE `questions` (
  `id` bigint(20) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `product_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `questions`
--

INSERT INTO `questions` (`id`, `answer`, `created_at`, `question`, `username`, `product_id`) VALUES
(1, 'Merhaba, evet var', '2024-05-29 06:10:10.000000', 'Merhabalar Bu ürünün M bedeni var mı?', 'fatihkck', 2);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('USER','ADMIN') DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`, `username`) VALUES
(1, 'fatihkck828@gmail.com', '$2a$10$Onx9.dW51w.5iO/sS5vF7uV41vsnWB7h2wkOKL15viyoN7wMKThSu', 'USER', 'fatihkck'),
(2, 'fatihkck8280@gmail.com', '$2a$10$ZPscX28.SmsDTxpN6AoNpepZC0qkZKN6g2KkQiFguzqBJM6uX7Fee', 'USER', 'fatihkck1'),
(3, 'neslihanbysl@gmail.com', '$2a$10$PKHkLg0CzKy4rR7sXqBY0eZqAP1bsEXb/q0NNY9NIf9ctamUUt.d2', 'USER', 'neslihanbysl'),
(4, 'admin@gmail.com', '$2a$10$AC4b8DrVM1830QV0Ez3Oi.tYPDa5qLn3PZm2zizAxjHUCVA1RtDwm', 'ADMIN', 'admin'),
(6, 'fatihkck0828@gmail.com', '$2a$10$5V1152uLYcMHpJng6.clTev73VRNEQzNcvoxo8f1ryqlA.h9LeMJu', 'USER', 'yeniuser'),
(7, 'admin2@gmail.com', '$2a$10$moso3EE07W.I7XLM9IzA6uJxpbIzus2l4g/0IpEf.0jcSu6U60lJG', 'ADMIN', 'admin2');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK6uv0qku8gsu6x1r2jkrtqwjtn` (`product_id`);

--
-- Tablo için indeksler `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdnt39hlm1bcye9ivenccipd5s` (`product_id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Tablo için AUTO_INCREMENT değeri `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Tablo için AUTO_INCREMENT değeri `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Dökümü yapılmış tablolar için kısıtlamalar
--

--
-- Tablo kısıtlamaları `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK6uv0qku8gsu6x1r2jkrtqwjtn` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Tablo kısıtlamaları `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `FKdnt39hlm1bcye9ivenccipd5s` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
