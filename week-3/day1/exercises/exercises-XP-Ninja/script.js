// exercise1
let Noussayba={
    FullName:"Noussayba Abbara",
    Mass:58,
    Height:1.58,
    BMI:function (){
    return this.Mass/(this.Height**2);
    }
}
let Oubay={
    FullName: "Oubay Abbara",
    Mass: 65,
    Height: 1.85,
    BMI:function (){
    return this.Mass/(this.Height**2);
    }
}
function compareBMI(Noussayba, Oubay) {
  if (Noussayba.BMI() > Oubay.BMI()) {
    console.log(`${Noussayba.FullName} a le BMI le plus élevé.`);
  } else if (Oubay.BMI() > Noussayba.BMI()) {
    console.log(`${Oubay.FullName} a le BMI le plus élevé.`);
  } else {
    console.log("Les deux personnes ont le même BMI.");
  }
}
console.log(`${Noussayba.BMI().toFixed(2)}  ${Oubay.BMI().toFixed(2)}`)

compareBMI(Noussayba,Oubay);//Oubay khoya khas yzid ytriniiiiiii

// exericse2
let gradesList=[65,65,65,65,65,65,65];
function findAvg(gradesList){
    let S = 0;
    for (i in gradesList){
        S+=gradesList[i];
    }  
    let avg = S/gradesList.length; 
    console.log(`${S} ${avg.toFixed(2)} ${gradesList.length}`)
    passed(avg)
}

function passed(avg){
    if (avg>= 65){
        console.log('you passed')
    }else if (avg<65){
        console.log('you failed and must repeat the course')
    }

}

findAvg(gradesList)

