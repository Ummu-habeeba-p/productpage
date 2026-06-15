
import { GetServerSideProps } from "next";
import Link from "next/link";
import CartButton from "../../components/cartButton/CartButton";
import * as productService from "../../services/productService"

import Head from "next/head";
type Product = {
  id?: string;
  title: string;
  image?: string;
  description?: string;
  price?: number;
};

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <>
     <>
      <Head>
        <title>{product.title}</title>
        <meta
          name="description"
          content={product.description}
        />
      </Head>

      {/* <h1>{product.title}</h1> */}
    </>

      {/* <Navbar /> */}

      <div className="container mt-5">
        <h2>{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          width="200"
        />
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        {/* <Link href={'/cart'}>
        <button className="btn btn-primary">Add to cart</button>
        </Link> */}
         <CartButton product={product} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const product = await productService.ProductService.getProductById(Number(id));

  return {
    props: {
      product,
    },
  };
};
function getProducts(arg0: string) {
  throw new Error("Function not implemented.");
}

