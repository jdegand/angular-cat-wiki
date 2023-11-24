import { Routes } from '@angular/router';
import { BreedsComponent } from './components/breeds/breeds.component';
import { HomeComponent } from './components/home/home.component';
import { BreedComponent } from './components/breed/breed.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

export const routes: Routes = [
    { path: 'breed/:name', component: BreedComponent },
    { path: 'breeds', component: BreedsComponent },
    { path: 'benefits', title: 'Benefits(?) of Cat Ownership', component: BenefitsComponent },
    { path: 'home', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', title: "404 Not Found", component: NotFoundComponent },
];
