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
import { GeneralGear } from './generalGear';
import { Source } from './source';


export interface Service { 
    id?: number;
    name?: string | null;
    time?: string | null;
    skillBase?: string | null;
    generalGearID?: number;
    generalGear?: GeneralGear;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}

