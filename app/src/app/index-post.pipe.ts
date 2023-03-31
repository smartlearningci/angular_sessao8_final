import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexPost'
})
export class IndexPostPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
