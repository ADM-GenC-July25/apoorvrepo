import { Component, signal } from '@angular/core';
import { Bio } from '../bio/bio';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected readonly title = signal('Angular is easy');
}
