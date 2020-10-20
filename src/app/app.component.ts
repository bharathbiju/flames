import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flames';
  bname:String;
  gname:String;
  cancel=0;
  total: number;

  tbname: string;
  tgname: string;
  temp: number;
  result: string;
  str: string;

 

  cal(){
    this.total=0
    this.cancel=0

    this.tbname=this.bname.split(" ").join("").toLowerCase()
    this.tgname=this.gname.split(" ").join("").toLowerCase()
    console.log("after",this.bname,this.gname)
    this.total=this.tbname.length+this.tgname.length
    for ( var i = 0; i < this.tbname.length; i++) {
      for (var j = 0; j < this.tgname.length; j++) {
          if (this.tbname[i] == this.tgname[j]) {
            this.tgname=this.tgname.replace( this.tgname[j],"!")

            this.cancel=this.cancel+2 
            break;// And here you assign s2[j+1] to s2[j], so you overwrite the \0 you just set previously.

          }

      }
  }
  
  console.log("thisword count :",this.total)
  this.total=this.total-this.cancel
  console.log("thisword count after sub :",this.total)
this.flame(this.total)

  }
  flame(total: number) {
    this.str="flames";
    this.temp=this.total
    while(this.str.length>1){
      if(this.total>this.str.length && (this.temp>1)){
        this.temp=this.total%this.str.length

        console.log("temp",this.temp)
      }
      else if(this.temp<=1 &&(this.str.length!=0) ){
        this.temp=this.str.length

      }
     

    this.str = this.str.substring(this.temp, this.str.length)+ this.str.substring(0,this.temp- 1) ;
    console.log(this.str)

    }
    
    document.getElementById("result").style.display = "block";
    

    // this.flameset(this.str)
    
  }
  flameset(str: string) {
    // switch(str) {
    //   case "f":
    //     this.result="Friend"
    //     break;
    //   case "l":
    //     this.result="Lover"
    //     break;
    //     case "a":
    //     this.result="Affection"
    //     break;
    //     case "l":
    //     this.result="Lover"
    //     break;
    //     case "l":
    //     this.result="Lover"
    //     break;
    //     case "l":
    //     this.result="Lover"
    //     break;
    //   default:
    //     // code block
    // }
  }



}
