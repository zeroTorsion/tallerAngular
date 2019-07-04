import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  tuTexto: string;
  buscar: string;
  texto: string;
  letrasPadre: string;
  textoLetras: string;

  constructor() {
    this.letrasPadre = '';
    this.textoLetras = '';
    this.tuTexto = '';
    this.buscar = 'Buscar';
    this.texto = 'Texto por defecto';
  }
  eventSearchParent(json){
    alert(json.query + ' ' + json.result);
    this.tuTexto = json.query;
  }
  escuchaLetra(str: string) {
    this.textoLetras = this.letrasPadre + str;
  }
}


