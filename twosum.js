const twoSum = function(numbers, target) {
    
    let left = 0; 
     
     let right = numbers.length - 1; 
     
     while (left < right) {
         let currentSum = numbers[left] + numbers[right]; 
         
         if (currentSum < target) {
             left++
         } else if (currentSum > target) {
             right--
         } else {
             return [left + 1, right + 1]; 
         }
     }
     return []; 
 }