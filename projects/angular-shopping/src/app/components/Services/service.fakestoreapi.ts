import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FakestoreProductContract } from "../Contracts/FakestoreProductContract";
import { Observable } from "rxjs";
import { FakestoreUsersContract } from "../Contracts/FakestoreUsersContract";


@Injectable({
    providedIn: 'root'
})
export class FakestoreServiceAPI {
    public baseUrl: string = 'https://fakestoreapi.com/products';
    public loginUrl: string = 'https://fakestoreapi.com/auth/login';

    constructor(private http: HttpClient) { }

    public getCategories(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/categories`);
    }

    public getProducts(): Observable<FakestoreProductContract[]> {
        return this.http.get<FakestoreProductContract[]>(this.baseUrl);
    }

    public getSpecificProducts(productName: string): Observable<FakestoreProductContract[]> {
        return this.http.get<FakestoreProductContract[]>(`${this.baseUrl}/category/${productName}`);
    }

    public getProductId(id: number): Observable<FakestoreProductContract> {
        return this.http.get<FakestoreProductContract>(`${this.baseUrl}/${id}`);
    }


    public addProduct(Product: Partial<FakestoreProductContract>): Observable<FakestoreProductContract> {
        return this.http.post<FakestoreProductContract>(this.baseUrl, Product);
    }

    public getAllUsers(): Observable<FakestoreUsersContract[]> {
        return this.http.get<FakestoreUsersContract[]>('https://fakestoreapi.com/users');
    }

    public loginUser(Users: { username: string; password: string }): Observable<any> {
        return this.http.post<any>(this.loginUrl, Users);
    }

    public sortProducts(): Observable<FakestoreProductContract[]> {
        return this.http.get<FakestoreProductContract[]>(this.baseUrl + "?sort=desc");
    }

    public limitProducts(size: number): Observable<FakestoreProductContract[]> {
        return this.http.get<FakestoreProductContract[]>(`${this.baseUrl}?limit=${size}`);
    }
}