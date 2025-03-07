import { useEffect, useState } from "react";
import "./Products.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link } from 'react-router-dom'; // Link bileşenini import edin



function Products({ sort, searchTerm }) {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [hoveredImages, setHoveredImages] = useState({});

  const apiUrl = "http://localhost:8080/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await axios.get(apiUrl);
      if (Array.isArray(result.data)) {
        const productsWithRatings = result.data.map(product => ({
          ...product,
          rating: Math.floor(Math.random() * 5) + 1,
          reviewCount: Math.floor(Math.random() * 100)
        }));
        setProducts(productsWithRatings);
      } else {
        console.error("Veri bir dizi değil:", result.data);
      }
    } catch (error) {
      console.error("Ürünler alınırken bir hata oluştu:", error);
    }
  };

  const handleMouseEnter = (productId) => {
    setHoveredImages((prevHoveredImages) => ({
      ...prevHoveredImages,
      [productId]: true,
    }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredImages((prevHoveredImages) => ({
      ...prevHoveredImages,
      [productId]: false,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const turkishCategory = t(`products.${product.category}`);
    const englishCategory = t(`products.${product.category}`, { lng: "en" });
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      turkishCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      englishCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="products">
      {filteredProducts
        .sort((a, b) =>
          sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : null
        )
        .map((product) => (
          <div
            className="product"
            key={product.id}
            id={`product-${product.id}`}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={() => handleMouseLeave(product.id)}
          >
            <Link to={`/products/${product.id}`}>
            <img
              src={hoveredImages[product.id] ? product.image2 : product.image1}
              alt={product.name}
              className="product-image"
            />
            </Link>
            <h3>{product.name}</h3>
            <div className="rating">
              {[...Array(5)].map((star, index) => (
                <span key={index} className={index < product.rating ? "filled" : ""}>☆</span>
              ))}
            </div>
            <p className="price">{`${product.price}₺`}</p>
          </div>
        ))}
    </div>
  );
}

export default Products;
