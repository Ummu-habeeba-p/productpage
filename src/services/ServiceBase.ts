// export abstract class ServiceBase {
//   private static readonly API_URL = "https://fakestoreapi.com";

//   static getUrl(path: string) {
//     return `${this.API_URL}${path}`;
//   }

//   static async get(path: string) {
//     const response = await fetch(this.getUrl(path), {
//       method: "GET",
//       cache: "no-store",
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`API Error: ${response.status}`);
//     }

//     return response.json();
//   }
// }
export abstract class ServiceBase {
  private static readonly API_URL = "https://fakestoreapi.com";

  static async get(path: string) {
    const response = await fetch(this.getUrl(path), {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "Next.js Server",
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  static getUrl(path: string): string {
    return `${this.API_URL}${path}`;
  }
}
