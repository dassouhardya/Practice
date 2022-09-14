/*function logger() {
    console.log("My name is Souhardya Das")
}

logger()
logger()
logger()
logger()*/

/*function veg(potato, tomato,brinjal,){
    console.log(potato,tomato,brinjal)

    const juice= `There is ${potato} potatoes, ${tomato} tomatoes, ${brinjal} brinjals  `
    return juice;
}

const applejuice=veg(5,4,2)
console.log(applejuice)*/

//function declaration
/*const age1=calcage1(1991)
function calcage1(birthyear){
    return 2022-birthyear

}

console.log(age1)

//function expression
const calcage2=function(birthyear){
    return 2022-birthyear
}
const age2=calcage2(1994)
console.log(age2)*/
//arrow function
/*const calcage3= birthyear => 2022-birthyear
const age3=calcage3(1992)
console.log(age3)*/

/*const ageuntilyoudrive=birthyear =>{
    const age=2022-birthyear;
    const agenow=18-age
    return agenow
}
console.log(ageuntilyoudrive(2009))*/
//function inside a function
/*function cutveg(vegetables){
    return vegetables*4
}

function veg(potato, tomato,brinjal,){
    const potatopieces=cutveg(potato)
    const tomatopieces=cutveg(tomato)
    const brinjalpieces=cutveg(brinjal)

    const juice= `There is ${potatopieces} potatoes, ${tomatopieces} tomatoes, ${brinjalpieces} brinjals  `
    return juice;
}

console.log(veg(4,3,5))*/

     
/*const calcavg = (a,b,c) => (a+b+c)/3
const dolphins=calcavg(85,54,41)
const koalas=calcavg(23,34,27)
console.log(dolphins,koalas)

const checkwinner=function (avgdolphins,avgkoalas){
    if(avgdolphins >=2* avgkoalas){
        console.log(`dolphins wins by ${avgdolphins} vs ${avgkoalas}`)
    }
    else if(avgkoalas >=2* avgdolphins){
        console.log(`koalas win by ${avgkoalas} vs  ${avgdolphins}`)
    }
    else {
        console.log(`No one is the winner`)
    }
}
checkwinner(dolphins,koalas)*/

/*const age=function(gradyear){
    return 2026-gradyear
}

const years=[2000,2002,2004,2006];
const age1=[age(years[0]), age(years[years.length-1])]
console.log(age1)*/

/*const calcTip=function(billval){
    if(billval >=50 && billval <=300){
    return billval*0.15
    }
    else{
        return billval*0.20
    }
}
const bill=[125,555,44]
const tip=[calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
console.log(tip)*/

/*const mark={
firstname:'Mark',
lastname: 'Miller',
mass:78,
height:1.69,
calcBMI:function(){
    this.bmi=this.mass/this.height**2
    return this.bmi
}
}
const john={
    firstname:'John',
    lastname:'Murtough',
    mass:85,
    height:1.74,
    calcBMI:function(){
        this.bmi=this.mass/this.height**2
        return this.bmi
    }
}
mark.calcBMI()
john.calcBMI()

console.log(mark.bmi,john.bmi)*/

/*const years=[2000,2003,2001,1996,1994]
const age=[]
for(let i=0; i<years.length; i++){
    age.push(2037- years[i])
}
console.log(age)*/

/*const calcTip=function(billval){
    if(billval >=50 && billval <=300){
    return billval*0.15
    }
    else{
        return billval*0.20
    }
}
const bill=[22,295,176,440,37,105,10,1100,86,52]
const tips=[]

for(let i=0; i<bill.length;i++){
    const tip=[calcTip(bill[i])]
    tips.push(tip)
}
console.log(bill,tips)

const calcavg=function(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum = sum+ arr[i]
    }
    return sum/arr.length
}

console.log(calcavg(2,3,5))*/

