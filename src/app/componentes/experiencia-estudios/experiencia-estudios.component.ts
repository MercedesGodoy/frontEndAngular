import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia-estudios',
  templateUrl: './experiencia-estudios.component.html',
  styleUrls: ['./experiencia-estudios.component.css']
})
export class ExperienciaEstudiosComponent implements OnInit {
  proyectosList:any;
  constructor(private datosPortfolio:DatosService ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.proyectosList=data.proyectos
    })
  }

}
