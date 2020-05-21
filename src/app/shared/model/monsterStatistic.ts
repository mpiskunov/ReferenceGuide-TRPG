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
import { Statistic } from './statistic';
import { Monster } from './monster';
import { Source } from './source';


export interface MonsterStatistic { 
    monsterID?: number;
    statisticID?: number;
    value?: number;
    statistic?: Statistic;
    monster?: Monster;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}
