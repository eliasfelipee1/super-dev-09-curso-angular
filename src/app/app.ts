import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BoasVindas } from "./boas-vindas/boas-vindas";
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { NavBar } from './nav-bar/nav-bar';
import { FormCamposBasico } from './forms-campos-basico/form-campos-basico';
import {BmwM3 } from './bmw-m3/bmw-m3';
import { ProdutoCadastrar } from './produtos/produto-cadastrar/produto-cadastrar';
import { ProdutoEditar } from './produto-editar/produto-editar';
import { ProdutoListar } from './produto-listar/produto-listar';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoasVindas,  RouterLink, NavBar, FormCamposBasico, CidadeBlumenau, BmwM3, ProdutoCadastrar, ProdutoEditar, ProdutoListar    ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
