import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./Sliders.css";

const SliderItem = ({ imageSrc }) => {
  const { t } = useTranslation();
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">{t('home.main-slider.slider1')}</p>
        <h2 className="slider-heading">{t('home.main-slider.slider2')}</h2>
        <a href="/products"> <button className="btn btn-lg btn-primary"> {t('home.main-slider.sliderbtn')}</button>
      
        </a>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};
