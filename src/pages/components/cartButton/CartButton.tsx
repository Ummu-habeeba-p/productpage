import { useRouter } from "next/router";

export default function CartButton({ product }: { product: any }) {
  const router = useRouter();

  const handleAddToCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingItem = cart.find(
      (item: any) => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    router.push("/cart");
  };

  return (
    <button
      className="btn btn-success"
      onClick={handleAddToCart}
    >
      Add To Cart
    </button>
  );
}