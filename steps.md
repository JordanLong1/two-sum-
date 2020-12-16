multiple pointers 

one at beginning of array 

one at the end of the array 

while left < right 

create variable of our currentSum (array[left] + array[right])

if current sum is less than target

move up left 

if current sum is more than target move right down 

else return [left + 1, right + 1]; 


return empty array if no result is found