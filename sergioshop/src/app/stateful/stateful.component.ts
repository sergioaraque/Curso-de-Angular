import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  // Hijo que confirmará el componente
  @ViewChild(ConfirmComponent, {static: false})
  confirmChild: ConfirmComponent;


  // Creamos el modelo
  shopModel: Shop = new Shop();

  // Listado de elementos que se han comprado
  boughtItems: Array<Product>;


  constructor() {
    // Iniciamos el array aquí porque en sólo este caso, lo queremos nada más empezar.
    this.boughtItems = [];
  }

  ngOnInit(): void {
  }

  // Añadimos el curso al array de productos comprados
  clickItem(_curso) {
    this.boughtItems.push(_curso);
  }

  cursoMatriculado(_event: Product) {
    this.clickItem(_event);
    this.confirmChild.isDisabled = false;
  }

  // Método para obtener el total del carrito
  obtenerPrecioCarrito() {
    if (this.boughtItems) {
      return this.boughtItems.reduce((prev: number, item: Product) => prev + item.price, 0);
    }
  }

}
