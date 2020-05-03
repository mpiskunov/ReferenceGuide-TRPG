import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICompletedWeapon } from '../interfaces/completed-weapon';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';

@Component({
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit {

  public completedWeapon: ICompletedWeapon;
  public callBackUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private apiService: WitcherApiService) {
      let url = route.url.subscribe({
        next: url => {
          this.callBackUrl = url[0].path;
        }
      });
    }
    

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if(param)
    {
      const id = +param;

      this.apiService.getSingularById<ICompletedWeapon>(ApiEndPoint.WEAPONS_COMPLETE, id).subscribe({
        next: weapon => {
          this.completedWeapon = weapon;
        },
        error: err => console.log(err)
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + this.callBackUrl]);
  }

}
