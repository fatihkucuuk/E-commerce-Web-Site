import { Fragment, useState } from "react";
import Products from "../components/Products/Products";
import Sorting from "../components/Sorting/Sorting";
import Search from "../components/Search/Search";


const ProductPage = () => {
  const [sort, setSort] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Fragment>
       <div className="flex">
        <Search setSearchTerm={setSearchTerm}  />
        <Sorting setSort={setSort} />
      </div>
      <Products sort={sort} searchTerm={searchTerm} />
    </Fragment>
  );
};

export default ProductPage;
