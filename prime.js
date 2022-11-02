
function checkprime(num){
	let count=0;
    	for(let i=i;i<=num;i++){
        	if(num%i==0){
            	count++;
        	}
    	}
    	if(count==0){
        	return true;
    	}
    	else{
        	return false;
    	}

}

let ans=checkprime(13);
if(ans==true){
	console.log("Prime");
}
else{
	console.log("Not Prime")
}
