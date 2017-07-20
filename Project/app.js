var $btn = document.getElementById('btnSubmit');
var $input = document.form1.name;
var $list = document.getElementById('list_name');
var Member = (function () {
    /**
     * Constructor
     */
    function Member(name) {
        // code...
        this.$domElm = document.createElement('li');
        this.initContent(name);
        this.initButtonDel();
    }
    Member.prototype.initContent = function (name) {
        var $span = document.createElement('span');
        $span.innerHTML = name;
        this.$domElm.appendChild($span);
        //return $span;
    };
    Member.prototype.initButtonDel = function () {
        var $btnDel = document.createElement('button');
        $btnDel.innerHTML = 'Delete';
        //return $btnDel;
        $btnDel.addEventListener('click', function (e) {
            var $parentBtn = e.target.parentNode;
            $list.removeChild($parentBtn);
        });
        this.$domElm.appendChild($btnDel);
    };
    return Member;
}());
$btn.addEventListener('click', function () {
    var $newMember = new Member($input.value);
    $list.appendChild($newMember.$domElm);
});
function checkNull() {
    if ($input.value == '') {
        document.getElementById('btnSubmit').disabled = true;
    }
    else {
        document.getElementById('btnSubmit').disabled = false;
    }
}
// function addName(){
//   var name : string = $input.value;
//   var $newMember = document.createElement('li');
//   var $span  : any = document.createElement('span');
//   $span.innerHTML = name;
//   $newMember.appendChild($span);
//   var $btnDel : any = document.createElement('button');
//   $btnDel.innerHTML = "Delete";
//   $newMember.appendChild($btnDel);
//   $list.appendChild($newMember);
//   $btnDel.addEventListener('click',function(){
//     var $parentElm = this.parentNode;
//     $list.removeChild($parentElm);
//   });
// }
//document.getElementById('btnSubmit').addEventListener('click',addName);
// class Car {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     run(speed: number = 0) {
//         console.log(`${this.name} run with ${speed}km/h.`);
//     }
//      public getName(){
//       return this.name;
//     }
// }
// class BMW extends Car {
//     constructor(name: string) { super(name); }
//     run(speed = 5) {
//         console.log("BMW...");
//         super.run(speed);
//     }
// }
// var car1 = new BMW("FS100");
// car1.run(100);
// console.log(car1.getName());
// var arr = [3, 5, 7];
// arr.foo = "hello";
// for (var i in arr) {
//    console.log(i); 
//    // output:  "0", "1", "2", "foo"
// }
// for (var i of arr) {
//    console.log(i); 
//    //output: "3", "5", "7","hello"
// } 
