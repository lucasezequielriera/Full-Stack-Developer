import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productosService:ProductosService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if (id) {
      this.getProducto(id)
    }
  }

  async getProducto(id:string) {
    const response:any = await this.productosService.getById(id)
    this.producto = response[0];
  }

  ngOnInit(): void {
  }

}
