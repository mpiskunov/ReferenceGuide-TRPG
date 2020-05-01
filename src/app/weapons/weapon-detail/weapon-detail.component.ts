import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeaponService } from '../weapons.service';
import { ICompletedWeapon } from '../interfaces/completed-weapon';

@Component({
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit {

  public completedWeapon: ICompletedWeapon;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private weaponService: WeaponService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if(param)
    {
      const id = +param;

      this.weaponService.getCompleteWeaponInfoById(id).subscribe({
        next: weapon => {
          this.completedWeapon = weapon;
        },
        error: err => console.log(err)
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/weapons']);
  }

}
