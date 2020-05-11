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
import { AlchemicalItem } from './alchemicalItem';


export interface CharacterAlchemicalItem { 
    characterSheetID?: number;
    alchemicalItemID?: number;
    amount?: number;
    characterSheet?: CharacterSheet;
    alchemicalItem?: AlchemicalItem;
    deleted?: boolean;
}

