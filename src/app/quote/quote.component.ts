import { Component, OnInit } from '@angular/core';
import{Quote}from "../quote";


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})


export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,"You always gain by giving love","Celine kerrine", new Date(2019,10,4)),
    new Quote(2,"Change your thoughts and change your world","Norman Vincent pale", new Date(2001,6,16)),
    new Quote(3,"Purpose fuels passion"," zaviafashion ", new Date(2000,11,9)),
    new Quote(4,"I will prepare and someday my change will come"," Abraham lincoln", new Date(2000,10,4)),
    new Quote(5,"The good times of today are the sad thought of tomorrow","Bob marley", new Date(1999,10,4)),
    new Quote(6,"Always acquire new skills"," Bob Collimore", new Date(2009,12,3)),
    new Quote(7,"We did not come to fear the the future we came to shape it","Barrack Obama", new Date(2008,1,9)),

  ];

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

toggleDetails(index){
  this.quotes[index].showDescription=!this.quotes[index].showDescription;
}
deleteQuote(isComplete,index){
  if(isComplete){
    let toDelete=confirm(`Are you really sure you want to delete ${this.quotes[index].author}?`);

    if (toDelete){
      this.quotes.splice(index,1);
    }
  }
}

addNewQuote(quote){
  let quoteLength=this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate=new Date(quote.completeDate);
  this.quotes.push(quote);
}

// var app = quote.module("myModule", [])
// 		.controller("myController" , function($scope){
 
// 	var members =[
// 		{author: "Celine Kerrine", Votes: 0},
// 		{author: "Claire Temple", Votes: 0},
// 	];					
 
// 	$scope.members = members;
 
// 	$scope.incrementUp = function(member){
// 		member.Votes++;
// 	}
// 	$scope.incrementDown = function(member){
// 		member.Votes--;
// 	}
// });	


  constructor() { }

  ngOnInit() {
  }

}
