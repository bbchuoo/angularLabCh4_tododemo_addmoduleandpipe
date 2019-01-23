import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDone'
})
export class TodoDonePipe implements PipeTransform {

  transform(itemDone: boolean): any {
    if (itemDone) {
      return '(已完成)';
    } else if (!itemDone) {
      return '(未完成)';
    }
    return '';
  }

}
