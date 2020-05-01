import { IEffect } from './effect';
import { IWeapon } from './weapons';

export interface IWeaponEffects {
    weaponID:number;
    effectID:number;
    weapon:IWeapon;
    effect:IEffect;
    value:string;
    deleted:boolean;
    sourceID:number;
}