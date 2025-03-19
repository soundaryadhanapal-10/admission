// import React from 'react';

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div className='sample'>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick} style={buttonStyle}>
//       {children}
//     </button>
//   );
// }

// const buttonStyle = {
//   padding: '10px 20px',
//   margin: '10px',
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
// };

// class components

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
    );
  }
}

class Toolbar extends Component {
  render() {
    const { onPlayMovie, onUploadImage } = this.props;
    return (
      <div className="sample">
        <Button onClick={onPlayMovie}>Play Movie</Button>
        <Button onClick={onUploadImage}>Upload Image</Button>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    const { onClick, children } = this.props;
    return (
      <button onClick={onClick} style={buttonStyle}>
        {children}
      </button>
    );
  }
}

const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App;
