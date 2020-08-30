import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceUnderscore'
})
export class SpaceUnderscorePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
