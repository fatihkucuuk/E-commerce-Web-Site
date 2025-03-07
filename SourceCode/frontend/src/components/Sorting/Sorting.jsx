import React from "react";
import "./Sorting.css";
import { useTranslation } from "react-i18next";

const Sorting = ({setSort}) => {
    const { t } = useTranslation();
    return (
        <div className="sorting">
            <select onChange={e => setSort(e.target.value)} className="select" name="" id="selectOne">
                <option value="">{t('product.orderbyprice.select')}</option>
                <option value="inc" id="artanFiyat">{t('product.orderbyprice.inc')}</option>
                <option value="dec" id="azalanFiyat">{t('product.orderbyprice.dec')}</option>
            </select>
        </div>
    )
}

export default Sorting