import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'image'})
export class ImagePipe implements PipeTransform {
	transform(src: string) {
	  if(!src){
	    return '../assets/noImage.png';
    }
    return src;
  }
}
