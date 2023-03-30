import React from 'react';
import Add from "../assets/addAvatar.png";
import { useDropzone } from 'react-dropzone';

function DropzoneComponent(props) {
  const onDrop = (acceptedFiles => {
    props.setFile(acceptedFiles[0]);
    props.setUpload(true);
  });

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
    multiple:false
  });

  return (
    <div {...getRootProps()}>
        <img src={Add} alt="" style={{float:"left",width:"37px"}}/>
      <input {...getInputProps()} />
      <span>set your profile picture</span>
    </div>
  )
}

export default DropzoneComponent;