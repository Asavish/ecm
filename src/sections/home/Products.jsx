import React from "react";
import { Box } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../components/SectionTitle";
import { GlobalStaticState } from "../../state/GlobalStaticState";


const Products = () => {
  const { items } = GlobalStaticState.products;
  return (
    <Box p={2}>
      <SectionTitle text="Products" />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={5}
        p={2}
        sx={{
          maxWidth: "100%",
          "@media (min-width: 600px)": {
            justifyContent: "space-between",
          },
          "@media (min-width: 960px)": {
            justifyContent: "center",
          },
        }}
      >
        {items.map((product, index) => (
          <Box key={index} width="auto">
            <ProductCard
              title={product.name}
              description={product.description}
              image={product.image}
              application = {product.application}
              specs = {product.specs}
              specificationImage = {product.specificationImage}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
