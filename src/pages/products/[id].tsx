
import { GetServerSideProps } from "next";
import Link from "next/link";
import CartButton from "../../components/cartButton/CartButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as productService from "../../services/productService";
import Head from "next/head";


type Product = {
  id?: string;
  title: string;
  image?: string;
  description?: string;
  price?: number;
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const data = await productService.ProductService.getProductById(
          Number(id)
        );
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  if (!product) return <h3>Product not found</h3>;

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="container mt-5">
        <h2>{product.title}</h2>

        <img
          src={product.image}
          alt={product.title}
          width="200"
        />

        <p>{product.description}</p>
        <h4>${product.price}</h4>

        <CartButton product={product} />
      </div>
    </>
  );
}