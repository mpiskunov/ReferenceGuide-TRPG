import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceValueIfExists'
})

export class ReplaceWithValuePipe implements PipeTransform {

    // "value" parameter is the param being used with the pipe.
    // "effectValue" parameter is what will replace the string.
    transform(value: string, effectValue: string): string {
        if(value.includes('(x)') && effectValue)
            return value.replace('(x)', `(${effectValue})`);
        return value;
    }
}