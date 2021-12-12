import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionText'
})
export class DescriptionTextPipe implements PipeTransform {

  transform(value: string): string {
    return '"'+value+'"';
  }

}
