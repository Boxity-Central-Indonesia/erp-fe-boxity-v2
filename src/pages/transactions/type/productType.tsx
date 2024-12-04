export interface Product {
    id: number;
    name: string;
    code: string;
    image_product: string;
    description: string | null;
    weight: string; // Assuming the weight is always a string in the response
    animal_type: string | null;
    age: string | null;
    health_status: string;
    price: number;
    type: string | null;
    subtype: string | null;
    size: string | null;
    color: string | null;
    brand: string | null;
    model: string | null;
    sku: string | null;
    stock: number;
    image: string | null;
    video: string | null;
    raw_material: number;
    unit_of_measure: string;
    warehouse_id: number;
    created_at: string;
    updated_at: string;
    category_id: number;
    user_created: number;
    user_updated: number;
    warehouse: Warehouse;
    category: Category;
    prices: Price[]; // Assuming `prices` is an array
  }
  
  interface Warehouse {
    id: number;
    name: string;
    address: string;
    capacity: number;
    created_at: string;
    updated_at: string;
    user_created: number;
    user_updated: number;
    description: string | null;
  }
  
  interface Category {
    id: number;
    name: string;
    image: string;
    description: string;
    created_at: string | null;
    updated_at: string | null;
    user_created: number | null;
    user_updated: number | null;
    type: string;
  }
  
  interface Price {
    // Define this based on the structure of elements inside the `prices` array
  }
  

  export interface ProductResponse {
    staus: number,
    data: Product[]
  }