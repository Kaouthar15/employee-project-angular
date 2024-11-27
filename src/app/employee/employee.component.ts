import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddingComponent } from '../adding/adding.component';
import { ListingComponent } from '../listing/listing.component';
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-employee',
  imports: [RouterOutlet, AddingComponent, ListingComponent, HeaderComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
