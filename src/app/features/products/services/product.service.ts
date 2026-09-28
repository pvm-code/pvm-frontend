import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../../../core/api.config';
import { Product, ProductResponse } from '../models/product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http = inject(HttpClient);

private readonly apiUrl = `${API_CONFIG.productService}/api/v1/products`;
  getProducts(): Observable<Product[]> {
  return this.http
    .get<ProductResponse>(this.apiUrl)
    .pipe(
      map(response => response.data)
    );
}

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}