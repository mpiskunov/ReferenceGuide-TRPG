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


export interface Glyph { 
    id?: number;
    name?: string | null;
    effect?: string | null;
    weight?: number;
    cost?: number;
    deleted?: boolean;
    sourceID?: number | null;
    source?: Source;
}
