import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeaponService } from '../weapons.service';

@Component({
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private weaponService: WeaponService) { }

  ngOnInit(): void {
    debugger;
    const param = this.route.snapshot.paramMap.get('id');
    if(param)
    {
      const id = +param;
    }
  }

}
