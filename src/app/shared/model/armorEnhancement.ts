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
import { Availability } from './availability';
import { Source } from './source';


export interface ArmorEnhancement { 
    id?: number;
    name?: string | null;
    stoppingPower?: number;
    bludgeoningResistant?: boolean;
    slashingResistant?: boolean;
    piercingResistant?: boolean;
    availability?: Availability;
    weight?: number;
    price?: number;
    effect?: string | null;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}
