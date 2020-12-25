import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../Book';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id!: number;
  book!: Book;

  constructor(private route: ActivatedRoute,private router: Router,
    private bookService: BookserviceService) { }

  ngOnInit() {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];

    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['books']);
  }

  updateBook(id: number){
    this.router.navigate(['update', id])
  }


}
