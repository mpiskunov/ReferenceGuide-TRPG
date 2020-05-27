import { Component, OnInit, Input } from '@angular/core';
import { MonsterAbility } from 'src/app/shared/model/models';

@Component({
  selector: 'app-monster-abilities',
  templateUrl: './monster-abilities.component.html',
  styleUrls: ['./monster-abilities.component.css'],
})
export class MonsterAbilitiesComponent implements OnInit {
  @Input() abilities: Array<MonsterAbility>;
  constructor() {}

  ngOnInit(): void {}
}
