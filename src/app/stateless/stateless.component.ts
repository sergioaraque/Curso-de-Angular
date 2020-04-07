import { ChangeDetection } from '@angular/cli/lib/config/schema';
import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Así sólo se intanciará una sola vez
})
export class StatelessComponent implements OnInit {

  @Output () cursomatriculado: EventEmitter<Product> = new EventEmitter();// Nos dirá en que curso se ha matriculado

  @Input () product: Product; 
  public matricula: string;
  private disabled: boolean;

  constructor() { }

  ngOnInit(): void {
    // Damos texto al botón
    this.matricula = 'Matricularse';
  }

  // Cuando se matriculan, se desativa el botón y se muestra que están matriculados
  matricularse() {
    this.disabled = true;
    this.matricula = 'Usted está matriculado';
    this.cursomatriculado.emit(this.product); // Guardamos/enviamos el curso en el que se ha matriculado al componente padre
  }

  // Devuelve si está deshabilitado
  isDisabled() {
    return this.disabled;
  }

}
