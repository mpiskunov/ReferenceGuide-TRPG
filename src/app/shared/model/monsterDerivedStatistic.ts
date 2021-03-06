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
import { DerivedStatistic } from './derivedStatistic';
import { Monster } from './monster';
import { Source } from './source';


export interface MonsterDerivedStatistic { 
    monsterID?: number;
    derivedStatisticID?: number;
    value?: number | null;
    monster?: Monster;
    derivedStatistic?: DerivedStatistic;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}

