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
import { MountVehicle } from './mountVehicle';
import { CharacterSheet } from './characterSheet';


export interface CharacterMountVehicle { 
    id?: number;
    characterSheetID?: number;
    mounts_VehicleID?: number;
    health?: number;
    weight?: number;
    cost?: number;
    characterSheet?: CharacterSheet;
    mount_Vehicle?: MountVehicle;
    deleted?: boolean;
}

