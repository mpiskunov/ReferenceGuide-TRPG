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
import { AlchemySkillLevel } from './alchemySkillLevel';
import { Source } from './source';


export interface Formulae { 
    id?: number;
    name?: string | null;
    alchemyDC?: number;
    time?: string | null;
    cost?: string | null;
    skillLevel?: AlchemySkillLevel;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}

