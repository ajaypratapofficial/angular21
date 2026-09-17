import { Pipe, PipeTransform } from "@angular/core";

// This is a decorator used to tell Angular:
// This class is an Angular pipe.
@Pipe({
  name: "capitalize", // This is the name that you will use in the HTML.
})
export class CapitalizePipe implements PipeTransform {
  //This class follows the structure required by Angular's PipeTransform interface.

  // This is an Angular interface that requires the pipe to have a method called: transform
  transform(value: string, prefix: string = ""): string {
    // value : This is the value coming into the pipe.
    // prefix: This is an optional prefix that can be added before the capitalized value.
    
    if (!value) {
      return "";
    }

    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);

    return prefix + " " + capitalized;
  }
}
