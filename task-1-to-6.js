//1 object with proparty  
const object = {name: 'lima' , 
student : true ,
roll : 10 ,
fees: 1000 ,
subject:{
    Bangla: '1st' ,
    Bangla: '2st' ,
    English: '1st' ,
    English: '2st' ,
} ,
friends:['kona' , 'lota' , 'mony' ,'mita'] ,
totalpayment:function (para) {
    this.name = 'korima' ,
    totalFees = this.fees + para ;
    return totalFees ;
    
} ,

} 
const fees = object.totalpayment(500) ;
console.log (fees)
// 2 . tamplate string
const newObject = {
    name:'Korim' ,
    roll:20 ,
    subject:{
        Bangla: '1st' ,
        Bangla: '2st' ,
        English: '1st' ,
        English: '2st' ,
    } ,
    skills: {
        reading:
        { books: 
            {  Bangla: 'srestho choto golpo' ,
            Bangla: 'pother pacali' ,
            English: 'paradise lost' ,
            English: 'positive thinking' ,
            } 
        } ,
            playing:{
                football: '2 times' ,
                cricket: '4 times' ,

        }
    }

} ;
const myArray = ['korim' , 'rohim' , 'kamal' , 'jamal', 'munna' , 'kobir'] ;
const details = `${newObject.name} is a student. He is in class 4 . his favourit book ${newObject.skills.reading.books.Bangla}. he won football match ${newObject.skills.playing.football}. friend ${myArray[2]}` ;
console.log (details) ;
// 3.1 with out parameter 
const fun = () => 'hi'
console.log (fun ());
// 3.2 with one parameter
const funWithOnePara = num => num 
console.log (funWithOnePara (4)) ;
// 3.3 with two parameter
const funWithTwoPara = (num1 , num2) =>sum = num1 + num2 ;
console.log (funWithTwoPara(90 , 80)) ;
// 3.4 with multiple arrow function with two parameter
const multiplearrow = (number1 , number2) => {
   const num1 = number1 * 5
   const num2 = number2 * 5
   const sum = num1 + num2 ;
    return sum
}
const total = multiplearrow (2 , 4) ;
console.log (total) ;
//  4.map  divide eatch element by 7
const numbers = [7 , 14 , 21 , 28 , 35 , 42] ;
const output = numbers.map (numbers => numbers / 7) ;
console.log (output) ;
// 5.1: map 
// 5.2: foreach
const foreachNums = [7 , 14 , 21 , 28 , 35 , 42] ;
const output2 = foreachNums.forEach (foreachNum => console.log(foreachNum))
// 5.3: filter
const filterNums = [17 , 67 , 27 , 27 , 17 , 29 , 89 ] ;
const output3 = filterNums.filter (nums => nums === 17) ;
console.log (output3) ;
// 5.4: find
const findNums = [17 , 67 , 27 , 27 , 17 , 29 , 89 ] ;
const output4 = findNums.find (nums => nums == 17)
console.log (output4) ;
//6.1: distructuring array 
const array = [17 ,20 ,40 ,50 ,60 ,80, 90] ;
const [index0 , index1 , index2 , index3 , index4 , index5 , index6] = array ;
console.log (index1) ;
//6.2: distructuring object 
const object2 = {name: 'lima' , 
student : true ,
roll : 10 ,
fees: 1000 ,
subject:{
    Bangla: 'pother pacali' ,
    English: 'positive thinking' ,
} 
} ;
const {name , student , subject} = object2 ;
console.log (subject) ;
