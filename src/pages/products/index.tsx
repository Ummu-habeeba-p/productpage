
import ProductCard from "../../components/productCard/ProductCard";
import Head from "next/head";

import { ProductService } from "@/services/productService";

type Product = {
  id: string | number;
  image: string;
  title: string;
  price: number;
};

type ProductsProps = {
  products: Product[];
};



export default function Products({ products }: ProductsProps) {
  return (


     <>
      <Head>
        <title>Product Details</title>
        <meta
          name="description"
          content="Product description"
        />
      </Head>

      <div className="container mt-4">
        <div className="row">
          {products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const products = await ProductService.getProducts();


  return {
    props: {
      products,
    },
  };
}

function getProductById(productId: number): Product | undefined {
  throw new Error("Function not implemented.");
}

