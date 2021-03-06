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
import { Profession } from './profession';
import { Statistic } from './statistic';
import { Source } from './source';


export interface DefiningSkill { 
    id?: number;
    statisticID?: number | null;
    title?: string | null;
    description?: string | null;
    isBaseSkill?: boolean;
    professionID?: number;
    statistic?: Statistic;
    profession?: Profession;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}

