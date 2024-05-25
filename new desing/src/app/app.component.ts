import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  constructor() {

  }
  title = 'New Design'
  pointY =0;
  ngOnInit(): void {
    setInterval(()=>  this.pointY = window.scrollY ,100 )
 }
  

}
