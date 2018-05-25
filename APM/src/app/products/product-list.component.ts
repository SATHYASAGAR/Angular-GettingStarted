import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { productService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products,
                this.filteredProducts = this.products;
            },
                        error => this.errorMessage = <any>error);
        this.filteredProducts=this.products;        
    }
    pageTitle: string = "Product List"; 
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter():string{
        return this._listFilter;
    } 
    set listFilter(value: string){
        this._listFilter=value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private _productService:productService){
    }
    toggleImage():void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void{
        this.pageTitle='Product List: '+message;
    }

    performFilter(filterBy:string):IProduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct)=> product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }
}