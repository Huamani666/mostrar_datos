import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { error } from 'console';
import { CategoriaResponse } from './categoria-reponse';
import { CategoriaResponseService } from './servicios.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  categoria:CategoriaResponse[]=[];
  
  constructor(
    private _CategoriaService:CategoriaResponseService,
    
  ){

  }


  listarCargos() {
    this._CategoriaService.get().subscribe({
  
      next: (data: CategoriaResponse[]) => {
        this.categoria = data;
        console.log(this.categoria)
      },
      error: (err) => {
        console.log(" error ", err);
      },
      complete: () => {
        //hare algo
      },
  
    })
  }  
}


