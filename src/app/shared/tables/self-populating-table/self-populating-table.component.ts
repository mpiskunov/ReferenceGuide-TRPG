import { Component, OnInit, Input } from '@angular/core';
import { ITableDetail } from '../table-detail';
import { IColumnDescriptor } from '../column-descriptor.interface';

@Component({
  selector: 'self-populating-table',
  templateUrl: './self-populating-table.component.html',
  styleUrls: ['./self-populating-table.component.css']
})
export class SelfPopulatingTableComponent implements OnInit {

  @Input() itemArray:ITableDetail[];
  filteredItemArray:ITableDetail[];

  // Define the column's id index to sort by id.
  indexOfID:number = -1;

  // Define the column's name index to sort alphabetically.
  indexOfName:number = -1;

  numberOfPages:number = 0;
  activePage:number = 1;
  itemsPerPage:number = 10;
  sortAlphabetically:boolean = false;
  weaponsForGenTable: ITableDetail[] = [];


  _listFilter = '';
  get tableFilter(): string {
    return this._listFilter;
  }
  set tableFilter(value: string) {
    this._listFilter = value;
    this.refreshViewableItems(1);
  }

  constructor() { }

  performFilter(filterBy: string): ITableDetail[] {
    // Set filter to lowercase.
    filterBy = filterBy.toLocaleLowerCase();
    
    this.filteredItemArray = this.filteredItemArray.filter((item: ITableDetail) => 
      item.columns[this.indexOfName].itemValue.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
    return this.filteredItemArray;
  }

  // Use this method when calling Weapon service.
  ngOnInit(): void {
   this.filteredItemArray = this.itemArray;

   // Set ID and Name indexes.
   this.setIndexesForIDAndName(this.itemArray[0]);
   this.refreshItemArray();
   // Refresh amount of viewable items.
   this.refreshViewableItems(this.activePage);
  }

  setIndexesForIDAndName = (record:ITableDetail) => {
    let column = record.columns.filter((a, b) => a.itemName === "id");
    if(column.length > 0) this.indexOfID = +column[0].sortNumber;
    let columnName = record.columns.filter((a, b) => a.itemName === "name");
    if(columnName.length > 0) this.indexOfName = +columnName[0].sortNumber;
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
    this.filteredItemArray = this.filteredItemArray.slice(startingIndex, endingIndex);
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
    this.filteredItemArray = this.itemArray;
    if(this.tableFilter)
    {
      this.filteredItemArray = this.performFilter(this.tableFilter);
    }
    if(this.sortAlphabetically)
    {
      this.filteredItemArray.sort((a, b) => {
        var wepName1 = a.columns[this.indexOfName].itemValue.toUpperCase(); 
        var wepName2 = b.columns[this.indexOfName].itemValue.toUpperCase(); 
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
      this.filteredItemArray.sort((a, b) => +(a.columns[this.indexOfID].itemValue) - +(b.columns[this.indexOfID].itemValue));
    }

    this.refreshPagination(this.filteredItemArray.length);
  }
}
