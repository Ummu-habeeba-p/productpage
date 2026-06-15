import Link from "next/link";

type ProductCardProps = {
  product?: {
    id: number | string;
    image?: string;
    title?: string;
    price?: number;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  if (!product) return null;

  const image = product.image ?? "";
  const title = product.title ?? "Product";
  const price = product.price ?? 0;

  return (
    <>

    <div className="col-md-3 mb-4">
      <div className="card h-100">

        <img
          src={image}
          alt={title}
          className="card-img-top p-3"
          height="250"
          style={{ objectFit: "contain" }}
        />

        <div className="card-body">
          <h6>{title}</h6>

          <h5>${price}</h5>

          <Link
            href={`/products/${product.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
           
        </div>
      </div>
    </div>
  </>
  );
}