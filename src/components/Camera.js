import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Stack, Button } from "@mui/material";

function WebcamImage() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const btnStyles = {
    borderRadius: 16, // Rounded corners
    backgroundColor: "#20c997", // Pastel green color
    color: "white", // Text color
    minWidth: 100, // Remove default padding
    width: 200, // Set a fixed width
    height: 50, // Set a fixed height
    margin: 2, //Add padding
    "&:hover": {
      backgroundColor: "#20c997", // Change color on hover
    },
  };

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "image file name here";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            videoConstraints={{
              facingMode: isFacingFoward ? "user" : "environment",
            }}
          />
          <Button sx={btnStyles} onClick={capture}>
            Capture photo
          </Button>
        </>
      ) : (
        <>
          {/* <img src={img} alt="screenshot" />

          <button onClick={() => setImg(null)}>Retake</button> */}
        </>
      )}
      <Stack direction="column" alignItems="center" spacing={2}>
        {/* <img
          src={img}
          alt={"screenshot"}
          style={{ maxWidth: "100%", height: "auto" }}
        /> */}
        {img === null ? (
          <>
            <h3>Take a photo!</h3>
          </>
        ) : (
          <>
            {
              <img
                src={img}
                alt={"screenshot"}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            }
            <Button onClick={() => setImg(null)} sx={btnStyles}>
              Retake
            </Button>
          </>
        )}
      </Stack>
      <Button
        sx={btnStyles}
        onClick={() => setIsFacingForward(!isFacingFoward)}
      >
        Chang Camera Facing
      </Button>
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
