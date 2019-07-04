import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result: string;
  query: string;
  letra: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Output() searchEvent = new EventEmitter();
  @Input() tuTexto: string;
  @Output() letraEvent = new EventEmitter();
  @Input() textoLetras : string;
  constructor() {
    this.query = '';
    this.letra = '';
  }

  escribeTexto() {
    this.result =  this.query;
    this.searchEvent.emit({query: this.query, result: this.result});
  }
  teclasHaciaPadre() {
    this.letraEvent.emit(this.letra);
  }
  ngOnInit() {
  }

}
