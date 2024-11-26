import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddingComponent } from '../adding/adding.component';
import { ListingComponent } from '../listing/listing.component';
@Component({
  selector: 'app-employee',
  imports: [RouterOutlet, AddingComponent, ListingComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
