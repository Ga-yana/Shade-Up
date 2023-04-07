let hexToRgb=document.querySelector("#hexCOut");
let hexToRgbBtn=document.querySelector("#HexConvertButton");


function randompickerbtn() {
  let colour=document.querySelector("#randomPicker");
  let option=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  let value="#";
  for (let i = 0; i < 6; i++) {
   value= value+option[Math.floor(Math.random()*16)];
  }
  colour.style.backgroundColor=value;
  document.querySelector("#randomValuePara").innerHTML=value;
}

function hexFindbtn() {
    let hex=document.querySelector("#hexInput").value;
    let showColour= document.querySelector("#color-box")
    if(hex.length==7)
    showColour.style.backgroundColor=hex;
    else document.querySelector("#hexInput").value="Add # or Enter 6 digits";
}

function RGBFindbtn() {
    let r=document.querySelector("#RInput").value;
    let g=document.querySelector("#GInput").value;
    let b=document.querySelector("#BInput").value;

    let showColour= document.querySelector("#rgb-color-box");
    showColour.style.backgroundColor=`rgb(${r},${g},${b})`;
}

function RangeSelector() {
    let r=document.querySelector("#RrInput").value;
    let g=document.querySelector("#GrInput").value;
    let b=document.querySelector("#BrInput").value;
   
    console.log(r,g,b);
    let showColour= document.querySelector("#range-color-box");
    showColour.style.backgroundColor=`rgb(${r},${g},${b})`;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  let r,g,b;
  let hexArray=[];
  r=this.slice(0,2);
  g=this.slice(2,4);
  b=this.slice(4,6);
  
//   console.log(r,g,b);

  function convert(hex){
    for (let i of hex) {
        if(i.toUpperCase() != i.toLowerCase()) {
       switch (i){
                case "A": i=10;
                         break;
                case "B": i=11;
                         break;
                case "C": i=12;
                         break;
                case "D": i=13;
                         break;
                case "E": i=14;
                         break;
                case "F": i=15;
                         break;
            }
            hexArray.push(i)
    }else
    hexArray.push(i);
  }
    console.log(hexArray);
    let newNumber=Math.pow(16,1)*hexArray[0]+Math.pow(16,0)*hexArray[1];
    return(newNumber);
  }
  return(`RGB(${convert(r)},${convert(g)},${convert(b)})`);
};

function hexConvbtn() {
  let hex=document.querySelector("#hexCInp").value;
  document.querySelector("#hexCOut").innerHTML=hex.convertToRGB();
}

function rgbConvbtn() {
  let rc=document.querySelector("#RCInput").value;
  let gc=document.querySelector("#GCInput").value;
  let bc=document.querySelector("#BCInput").value;
  
  let rgb=[rc,gc,bc];
  let mod, results;
  let result=[];
  console.log(rgb);
 
for (let col of rgb) {
    let total;
    let count=0;
    while (col>0) {
        mod=col%16;
        if(mod>9){
            switch (mod){
                case 10: mod="A";
                         break;
                case 11: mod="B";
                         break;
                case 12: mod="C";
                         break;
                case 13: mod="D";
                         break;
                case 14: mod="E";
                         break;
                case 15: mod="F";
                         break;
            }  
            total=total+`${mod}`;  
            ++count;
        } else
        {total=total+`${col%16}`;
        ++count;
        }
        col=Math.floor(col/16);
    }
    if(count==1)
    results=0+total.replace("undefined","");
    else
    results=total.replace("undefined","").split("").reverse().join("");
    console.log(results);
    result.push(results);
}
  console.log(result.join(""));
  document.querySelector("#rgbCOut").innerHTML="#"+result.join("");
}
