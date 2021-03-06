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
import { Source } from './source';


export interface MountVehicle { 
    id?: number;
    name?: string | null;
    athletics?: number | null;
    controlMod?: number;
    speed?: string | null;
    health?: number;
    weight?: number;
    cost?: number;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}

