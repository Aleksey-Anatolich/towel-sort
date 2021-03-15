
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix !==undefined) {
       matrix.map((elem, index) =>{
           if (index%2===0) return elem;
           else return elem.reverse();
       })
       return matrix.flat()
   }

    return [];
}
