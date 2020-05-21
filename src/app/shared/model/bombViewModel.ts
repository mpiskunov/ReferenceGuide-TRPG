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
import { BombFormulae } from './bombFormulae';
import { BombFormulaeComponent } from './bombFormulaeComponent';
import { Bomb } from './bomb';


export interface BombViewModel { 
    bomb?: Bomb;
    bombFormulae?: BombFormulae;
    bombFormulaeComponents?: Array<BombFormulaeComponent> | null;
}

