// import React from 'react';

// const StaticMapView = ({ Address }) => {
//   // Set your Google Static Maps API key
//   const apiKey = 'YOUR_API_KEY';

//   // Set the width and height of the map image
//   const mapWidth = 400;
//   const mapHeight = 300;

//   // Generate the map URL based on the addresses
//   const generateMapUrl = (address) => {
//     const encodedAddress = encodeURIComponent(address);
//     return `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=14&size=${mapWidth}x${mapHeight}&markers=color:red%7C${encodedAddress}&key=${apiKey}`;
//   };

//   return (
//     <div>
//       {Address.map((address, index) => (
//         <img
//           key={index}
//           src={generateMapUrl(address)}
//           alt={`Map for ${address}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default StaticMapView;

