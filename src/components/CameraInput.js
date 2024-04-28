import React, { useState } from 'react'; 

function CameraInput() {
    const [image, setImage] = useState(null); 

    const handleCapture = (e) => {
        const file = e.target.files[0]; 
        if (file) {
            const imageUrl = URL.createObjectURL(file); 
            setImage(imageUrl);
        }
    }

    return (
        <div>
            <input 
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleCapture}
            />
            {image && <img src={image} alt="Snapshot" style={{ width: '100%' }} />}
        </div>
    )
}

export default CameraInput;