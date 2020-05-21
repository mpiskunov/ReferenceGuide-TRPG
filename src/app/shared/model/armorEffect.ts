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
import { Armor } from './armor';
import { Effect } from './effect';
import { Source } from './source';


export interface ArmorEffect { 
    armorID?: number;
    effectID?: number;
    armor?: Armor;
    effect?: Effect;
    value?: string | null;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}

