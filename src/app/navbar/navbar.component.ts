import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navList = [
    {
      'text': 'Todo',
      'link': '/todo'
    },
    {
      'text': 'Events',
      'link': '/events'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
