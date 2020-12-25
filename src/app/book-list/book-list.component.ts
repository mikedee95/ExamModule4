import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { Observable} from 'rxjs';
import {BookserviceService} from '../services/bookservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Observable<Book[]>;
  name!: string;

  constructor(private bookService: BookserviceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.books = this.bookService.getBookList();
  }
  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateBook(id: number){
    this.router.navigate(['update', id])
  }


}
