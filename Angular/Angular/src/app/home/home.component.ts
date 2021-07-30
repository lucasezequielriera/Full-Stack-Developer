import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Hola Desarrollo Angular"
  modificado = false
  constructor() { }

  cambiarTitle() {
    this.title = "Hola Lucas"
    this.modificado = true
  }

  ngOnInit(): void {}

}
