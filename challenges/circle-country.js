/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  r.reduce((acc, rad, i) => {
    let startDistance = Math.sqrt(Math.pow(x[i]-start_x,2) + Math.pow(y[i]-start_y,2))
    let endDistance = Math.sqrt(Math.pow(x[i]-end_x,2) + Math.pow(y[i]-end_y,2))
    return (startDistance < r && endDistance > r) || (startDistance > r && endDistance < r) ? acc++ : acc
  },0)
}





module.exports = circleCountry;






function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let startDis = [], endDis = [], startCircle = [], endCircle = [], commonCircle = [], counter = 0;
  for(let i=0; i<x.length; i++){
    startDis.push(Math.sqrt(Math.pow((x[i]-start_x),2) + Math.pow((y[i]-start_y),2)));
    endDis.push(Math.sqrt(Math.pow((x[i]-end_x),2) + Math.pow((y[i]-end_y),2)));
  }
  for(let j=0; j<r.length; j++){
    if(startDis[j]<r[j]) startCircle.push(j);
    if(endDis[j]<r[j]) endCircle.push(j);
  }
  if(!startCircle.length || !endCircle.length) return startCircle.length + endCircle.length;
  startCircle.forEach((sCircle) =>{
    endCircle.forEach((eCircle) => {
      if(sCircle === eCircle) commonCircle.push(sCircle)
    })
  })
  let smallestCommonCircle = commonCircle.reduce(function(prev,cur){
    return r[prev] < r[cur] ? prev : cur;
  });
  let allCircles = startCircle.concat(endCircle)
  for(let k = 0; k<allCircles.length; k++){
    if(r[allCircles[k]] < r[smallestCommonCircle]) counter ++;
  }
  return counter;
}





// function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
//   return r.reduce((acc, rad, i) => {
//     const startDistance = Math.sqrt(Math.pow(x[i]-start_x, 2) + Math.pow(y[i]-start_y,2));
//     const endDistance = Math.sqrt(Math.pow(x[i]-end_x, 2) + Math.pow(y[i]-end_y,2));
//     return (startDistance < rad && endDistance > rad) || (startDistance > rad && endDistance < rad) ? acc++ : acc
//   },0)
// }