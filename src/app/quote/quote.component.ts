import { Component, OnInit } from '@angular/core';
import{Quote}from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    new Quote(1,"You always gain by giving love","Celine kerrine"),
    new Quote(2,"Change your thoughts and change your world","Norman Vincent pale"),
    new Quote(3,"Purpose fuels passion"," zaviafashion "),
    new Quote(4,"I will prepare and someday my change will come"," Abraham lincoln"),
    new Quote(5,"The good times of today are the sad thought of tomorrow","Bob marley"),
    new Quote(6,"Always acquire new skills"," Bob Collimore"),
    new Quote(7,"We did not come to fear the the future we came to shape it","Barrack Obama"),

  ];

toggleDetails(index){
  this.quote[index].showAuthor=!this.quote[index].showAuthor;
}

  constructor() { }

  ngOnInit() {
  }

}
