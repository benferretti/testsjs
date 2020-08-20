/*
UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine


CCGUCGUUGCGCUACAGC
CCUCGCCGGUACUUCUCG
*/

function traduction(arn) {
  arn = arn.match(/.{1,3}/g);
  for(let index in arn) {
    if (arn[index] === "UCU" || arn[index] === "UCC" || arn[index] === "UCA" || arn[index] === "UCG" || arn[index] === "AGU" || arn[index] === "AGC") {
        arn[index] = "Sérine";
    } else if (arn[index] === "CCU" || arn[index] === "CCC" || arn[index] === "CCA" || arn[index] === "CCG") {
        arn[index] = "Proline";
    } else if (arn[index] === "UUA" || arn[index] === "UUG") {
        arn[index] = "Leucine";
    } else if (arn[index] === "UUU" || arn[index] === "UUC") {
        arn[index] = "Phénylalanine";
    } else if (arn[index] === "CGU" || arn[index] === "CGC" || arn[index] === "CGA" || arn[index] === "CGG" || arn[index] === "AGA" || arn[index] === "AGG") {
        arn[index] = "Arginine";
    } else if (arn[index] === "UAU" || arn[index] === "UAC") {
        arn[index] = "Tyrosine";
    }
  }
  return arn
}


console.log(traduction("CCGUCGUUGCGCUACAGC"));
console.log(traduction("CCUCGCCGGUACUUCUCG"));