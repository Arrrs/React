import React from "react";

class CounterCl extends React.Component {
    state = {
        clicks: 1
    }

    inc = () => {
        let { clicks } = this.state;
        this.setState({clicks: clicks + 1})
    }
    
    render() {

        let { clicks } = this.state;
        for (let i = 1; i < 5; i++) {
        
        }
        return	<div>		
            <span onClick={this.inc}>{clicks}</span>
		</div>
        
    }
}
export default CounterCl;