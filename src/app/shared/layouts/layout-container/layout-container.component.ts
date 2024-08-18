import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-layout-container',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss'
})
export class LayoutContainerComponent {

}
