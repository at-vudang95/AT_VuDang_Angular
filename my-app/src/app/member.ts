export class Member {

  $domElm : any;

  /**
   * Constructor
   */
  constructor(name : string) {
    // code...
    this.$domElm = document.createElement('li');
    this.initContent(name);
    this.initButtonDel();
  }


  initContent(name : string){
    let $span = document.createElement('span');
    $span.innerHTML = name;
    this.$domElm.appendChild($span);
    //return $span;
  }

  initButtonDel(){
    let $btnDel = document.createElement('button');
    $btnDel.innerHTML = 'Delete';
    
    //return $btnDel;
    // $btnDel.addEventListener('click',(e)=>{
    //   let $parentBtn = e.target.parentNode;
    //   $list.removeChild($parentBtn);
    // });
    // this.$domElm.appendChild($btnDel);
  }


}
