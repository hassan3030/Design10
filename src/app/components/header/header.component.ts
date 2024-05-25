
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  y: any = 0;
  constructor() {

  }

  @ViewChild('nav') nav: any;
  ngOnInit(): void {
    setInterval(() => this.y = window.scrollY, 100)
  }
  ngAfterViewInit() {

  }

}
