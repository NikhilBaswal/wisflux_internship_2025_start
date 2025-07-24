import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): any[];
    getProductById(id: number): any;
    createProduct(body: CreateProductDto): any;
}
