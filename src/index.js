module.exports = function toReadable (number) {
   let first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let second = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let third = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

   number = number.toString().split('');

   if (number.length === 1) { //number = ['8']
      let units = number[0];
      return `${first[units]}`;
   } else if (number.length === 2) { // number = ['1', '5']
      let units = number[1];
      let tens = number[0];

      if (tens === '1') {
         return `${first[tens + units]}`;
      } else {
         if (units === '0') {
            return `${second[tens - 2]}`;
         }
         return `${second[tens - 2]} ${first[units]}`;
      }
   } else { // number = ['1', '5', '3']
      let units = number[2];
      let tens = number[1];
      let hundreds = number[0];

      if (tens === '1') {
         return `${third[hundreds - 1]} ${first[tens + units]}`;
      } else if ((tens === '0')) {
         if (units === '0') {
            return `${third[hundreds - 1]}`;
         }
         return `${third[hundreds - 1]} ${first[units]}`;
      } else {
         if (units === '0') {
            return `${third[hundreds - 1]} ${second[tens - 2]}`;
         }
         return `${third[hundreds - 1]} ${second[tens - 2]} ${first[units]}`;
      }
   }
};