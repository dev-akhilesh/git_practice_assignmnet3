
function checkprime(number){
	let count=0;
    	for(let i=1;i<=number;i++){
        	if(number%i==0){
            	count++;
        	}
    	}
    	if(count==2){
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
