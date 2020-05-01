import { Component, OnInit } from '@angular/core';
import { WeaponService } from '../weapons.service';
import { IWeapon } from '../interfaces/weapons';

@Component({
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {

  weapons:IWeapon[] = [] ;
  filteredWeapons:IWeapon[] = [] ;
  numberOfPages:number = 0;
  activePage:number = 1;
  itemsPerPage:number = 10;
  sortAlphabetically:boolean = false;

  _listFilter = '';
  get tableFilter(): string {
    return this._listFilter;
  }
  set tableFilter(value: string) {
    this._listFilter = value;
    this.refreshViewableItems(1);
  }

  constructor(private weaponService: WeaponService) { }

  performFilter(filterBy: string): IWeapon[] {
    // Set filter to lowercase.
    filterBy = filterBy.toLocaleLowerCase();
    // this.filteredWeapons = this.weapons;
    this.filteredWeapons = this.filteredWeapons.filter((weapon: IWeapon) =>
      weapon.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    return this.filteredWeapons;
  }

  // Use this method when calling Weapon service.
  ngOnInit(): void {
    this.weaponService.getWeapons().subscribe({
      next: weapons => {

        // Set the weapons array.
        this.weapons = weapons;
        this.refreshItemArray();
        // Refresh amount of viewable items.
        this.refreshViewableItems(this.activePage);
      },
      error: err => console.log(err)
    });
  }

  counter(i: number) {
      return new Array(i);
  }

  updatePagination(e)
  {
    // Parse number from event
    var paginationNumber: number = parseInt(e.target.innerText);

    // If on the current page, no need to continue with the logic. Return to client.
    if(paginationNumber == this.activePage) return;

    this.refreshViewableItems(paginationNumber);
  }

  refreshViewableItems = (newActivePage:number) => {
    // Initialize variables for start/end index.
    var startingIndex: number = 0;
    var endingIndex: number = this.itemsPerPage;

    // reload the weapon array;
    this.refreshItemArray();

    // Change the active page to the pagination value that was clicked.
    this.activePage = newActivePage;

    // Set the starting index to the (active page's value - 1) + number of items allowed on page.
    startingIndex = this.itemsPerPage * (this.activePage - 1);

    // If the page number is equal to the amount of pages, then the endingIndex will be the length of the array.
    endingIndex = startingIndex + this.itemsPerPage;

    // Update the filtered weapons to display the proper info based off of the start/end indexes.
    this.filteredWeapons = this.filteredWeapons.slice(startingIndex, endingIndex);
  }

  refreshPagination = (e:number) => {

    // Determine the number of pages by dividing the number of weapons / number of viewable items per page.
    this.numberOfPages = Math.ceil(e / this.itemsPerPage);
  }

  // Updates the max number of items the user can see for each page.
  updateItemsPerPage(e)
  {
    // If the values match, do not run any logic.
    if(+e == this.itemsPerPage) return;

    // Assign the itemsPerPage from the client.
    this.itemsPerPage = +e;

    // Refresh amount of viewable items.
    this.refreshViewableItems(1);
  }


  // 
  sortWeaponsAlphabeticallyClicked(value:boolean)
  {
    this.sortAlphabetically = value;
    this.refreshItemArray();
    this.refreshViewableItems(1);
  }

  refreshItemArray() {
    this.filteredWeapons = this.weapons;
    if(this.tableFilter)
    {
      this.filteredWeapons = this.performFilter(this.tableFilter);
    }
    if(this.sortAlphabetically)
    {
      this.filteredWeapons.sort((a, b) => {
        var wepName1 = a.name.toUpperCase(); 
        var wepName2 = b.name.toUpperCase(); 
        if (wepName1 < wepName2) {
          return -1; //wepName1 comes first
        }
        if (wepName1 > wepName2) {
          return 1; // wepName2 comes first
        }
        return 0;  // names must be equal
      })
    }
    else
    {
      this.filteredWeapons.sort((a, b) => a.id - b.id);
    }

    this.refreshPagination(this.filteredWeapons.length);
  }
}