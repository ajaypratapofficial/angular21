import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(users: string[]): string {

    console.log('Impure pipe executed');

    return users.join(', ');
  }
}



