import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: String): any {
    if (searchText == undefined || value.length == 0) {
      return value;
    }

    var newusers = [];

    for (var i = 0; i < value.length; i++) {
      if (value[i].username.startsWith(searchText) || value[i].age.toString().startsWith(searchText) || value[i].marks.toString().startsWith(searchText))
        newusers.push(value[i]);
        console.log(newusers)
    }
     pure:false


    return newusers;
  }

}
