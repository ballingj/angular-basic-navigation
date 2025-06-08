import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; //<-- had to move this up to app component

@Component({
  selector: 'app-right-side',
  imports: [RouterOutlet],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.css'
})
export class RightSideComponent {

}
