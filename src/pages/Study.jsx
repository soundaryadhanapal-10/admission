// import React, { Component } from 'react'

// class Study extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//           first:1,
//           second:2
//         };
//         this.handleclick=this.handleclick.bind(this);
//     }
//     handleclick(){
//       this.setState({first:this.state.first+ 1});
//     }
//     componentDidMount(){
//       console.log("data received")
//     }
//     componentDidUpdate(prevprops,prevState){
//       if(prevState.first !== this.state.first){
//         console.log("First value changed");
//       }
//     }
//   render() {
//     return (
//       <div className='class'>
//         <h2>First:{this.state.first}</h2>
//         <h2>Second:{this.state.second}</h2>
//         <button onClick={this.handleclick}>add name</button>  


//           <button onClick={()=>this.setState({second:this.state.second + 1})}
//           >add name</button>
//           <div className='form'>
//             <form>

//             </form>

//           </div>

//       </div>
//     )
//   }
// }

// export default Study;


import React, { Component } from 'react';

class Study extends Component {
  render() {
    return (
      <div>
        <h1>Form with Like Button</h1>
        <Form />
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,  
      name: '',
      email: ''
    };
  }

  // componentDidMount is called once the component is mounted
  componentDidMount() {
    console.log("Component mounted successfully.");
  }

  // componentDidUpdate is called whenever the component updates
  componentDidUpdate(prevProps, prevState) {
    // Check if likeCount state has changed
    if (prevState.likeCount !== this.state.likeCount) {
      console.log("Like count has been updated:", this.state.likeCount);
    }

    // You can also log other state changes like name and email
    if (prevState.name !== this.state.name) {
      console.log("Name has been updated:", this.state.name);
    }
    if (prevState.email !== this.state.email) {
      console.log("Email has been updated:", this.state.email);
    }
  }

  // Like button click handler
  handleLikeClick = () => {
    this.setState((prevState) => ({
      likeCount: prevState.likeCount + 1,
    }));
  };

  // Handle form submit
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // You can also log the form data here
    console.log("Name:", this.state.name);
    console.log("Email:", this.state.email);
  };

  // Handle changes in the input fields
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className='post'>
        <form onSubmit={this.handleSubmit} method="POST">
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={this.handleInputChange} 
            />
          </label>
          <br />
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleInputChange} 
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <button onClick={this.handleLikeClick}>
          Like
        </button>
        <span> {this.state.likeCount}</span>
      </div>
    );
  }
} 

export default Study;
