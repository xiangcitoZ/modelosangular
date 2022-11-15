import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent implements OnInit {
  public deportes: Array<string>;
  public mensaje!: string;

  //CUANDO HAGAMOS EMIT, LEERA ESTE METODO
  seleccionarDeportePadre(event:string): void{
    console.log(event);
    this.mensaje = "Deporte Seleccionado: " + event +" !!";
  }

  constructor() {
    this.deportes = ["Futbol", "Baloncesto", "Tenis", "Voley", "Hockey"];
   }

  ngOnInit(): void {
  }

}
