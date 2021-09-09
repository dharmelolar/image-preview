// import React, { Component } from "react";
import "./styles.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: {},
//       imagePreview_Url: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e) {
//     let reader = new FileReader();
//     let file = e.target.files[0];

//     reader.onload = () => {
//       console.log("reader res", reader.result);
//       this.setState({
//         file: file,
//         imagePreview_Url: reader.result
//       });
//     };
//     reader.readAsDataURL(file);
//   }
//   render() {
//     return (
//       <>
//         <div>
//           <input type="file" onChange={this.handleChange} />
//         </div>
//         <div>
//           Name: {this.state.file.name}
//           <br />
//           Size: {this.state.file.size}
//           <br />
//           Mime: {this.state.file.type}
//         </div>
//         <div className="img">
//           <img src={this.state.imagePreview_Url} alt="" />
//         </div>
//       </>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";

const App = () => {
  const [file, setFile] = useState({});
  const [imagePreview, setImagePreview] = useState("");

  const handleUpload = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onload = () => {
      setFile(file);
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="img-container">
      <input type="file" onChange={handleUpload} />
      <img src={imagePreview} alt="" className="img" />
      {imagePreview ? (
        <span>
          <p>Type:{file.type}</p>
          <p>Name: {file.name}</p>
          <p>Size: {file.size}</p>
        </span>
      ) : (
        "Upload Image"
      )}
    </div>
  );
};

export default App;
