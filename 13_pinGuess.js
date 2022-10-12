function pinGuess(pin,arr){
    for (var i=0; i<4;i++){
        if(arr[i]==pin){
            console.log("That is correct guess");
            break;
        }
        else
        console.log("That is wrong guess");
    }
}

pinGuess(0704,[4544,4444,0704,3467]);