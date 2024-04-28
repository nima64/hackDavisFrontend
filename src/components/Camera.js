import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

function WebcamImage() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image file name here'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    downloadImage(imageSrc);
  }, [webcamRef]);
    const [isFacingFoward, setIsFacingForward] = useState(false);

  return (
    <div className="Container">
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            // videoConstraints={videoConstraints}
              videoConstraints={{facingMode:isFacingFoward? "user": "environment"}}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />

          <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}
      <button onClick={() => setIsFacingForward(!isFacingFoward)}>Chang Camera Facing</button>
    </div>
  );
}

// const WebcamCapture = (props) => {
//   const webcamRef = React.useRef(null);
//   const capture = React.useCallback(
//     () => {
//       const imageSrc = webcamRef.current.getScreenshot();
//     },
//     [webcamRef]
//   );

//   const [isFacingFoward, setIsFacingForward] = useState(false);

//   // useEffect(() => {
//   //   console.log(`Component is now ${isOn ? 'On' : 'Off'}`);
//   // }, [isOn]);
//   return (
// <Webcam
//     audio={false}
//     height={200}
//     screenshotFormat="image/jpeg"
//     width={200}
//     ref={webcamRef}
//     videoConstraints={{facingMode:isFacingFoward? "user": "environment"}}
//   >
//     {({ getScreenshot }) => (
//       <>
//       <button onClick={capture}>Capture photo</button>
//       <button
//         onClick={() => setIsFacingForward(!isFacingFoward)}
//       >
//         change camera facing
//       </button>
//       <img src={imageSrc} alt="Captured" />
//       </>
//     )}
//   </Webcam>
//   );

  
// }
export default WebcamImage;