// # code for Electronvoting 


let ary = []
let number = 0 



function toaddcondidate(condidate){
         
        
         ary.push([condidate] , number)
}



function toaddvote(vote){


    if ( ary.lenght == 0) {

        console.log("there is no such condidate")
    }

    for(let x = 0 ; x <ary.length ; x++){
        if(ary[x][0]==vote){
            ary[x][1] +=1
        }
    }
}



function  forresult(vote){
    if (ary.length ==0 ){
        console.log("there is no such condidat")
    }

    for( let x = 0 ; x < ary.length ; x++){
        if (ary[x][0]== vote ){
            console.log(x)
        }
    }
}



