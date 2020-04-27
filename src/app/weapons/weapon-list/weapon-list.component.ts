import { Component, OnInit } from '@angular/core';
import { WeaponService } from '../weapons.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css'],
  providers: [WeaponService]
})
export class WeaponListComponent implements OnInit {

  weapons = [];
  constructor(private weaponService: WeaponService) { }

  // Use this method when calling Weapon service.
  ngOnInit(): void {
    this.weaponService.getWeapons().subscribe({
      next: weapons => {
        this.weapons = weapons;
        console.log("We got info!");
      },
      error: err => console.log(err)
    });
  }

}
