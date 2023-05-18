import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-showpping-list',
  templateUrl: './showpping-list.component.html',
  styleUrls: ['./showpping-list.component.css'],
})
export class ShowppingListComponent {
  ingredient: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];
}
