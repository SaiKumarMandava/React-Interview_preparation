import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset,counterSelector, incrementCount } from '../redux/counter'
export default function Counter() {
const counterNumber = useSelector(counterSelector)
const dispatch = useDispatch()
const [count,setCount]=useState(1)


const handleDcrement=()=>{
    if(counterNumber === 0){
        return;
    }else{
        dispatch(decrement())
    }
}



const findRepeatedElements = (arr) => {
  const seen = new Set();
  const duplicates = new Set();
console.log(seen)
console.log(duplicates)
  arr.forEach((item) => {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  });

  // Convert duplicates Set to an array
  return Array.from(duplicates);
};

const array = [1, 2, 3, 4, 7, 1, 2, 4, 3];
console.log("Repeated Elements:", findRepeatedElements(array)); 
// Output: [1, 2, 4, 3]




const findRepeatedElementss = (str) => {
  const seen = new Set();
  const duplicates = new Set();
  const noSpaces = str.replace(/\s+/g, '');
  const reverse = noSpaces.split('').reverse().join('');
  console.log(reverse)

  // Iterate over each character in the string
  for (const char of str) {
    if (seen.has(char)) {
      duplicates.add(char);
    } else {
      seen.add(char);
    }
  }

  // Convert duplicates Set to an array
  return Array.from(duplicates);
};

const string = "Sai kumar";
console.log("Repeated Elements:", findRepeatedElementss(string));







const images = Array.from({ length: 63 }, (_, i) => `Image ${i + 1}`);

// console.log(images)
console.log(images.slice(0,21))
console.log(images.slice(21,42))

console.log(images.slice(42,63))

  return (
    <div>
        <p>{counterNumber}</p>
      <button
      onClick={()=>dispatch(increment())}
      >Increment</button>
        <button
      onClick={handleDcrement}
      
      >Decrement</button>
        <button
      onClick={()=>dispatch(reset())}
      >Reset</button>

      <input type='text' value={count} onChange={(e)=>setCount(e.target.value)}/>
      <button
      onClick={()=>dispatch(incrementCount(Number(count)))}
      >Increase By {count}</button>
    </div>
  )
}




// import React, { useState } from "react";

// const images = Array.from({ length: 63 }, (_, i) => ({
//   id: i + 1,
//   url: `img/${i + 1}.jpg`,
//   title: `Image ${i + 1}`,
//   year: 2018 + (i % 5), // Example year
//   description: `This is the description for Image ${i + 1}.`,
// }));

// export default function ImageGallery() {
//   const [selectedImage, setSelectedImage] = useState(null); // State to track clicked image

//   const handleClick = (image) => {
//     setSelectedImage(image); // Set the clicked image as selected
//   };

//   const handleBack = () => {
//     setSelectedImage(null); // Reset to gallery view
//   };

//   return (
//     <div>
//       {/* Conditional rendering based on selectedImage */}
//       {!selectedImage ? (
//         <div className="gallery">
//           {/* Render gallery */}
//           {images.slice(42, 63).map((item) => (
//             <figure
//               key={item.id}
//               className="column__item"
//               style={{ margin: "0px 0px -10px 0px" }}
//               onClick={() => handleClick(item)} // Handle click
//             >
//               <div className="column__item-imgwrap" data-pos="3">
//                 <div
//                   className="column__item-img"
//                   style={{ backgroundImage: `url(${item.url})` }}
//                 ></div>
//               </div>
//               <figcaption className="column__item-caption">
//                 <span>{item.title}</span>
//                 <span>{item.year}</span>
//               </figcaption>
//             </figure>
//           ))}
//         </div>
//       ) : (
//         <div className="content">
//           {/* Render selected image details */}
//           <button onClick={handleBack}>Back to Gallery</button>
//           <div className="content__item">
//             <h2 className="content__item-title">{selectedImage.title}</h2>
//             <div className="content__item-text">
//               <span>{selectedImage.description}</span>
//               <span>{selectedImage.year}</span>
//             </div>
//             <div
//               className="content__item-image"
//               style={{
//                 width: "300px",
//                 height: "300px",
//                 backgroundImage: `url(${selectedImage.url})`,
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

