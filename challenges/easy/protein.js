/*

1. RNA sequence is given as a string
2. RNA sequence is split into sub sequences of 3
3. for Each codon:
  Check to see if codon is one of the stop codons:
    -> yes: break;
    -> no: translate and push to result array
4. return result array


AUG	Methionine
UUU, UUC	Phenylalanine
UUA, UUG	Leucine
UCU, UCC, UCA, UCG	Serine
UAU, UAC	Tyrosine
UGU, UGC	Cysteine
UGG	Tryptophan
UAA, UAG, UGA	STOP

*/

const TRANSLATOR = {
  Methionine: ["AUG"],
  Phenylalanine: ["UUC" , "UUU"],
  Leucine: ["UUA", "UUG"],
  Serine: ["UCU", "UCC", "UCA", "UCG"],
  Tyrosine: ["UAU", "UAC"],
  Cysteine: ["UGU", "UGC"],
  Tryptophan: ["UGG"],
  STOP: ["UAA", "UAG", "UGA"]

}


function translate(sequence) {
  let codons = getCodons(sequence);
  
  let aminoAcids = Object.keys(TRANSLATOR);
  let translated = [];
  for (let idx = 0; idx < codons.length; idx += 1) {
    let codon = codons[idx];
    if (!validateCodon(codon)) throw new Error("Invalid codon");

    for (let idy = 0; idy < aminoAcids.length; idy += 1) {
      let amino = aminoAcids[idy]
      if (TRANSLATOR[amino].includes(codon)) {
        if (amino === "STOP") return translated;
        translated.push(amino);
        
      }
    }


  }
  return translated;
}

function validateCodon(codon) {
  let aminoAcids = Object.keys(TRANSLATOR);
  for (let idy = 0; idy < aminoAcids.length; idy += 1) {
    let amino = aminoAcids[idy]
    if (TRANSLATOR[amino].includes(codon)) {
      return true;
      
    }
  }
  return false;
}
function getCodons(sequence) {
  if (!sequence) return [];

  
  let result = [];
  while (sequence.length) {
    result.push(sequence.slice(0, 3));
    sequence = sequence.slice(3);
  }
  return result;
}

module.exports = translate;