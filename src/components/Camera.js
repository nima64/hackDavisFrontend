import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Stack, Button } from "@mui/material";
import axios from "axios";

function WebcamImage() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);
  const [file, setFile] = useState(null);
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

  async function uploadImage(imageSrc) {
    if (!imageSrc) {
      alert("No image found.");
    } else {
      const image = await fetch(imageSrc);
      const imageBlob = await image.blob();
      //const imageURL = URL.createObjectURL(imageBlob);
      // const link = document.createElement("a");
      // link.href = imageURL;
      // link.download = "image file name here";
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);

      const formData = new FormData();
      formData.append("file", imageBlob);
      console.log(imageBlob);
      axios
        .post("http://localhost:8000/send-image/", formData)
        .then((response) => {
          console.log("Success:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log(imageBlob);
    }
  }

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    if (imageSrc !== null) {
      setImg(imageSrc);
      uploadImage(imageSrc);
    }
  }, [webcamRef]);

  const [isFacingFoward, setIsFacingForward] = useState(false);

  return (
    <div className="Container">
      {img === null ? (
        <>
          <>
            <h3>Take a photo!</h3>
          </>
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
        </>
      ) : (
        <>
          {/* <img src={img} alt="screenshot" />
          <button onClick={() => setImg(null)}>Retake</button> */}
          <h3>Nice photo!</h3>
        </>
      )}
      <Stack direction="column" alignItems="center" spacing={2}>
        {img === null ? (
          <>
            <Button sx={btnStyles} onClick={capture}>
              Capture photo
            </Button>
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
            <Button onClick={() => uploadImage(img)} sx={btnStyles}>
              Confirm?
            </Button>
            <Button onClick={() => setImg(null)} sx={btnStyles}>
              Retake
            </Button>
          </>
        )}
        {/* <img
          src={img}
          alt={"screenshot"}
          style={{ maxWidth: "100%", height: "auto" }}
        /> */}
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
