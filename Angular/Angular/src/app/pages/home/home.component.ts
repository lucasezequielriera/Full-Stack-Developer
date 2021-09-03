import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

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

  productos:any=[]

  constructor(private productosService:ProductosService) {
    // this.productos = this.productosService.getAllPromise()
    // .subscribe(data=>{
    //   console.log("data", data)
    //   this.productos = data
    // })
    this.getProductos()
  }

  async getProductos() {
      this.productos = await this.productosService.getAll()
  }

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
