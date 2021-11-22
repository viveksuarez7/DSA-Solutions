function sameFrequency(num1,num2){
    const numStr1 = num1.toString();
    const numStr2 = num2.toString();
    let  freqCount1 = {};
    let  freqCount2 = {};

    if(numStr1.length!==numStr2.length){
        return false;
    }

    for(val of numStr1){
        freqCount1[val]=(freqCount1[val]||0)+1;
    }
    for(val of numStr2){
         freqCount2[val]=(freqCount2[val]||0)+1;
    }
    console.log(freqCount1);
    console.log(freqCount2);

    for(key in freqCount1){
      if(freqCount1[key]!==freqCount2[key]){
          return false;
      }
    }

  return true;
}


console.log(sameFrequency(3589578,5879385));