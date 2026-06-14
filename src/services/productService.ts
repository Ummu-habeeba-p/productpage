// const API_URL = "https://fakestoreapi.com/products";

// export const fetchProducts = async () => {
//   const res = await fetch(API_URL);
//   return res.json();
// };

// export const fetchProduct = async (id: any) => {
//   const res = await fetch(`${API_URL}/${id}`);
//   return res.json();
// };
// import { ServiceBase } from "../services/ServiceBase";

// export class ProductService extends ServiceBase {
//   static async getProducts() {
//     return this.get("/products");
//   }

//   static async getProductById(id: number) {
//     return this.get(`/products/${id}`);
//   }
// }
import { ServiceBase } from "./ServiceBase";
export  class ProductService extends ServiceBase {
    static getProducts =async () => {
     var prodResp=await fetch(this.getUrl('/products'),{
      // cache:'no-store'
     });
    var products= await prodResp.json();
    
    return products;
    }
 static getProductById = async (id:number) =>{
  var prodResp = await fetch (this.getUrl('/products/'+id));
  var product= await prodResp.json();
    return product;
 }
}


