import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);











// import React from "react"
// import ContentLoader from "react-content-loader"

// const Skeleton = (props) => (
//   <ContentLoader 
//     className="pizza-block"
//     speed={2}
//     width={280}
//     height={465}
//     viewBox="0 0 280 465"
//     backgroundColor="#f3f3f3"
//     foregroundColor="#ecebeb"
//     {...props}
//   >
//     <circle cx="133" cy="95" r="90" /> 
//     <rect x="110" y="349" rx="0" ry="0" width="1" height="6" /> 
//     <rect x="1" y="202" rx="15" ry="15" width="270" height="47" /> 
//     <rect x="0" y="267" rx="15" ry="15" width="270" height="88" /> 
//     <rect x="4" y="377" rx="15" ry="15" width="91" height="34" /> 
//     <rect x="118" y="367" rx="15" ry="15" width="151" height="51" />
//   </ContentLoader>
// )

export default Skeleton