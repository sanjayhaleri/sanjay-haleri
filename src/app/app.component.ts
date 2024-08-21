import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutContainerComponent } from './shared/layouts/layout-container/layout-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
