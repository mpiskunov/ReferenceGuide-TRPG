import { Component, OnInit, Input } from '@angular/core';
import { MonsterLoot } from 'src/app/shared/model/models';

@Component({
  selector: 'app-monster-loots',
  templateUrl: './monster-loots.component.html',
  styleUrls: ['./monster-loots.component.css'],
})
export class MonsterLootsComponent implements OnInit {
  @Input() monLoots: Array<MonsterLoot>;
  constructor() {}

  ngOnInit(): void {}
}
