import { Component } from '@angular/core';
import { LeftSideComponent } from './components/nav-left-side/left-side.component';
import { RightSideComponent } from './components/main-right-side/right-side.component';

@Component({
  selector: 'app-root',
  imports: [LeftSideComponent, RightSideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected title = 'homes-app';
}
