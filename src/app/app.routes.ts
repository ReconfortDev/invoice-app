import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SingleinvoiceComponent} from "./pages/singleinvoice/singleinvoice.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: SingleinvoiceComponent },
];
