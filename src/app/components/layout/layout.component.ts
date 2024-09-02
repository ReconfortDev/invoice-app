import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
