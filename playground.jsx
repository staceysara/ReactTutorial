var Button =ReactBootstrap.Button;
var MyBtn=React.createClass({
  render : function(){
    return(
      <Button {...this.props}>
        click
      </Button>
    )
  }
});
React.render(<MyBtn sStyle='primary' bsSize='large'/>,document.getElementById('demo'));


//----------------
//
// var Message = React.createClass({
//   render: function(){
//     return (
//       <div id='message'>
//         <p className='text'>{this.props.text}</p>
//       <p className='text'>tutorials</p>
//       </div>
//     );
//   }
// });
//
// React.render(<Message text='peace'/>, document.getElementById('demo'));

//---------------------
// var Hello = React.createClass({
//
//   render:function(){
//     return (<h1>Hello World!</h1>)
//   }
//
// });
//
// var mountNode = document.getElementById('demo');
// React.render(<Hello/>,mountNode);




//-----------------
// //a react bootstrap component
// var Alert = ReactBootstrap.Alert;
//
// //react component: alert
// const alertInstance = (
//   <Alert bsStyle = 'success'>
//     <strong>It Works!</strong>Good job, you are ready to start tutorial.
//   </Alert>
// );
//
// //reference an item in the dom
// var mountNode = document.getElementById('demo');
//
// //render the component with react
// React.render(alertInstance,mountNode);
//---------------------------------
// var Message = React.createClass({
//   render: function(){
//     return (
//
//       <div>
//         <p className='text'>easydevtuts</p>
//         <p className='text'>tutorials</p>
//       </div>
//
//     );
//   }
// });
//
// React.render(<Message />, document.getElementById('demo'));
