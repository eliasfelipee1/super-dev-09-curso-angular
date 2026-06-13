import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { BoasVindas } from './boas-vindas/boas-vindas';
import { NavBar } from './nav-bar/nav-bar';
import { FormCamposBasico } from './forms-campos-basico/form-campos-basico';
import { BmwM3 } from './bmw-m3/bmw-m3';
import { ProdutoCadastrar } from './produtos/produto-cadastrar/produto-cadastrar';
import { ProdutoEditar } from './produto-editar/produto-editar';
import { ProdutoListar } from './produto-listar/produto-listar';
import { ClientesCadastrar } from './clientes-cadastrar/clientes-cadastrar'



export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent: () => CidadeBlumenau },
    { path: "cidade/indaial", loadComponent: () => CidadeIndaial },
    { path: "boas-vindas", loadComponent: () => BoasVindas },
    { path: 'formulario/campos-basico', loadComponent: () => FormCamposBasico },
    { path: "navbar", loadComponent: () => NavBar },
    {path: "bmw-m3", loadComponent: () =>  BmwM3 },
    { path: "produto/cadastrar", loadComponent: () => ProdutoCadastrar },
    { path: "produto/editar/:id", loadComponent: () => ProdutoEditar },
    { path: "produto/listar", loadComponent: () => ProdutoListar },
    { path: "clientes/cadastrar", loadComponent: () => ClientesCadastrar },

   
];
