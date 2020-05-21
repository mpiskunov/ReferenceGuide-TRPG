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
import { SkillLevel } from './skillLevel';
import { SpellTypeClassification } from './spellTypeClassification';
import { Source } from './source';


export interface Invocation { 
    id?: number;
    name?: string | null;
    staminaCost?: number | null;
    range?: string | null;
    duration?: string | null;
    defense?: string | null;
    deity?: string | null;
    skillLevel?: SkillLevel;
    spellTypeClassification?: SpellTypeClassification;
    effect?: string | null;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}
