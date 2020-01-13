const generate = (numRows) => {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  let result = [[1], [1, 1]];


   for (let i = 2; i < numRows; i++) {
   
       let previousArr = result[result.length - 1];

       let newArr = [1];

         for (let j = 0; j < previousArr.length - 1; j++) {
           let sum = previousArr[j] + previousArr[j + 1];
           newArr.push(sum);
         }

         newArr.push(1);

         result.push(newArr);
       }
       return result;
};

module.exports = generate;