import Link from "next/link";

type ProductCardProps = {
  product: {
    id: number | string;
    image: string;
    title: string;
    price: number;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>

    <div className="col-md-3 mb-4">
      <div className="card h-100">

        <img
          src={product.image}
          className="card-img-top p-3"
          height="250"
          style={{ objectFit: "contain" }}
        />

        <div className="card-body">
          <h6>{product.title}</h6>

          <h5>${product.price}</h5>

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