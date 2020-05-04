import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addSpaceToCapitalCharacters'
})

export class AddSpaceToCapitalsPipe implements PipeTransform {

    // "value" parameter is the param being used with the pipe.
    transform(value: string): string {
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return value.replace(/([A-Z])/g, ' $1').trim();
    }
}