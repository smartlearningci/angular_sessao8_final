import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexPostPipe'
})
export class IndexPostPipePipe implements PipeTransform {

  transform(antes: string, posString: string = "0"): string {
    
    return  antes + " - Post nº " + posString ;

  }

}
