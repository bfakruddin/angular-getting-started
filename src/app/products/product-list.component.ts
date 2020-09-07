import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'
@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string='Product List';
    imageWidth: number=30;
    imageMargin: number=2;
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string = '';
    filteredProducts: IProduct[];
    products: IProduct[]=[];

    // Constructor
    constructor(private productService : ProductService) {
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    // Getter and Setters
    public get listFilter(): string {
        return this._listFilter;
    }

    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    // Events methods
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err 
        });
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: '+message;
    }
}