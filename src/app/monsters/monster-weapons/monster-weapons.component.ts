import { Component, OnInit, Input } from '@angular/core';
import { MonsterWeapon } from 'src/app/shared/model/models';

@Component({
  selector: 'app-monster-weapons',
  templateUrl: './monster-weapons.component.html',
  styleUrls: ['./monster-weapons.component.css'],
})
export class MonsterWeaponsComponent implements OnInit {
  @Input() monsterWeapons: Array<MonsterWeapon>;

  constructor() {}

  ngOnInit(): void {}
}
