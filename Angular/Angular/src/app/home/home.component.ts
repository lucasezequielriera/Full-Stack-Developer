import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombrePersona = ''
  title = 'Usuario'
  modificado = false
  // classNameIngresado = ''
  constructor() { }

  onKey(event: any) {
    this.nombrePersona = event.target.value;
    this.title = this.nombrePersona
    // if (this.nombrePersona.length >= 8) {
    //   // this.classNameIngresado = 'sobrepasado'
    // } else {
    //   // this.classNameIngresado = 'bien'
    // }
  }

  cambiarTitle() {
    this.modificado = false
  }

  ngOnInit(): void {}

}
