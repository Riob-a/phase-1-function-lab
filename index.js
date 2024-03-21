// Test one
function distanceFromHqInBlocks(Destination){
   const HQ = 42;
   return Math.abs(Destination - HQ);
}
//Test two
function distanceFromHqInFeet(Destination){
    const feet = 264;
    const Block = distanceFromHqInBlocks(Destination);
    return Block * feet;
    
}
//Test three
function distanceTravelledInFeet(start,end){
    const feet = 264;
    const Distance = Math.abs(start - end)
    return Distance * feet;
}
//Test four
function calculatesFarePrice(start,end){
     const travel= distanceTravelledInFeet(start,end)

     if(travel <= 400){
        return 0;
     } 
     if( travel  > 400 && travel <= 2000 ){
        return 2.56;
     } 
     if(travel > 2000 && travel <= 2500){
        return 25;
     }  
     else{
        return 'cannot travel that far';
     }
   
}
