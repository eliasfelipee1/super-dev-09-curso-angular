import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BoasVindas } from "./boas-vindas/boas-vindas";
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { CarrosHome } from './carros-home/carros-home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoasVindas, CidadeBlumenau, CidadeIndaial, CarrosHome, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
