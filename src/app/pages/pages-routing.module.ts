import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesPrincipalComponent } from './pages-principal/pages-principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HistorialDePedidosComponent } from './historial-de-pedidos/historial-de-pedidos.component';


const routes: Routes = [
  {
    path:'',component:PagesPrincipalComponent,

    
  },
  {
    path:'contacto',component:ContactoComponent
  },
  {
    path: 'historial de pedidos',component:HistorialDePedidosComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
