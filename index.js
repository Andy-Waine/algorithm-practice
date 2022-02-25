//check whether string is a palindrome
function checkPalindrome(inputString) {
    //string to array
    const x = inputString.split('')
    //reverse the array
    const y = x.reverse()
    //array to string
    const z = y.join('')
    //strict equality, boolean
    return z === inputString
};

//add
function add(input1, input2) {
    return input1 + input2;
};

//Given a Year, Return the Century it is in
function centuryFromYear(year) {
    const x = ((Number(year))/100)
    //Can also be done with Math.floor if you subtract 1
    return Math.ceil(x)
};

//Given an array of integers, find the pair of....
//adjacent elements that has the largest product and...
//return that product value:
function largestAdjacentProduct(inputArray) {

    //empty constructor to push product values
    const newArray = [];

    //loop through array until second to last position
    for(let i=0; i<inputArray.length-1; i++){
        //multiply item with its next position (this is why we subtracted 1 from inputArray.length)
        const x = inputArray[i] * inputArray[i+1]
        //pushes each product to previously empty constructor
        newArray.push(x)
    }

    return newArray.reduce((currentValue, newValue)=>{
        return Math.max(currentValue, newValue)
    })
};

//Sort By Height
//Scenario: Some people are standing in a row in a park. There are...
//trees between them which cannot be moved. Your task is to rearrange....
//the people by their heights (in the given array) in ascending order...
//without moving the trees (each represented by -1)...
const givenArray = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortHeight(a) {
    //removes trees
    const people = a.filter(element => element != -1)
    //sorts into ascending order
    const sortedPeople = people.sort((a,b)=> a-b)
    let i = -1
    return a.map(value => {
        if(value === -1) return -1
        i++
    })
}
