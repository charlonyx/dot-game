import React from 'react';

function renderDots(dots){
	return dots.map((row, rowIndex) => (
	<div className='row' key={rowIndex}>
		{dots[rowIndex].map((dot, index) => (
		<div className='dot' key={index}>
		</div>
		))}
	</div>
	));
}

class Grid extends React.Component{
	render(){
		var dotsArray = new Array(this.props.size).fill(new Array(this.props.size).fill(0));
		const dots = renderDots(dotsArray);
		return (
			<div className='grid'>
			{dots}
			</div>
		);
	}
}

class App extends React.Component {
	constructor(){
		super();
		this.state={
			gridSize:4,
			hasStarted: false
		}
	};
	
	handleSizeChange(e){
		this.setState({
			gridSize: parseInt(e.target.value)
		})
	}
	
   render() {
      return (
         <div className='game'>
			<div className='start'>
            Choose a grid size: 
				<input id='gridSizeRange' type='range' min='4' max='10' 
				value={this.state.gridSize} onChange={(e) =>{this.handleSizeChange(e)}}></input>
				<div className='gridSize'>{this.state.gridSize}</div>
			</div>
			<div>
				<Grid size={this.state.gridSize}
				/>
			</div>
         </div>
		 
      );
   }
}

export default App;