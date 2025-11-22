import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBar } from "./features/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('01-fundamentos');
}
