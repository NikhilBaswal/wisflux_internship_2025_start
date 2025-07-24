import { Injectable } from '@nestjs/common';
import { error } from 'console';

@Injectable()
export class ProductsService {
  //  Temporary in-memory storage (simulate a database)
  private products: any[] = [
    {
        id: 1,
        name:"nikhil",
        age:19,
        status:"student"
    },
    {
        id: 2,
        name:"abhishek",
        age:21,
        status:"software engineer"
    },
    {
        id: 3,
        name:"ankit",
        age:20,
        status:"model"
    }
  ];

  //  Get all products
  findAll(): any[] {
    return this.products;
  }

  //  Get a product by ID
  findById(id: number): any {
    // Optional: Debug log
    // console.log('Searching for ID:', id);

    const product = this.products.find((p) => p.id === id);

    if (!product) {
      throw new Error("oops, user not found! ");
    }

    return product;
  }

  //  Create a new product
  create(productData: any): any {
    const newProduct = {
      id: Date.now().toString(), // Generate unique string ID
      ...productData,
    };

    this.products.push(newProduct);

    return {
      message: ' Product created successfully!',
      product: newProduct,
    };
  }
}
