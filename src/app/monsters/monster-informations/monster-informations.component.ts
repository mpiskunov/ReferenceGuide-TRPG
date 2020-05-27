import { Component, OnInit, Input } from '@angular/core';
import { MonsterInformation } from 'src/app/shared/model/models';

@Component({
  selector: 'app-monster-informations',
  templateUrl: './monster-informations.component.html',
  styleUrls: ['./monster-informations.component.css'],
})
export class MonsterInformationsComponent implements OnInit {
  @Input() monInfos: Array<MonsterInformation>;
  constructor() {}

  ngOnInit(): void {}
}
