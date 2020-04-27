// Angular Modules
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class Constants {
    public readonly API_ENDPOINT: string = 'https://witcher-api.pisky.me/api';
    public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
}