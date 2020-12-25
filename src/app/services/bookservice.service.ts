import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private baseUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getBook(id: number): Observable<any> {
    console.log('this');
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBook(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, book);
  }

  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBookList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
