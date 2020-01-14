import { Component } from '@angular/core';
import {Quote} from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quote[] = [
    new Quote(1,"You always gain by giving love","Celine kerrine", new Date(2019,10,4)),
    new Quote(2,"Change your thoughts and change your world","Norman Vincent pale", new Date(2001,6,16)),
    new Quote(3,"Purpose fuels passion"," zaviafashion ", new Date(2000,11,9)),
    new Quote(4,"I will prepare and someday my change will come"," Abraham lincoln", new Date(2000,10,4)),
    new Quote(5,"The good times of today are the sad thought of tomorrow","Bob marley", new Date(1999,10,4)),
    new Quote(6,"Always acquire new skills"," Bob Collimore", new Date(2009,12,3)),
    new Quote(7,"We did not come to fear the the future we came to shape it","Barrack Obama", new Date(2008,1,9)),

  ];

  title = 'Quote';

  constructor(){}
  
  ngOnInit(){}
}
