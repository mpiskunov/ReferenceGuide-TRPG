/**
 * Witcher API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CharacterSheet } from './characterSheet';
import { CharacterWeapon } from './characterWeapon';
import { Rune } from './rune';


export interface CharacterRune { 
    id?: number;
    characterSheetID?: number;
    runeID?: number;
    characterWeaponID?: number | null;
    isEquipped?: boolean;
    characterSheet?: CharacterSheet;
    rune?: Rune;
    characterWeapon?: CharacterWeapon;
    deleted?: boolean;
}
