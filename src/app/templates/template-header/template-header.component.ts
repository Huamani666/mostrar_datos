import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './template-header.component.html',
  styleUrl: './template-header.component.css'
})
export class TemplateHeaderComponent {

}
