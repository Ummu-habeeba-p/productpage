import { useEffect, useState } from "react";

export default function CartPage() {
  type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    setCartItems(cart);
  }, []);

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-warning">
          Cart is empty
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="card mb-3 p-3"
            >
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <h5>{item.title}</h5>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>

                <div className="col-md-4 text-end">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="card p-3">
            <h5>Total Items: {totalItems}</h5>
            <h4>Total: ${total.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
}