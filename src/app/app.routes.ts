import { Routes } from '@angular/router';
import { AddingComponent } from './adding/adding.component';
import { ListingComponent } from './listing/listing.component';
export const routes: Routes = [
    { path:"adding" , component : AddingComponent},
    { path:"listing", component : ListingComponent}
];
