import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { BoasVindas } from './boas-vindas/boas-vindas';




export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent: () => CidadeBlumenau },
    { path: "cidade/indaial", loadComponent: () => CidadeIndaial },
    { path: "boas-vindas", loadComponent: () => BoasVindas },
   
];
