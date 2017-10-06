function subArrayWithGivenSum( inputArray, givenSum ){ //returns -1 if no solution
    let sum = windowLeft = windowRight =0;
    sum = inputArray[0];
    while( windowLeft< inputArray.length-1 ){
        if( sum<givenSum ) {
            windowRight++;
            sum+=inputArray[windowRight]
        }
        if( sum>givenSum ){
            sum-=inputArray[windowLeft]
            windowLeft++;  
        } 
        if(sum==givenSum ) return [windowLeft,windowRight];
    }
    return -1;
}

subArrayWithGivenSum( [1, 4, 20, 3, 10, 5] , 33) // results [2, 4]
subArrayWithGivenSum( [1, 4, 0, 0, 3, 10, 5], 7) // results [1, 4]