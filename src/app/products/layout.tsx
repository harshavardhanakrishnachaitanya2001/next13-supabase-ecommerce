import React from "react";
import ProductsNavbar from "../../../components/ProductsNavbar";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProductsNavbar />
      {children}
    </>
  );
};

export default ProductsLayout;
