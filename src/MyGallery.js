import React from "react";
import Gallery from "react-grid-gallery";

function MyGallery() {
  const IMAGES = [
    {
      src: "https://drive.google.com/uc?id=1ZRiApQZV6rxlAEtMBql7-xVwiKgfpheS",
      thumbnail:
        "https://drive.google.com/uc?id=1ZRiApQZV6rxlAEtMBql7-xVwiKgfpheS",
      thumbnailWidth: 339,
      thumbnailHeight: 300,
    },

    {
      src: "https://drive.google.com/uc?id=1CB0T5eF1ijK_QbY7Po_1OjFWI5V_FONB",
      thumbnail:
        "https://drive.google.com/uc?id=1CB0T5eF1ijK_QbY7Po_1OjFWI5V_FONB",
      thumbnailWidth: 240,
      thumbnailHeight: 300,
    },

    {
      src: "https://drive.google.com/uc?id=19Lo2hrnOOM-pw503jyap1D1GCj2rFWn2",
      thumbnail:
        "https://drive.google.com/uc?id=19Lo2hrnOOM-pw503jyap1D1GCj2rFWn2",
      thumbnailWidth: 387,
      thumbnailHeight: 300,
    },

    

    {
      src: "https://drive.google.com/uc?id=1RYmfr3Mdjrvg6AleWj5NDsHmmOJetbXO",
      thumbnail:
        "https://drive.google.com/uc?id=1RYmfr3Mdjrvg6AleWj5NDsHmmOJetbXO",
      thumbnailWidth: 399,
      thumbnailHeight: 300,
    },

    

    {
      src: "https://drive.google.com/uc?id=1dsDHajB8u0gRPY8FWEIULU9sFGzNL65l",
      thumbnail:
        "https://drive.google.com/uc?id=1dsDHajB8u0gRPY8FWEIULU9sFGzNL65l",
      thumbnailWidth: 375,
      thumbnailHeight: 300,
    },

    {
      src: "https://drive.google.com/uc?id=1Y4YLNdpW5qxTxQXF96P76T4qWIBtzjT_",
      thumbnail:
        "https://drive.google.com/uc?id=1Y4YLNdpW5qxTxQXF96P76T4qWIBtzjT_",
      thumbnailWidth: 270,
      thumbnailHeight: 300,
    },

    {
      src: "https://drive.google.com/uc?id=17lOXieUUn_c8GaXX3FrtIIgy4_DL29Xf",
      thumbnail:
        "https://drive.google.com/uc?id=17lOXieUUn_c8GaXX3FrtIIgy4_DL29Xf",
      thumbnailWidth: 240,
      thumbnailHeight: 300,
    },

    
  ];
  return (
    <div className="my-gallery">
      <Gallery images={IMAGES} enableImageSelection={false} rowHeight={300}/>
    </div>
  );
}

export default MyGallery;
