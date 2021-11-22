import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateVoyage'
})
export class DateVoyagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
