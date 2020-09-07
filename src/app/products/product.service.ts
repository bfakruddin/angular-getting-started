import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private productUrl = 'api/products/products.json';

    constructor(private httpclient: HttpClient){}

    getProducts(): Observable<IProduct[]> {
        return this.httpclient.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All:' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            errorMessage = `An Error occurred: ${err.error.message}`;
        }else{
            errorMessage = `server returned code : ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError (errorMessage);
    }
}