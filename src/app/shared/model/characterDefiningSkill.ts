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
import { DefiningSkill } from './definingSkill';
import { CharacterSheet } from './characterSheet';


export interface CharacterDefiningSkill { 
    characterSheetID?: number;
    definingSkillID?: number;
    value?: number;
    characterSheet?: CharacterSheet;
    definingSkill?: DefiningSkill;
    deleted?: boolean;
}

