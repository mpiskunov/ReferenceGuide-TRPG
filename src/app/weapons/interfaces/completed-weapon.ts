import { IWeapon } from './weapons';
import { IWeaponEffects } from './weapon-effects';

export interface ICompletedWeapon {
    weapon:IWeapon;
    weaponEffects:IWeaponEffects[];
}