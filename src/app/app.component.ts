import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplatesModule } from './templates/templates.module';
import { TemplatesRoutingModule } from './templates/templates-routing.module';
import { TemplateHeaderComponent } from './templates/template-header/template-header.component';
import { TemplateFooterComponent } from './templates/template-footer/template-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateHeaderComponent,TemplateFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cevicheria-app';
}
