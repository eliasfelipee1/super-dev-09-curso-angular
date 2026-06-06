import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BoasVindas } from "./boas-vindas/boas-vindas";
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { NavBar } from './nav-bar/nav-bar';
import { FormCamposBasico } from './form-campos-basico/form-campos-basico';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoasVindas, CidadeBlumenau,  RouterLink, NavBar, FormCamposBasico],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
