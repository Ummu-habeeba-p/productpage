
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import Head from "next/head";
import { ProductService } from "@/services/productService";

type Product = {
  id: string | number;
  image: string;
  title: string;
  price: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getProducts();
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Product listing page" />
      </Head>

      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}