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
import { Effect } from './effect';


export interface CharacterEffect { 
    id?: number;
    characterSheetID?: number;
    effectID?: number;
    currentDuration?: number;
    currentValue?: number;
    characterSheet?: CharacterSheet;
    effect?: Effect;
    deleted?: boolean;
}

