
import { ELEMENT_ERASE_THRESHOLD} from "../constants";

export const isPointCloseToLine = (x1, y1, x2, y2, pointX, pointY) => {
  const distToStart = distanceBetweenPoints(x1, y1, pointX, pointY);
  const distToEnd = distanceBetweenPoints(x2, y2, pointX, pointY);
  const distLine = distanceBetweenPoints(x1, y1, x2, y2);
  return Math.abs(distToStart + distToEnd - distLine) < ELEMENT_ERASE_THRESHOLD;
};

// export const isPointCloseToCircle = (x1, y1, x2, y2, pointX, pointY, ellipseData) => {
//   if (pointX < x1 || pointX > x2 || pointY < y1 || pointY > y2) {
//     return false;
//   }


//   const func = (centerX, centerY, radiusX, radiusY) => {
//     const focusDist = Math.sqrt(Math.abs(radiusX**2 - radiusY**2));
//     if(radiusX >= radiusY){
//       const focusAx = centerX - focusDist;
//       const focusAy = centerY;
//       const focusBx = centerX + focusDist;
//       const focusBy = centerY;

//       const scaledDistance1 = Math.sqrt((pointX - focusAx)**2 + (pointY - focusAy)**2)
//       const scaledDistance2 = Math.sqrt((pointX - focusBx)**2 + (pointY - focusBy)**2)
//       const sum = scaledDistance1 + scaledDistance2;
//       return sum

//     }
//     else{
//       const focusAx = centerX;
//       const focusAy = centerY + focusDist;
//       const focusBx = centerX ;
//       const focusBy = centerY - focusDist;
//     }
//   }
//   const centerX = (x1 + x2) / 2;
//   const centerY = (y1 + y2) / 2;
//   const radiusX = (x2 - x1) / 2;
//   const radiusY = (y2 - y1) / 2;
  

//   // const scaledDistanceX1 = Math.abs(pointX - centerX) / radiusX + ELEMENT_ERASE_THRESHOLD_CIRCLE;
//   // const scaledDistanceY1 = Math.abs(pointY - centerY) / radiusY + ELEMENT_ERASE_THRESHOLD_CIRCLE;

//   // const scaledDistanceX2 = Math.abs(pointX - centerX) / radiusX - ELEMENT_ERASE_THRESHOLD_CIRCLE;
//   // const scaledDistanceY2 = Math.abs(pointY - centerY) / radiusY - ELEMENT_ERASE_THRESHOLD_CIRCLE;

//   // console.log(scaledDistanceX1**2 + scaledDistanceY1**2, scaledDistanceX2**2 + scaledDistanceY2**2)
//   return scaledDistanceX > centerX
// };


// // export const isNearPoint = (x, y, x1, y1) => {
// //   return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5;
// // };

export const getArrowHeadsCoordinates = (x1, y1, x2, y2, arrowLength) => {
  const angle = Math.atan2(y2 - y1, x2 - x1);

  const x3 = x2 - arrowLength * Math.cos(angle - Math.PI / 6);
  const y3 = y2 - arrowLength * Math.sin(angle - Math.PI / 6);

  const x4 = x2 - arrowLength * Math.cos(angle + Math.PI / 6);
  const y4 = y2 - arrowLength * Math.sin(angle + Math.PI / 6);

  return {
    x3,
    y3,
    x4,
    y4,
  };
};

// export const midPointBtw = (p1, p2) => {
//   return {
//     x: p1.x + (p2.x - p1.x) / 2,
//     y: p1.y + (p2.y - p1.y) / 2,
//   };
// };

const distanceBetweenPoints = (x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

export const getArrowHeadCoordinates = (x1,y1,x2,y2, arrowLength) =>{
    const angle = Math.atan2(y2-y1, x2-x1);

    const x3 = x2 - arrowLength*Math.cos(angle - Math.PI/4);
    const y3 = y2 - arrowLength*Math.sin(angle - Math.PI/4);

    const x4 = x2 - arrowLength*Math.cos(angle + Math.PI/4);
    const y4 = y2 - arrowLength*Math.sin(angle + Math.PI/4);
    return {x3,y3,x4,y4};
};
