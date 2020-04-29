import { Component, OnInit } from '@angular/core';
import { WeaponService } from '../weapons.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {

  weapons = [];
  filteredWeapons = [];
  numberOfPages:number = 0;
  activePage:number = 0;

  constructor(private weaponService: WeaponService) { }

  // Use this method when calling Weapon service.
  ngOnInit(): void {
    this.weaponService.getWeapons().subscribe({
      next: weapons => {
        this.weapons = weapons;
        this.filteredWeapons = weapons;
        this.filteredWeapons = this.filteredWeapons.slice(0, 5);
        this.numberOfPages = Math.ceil(weapons.length / 5);
        this.activePage = 1;
        console.log(this.weapons.length);
      },
      error: err => console.log(err)
    });
  }

  counter(i: number) {
      return new Array(i);
  }

  updateFilterList(e)
  {
    // Parse number from event
    var paginationNumber: number = parseInt(e.target.innerText);

    // Initialize variables for start/end index.
    var startingIndex: number = 0;
    var endingIndex: number = 0;

    // Change the active page to the pagination value that was clicked.
    this.activePage = paginationNumber;

    // Set the starting index to the active page's value + number of items allowed on page.
    startingIndex = (this.activePage - 1) * 5;

    // If the page number is equal to the amount of pages, then the endingIndex will be the length of the array.
    endingIndex = (this.activePage == this.numberOfPages) ? this.weapons.length : startingIndex+5;

    // Update the filtered weapons to display the proper info based off of the start/end indexes.
    this.filteredWeapons = this.weapons.slice( startingIndex, endingIndex);
    
  }

}
