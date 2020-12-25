import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = new Book();
  submitted = false;

  constructor(private bookService: BookserviceService,
    private router: Router) { }


    
  ngOnInit() {
  }

  newStudent(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookService.createBook(this.book).subscribe((data: any) => {
        console.log(data)
        this.book = new Book();
        this.gotoList();
      },
        (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/books']);
  }



}
