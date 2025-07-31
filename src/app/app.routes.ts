import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Bio } from './bio/bio';
import { BioDetails } from './bio-details/bio-details';
import { BioCreate } from './bio-create/bio-create';

export const routes: Routes = [{path: '', component: Home}, 
    {path: 'bio', component: Bio}, 
    {path: 'bio/:id', component: BioDetails},
    {path: 'bio-create', component: BioCreate},
];
