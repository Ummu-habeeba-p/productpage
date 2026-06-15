
export class ProductService {
  static async getProductById(id: number) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await res.json();
    return data;
  }

  static async getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    return data;
  }
}

