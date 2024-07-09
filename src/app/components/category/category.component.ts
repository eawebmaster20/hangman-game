import { Component } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';



@Component({
  selector: 'app-category',
  standalone: true,
  imports: [BackButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})

export class CategoryComponent {

}
