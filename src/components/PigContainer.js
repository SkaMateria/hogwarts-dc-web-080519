import React, {Component} from 'react'
import Pig from './Pig'

class PigContainer extends Component {
    render(){
        console.log(this.props.hogs)
        return (
            <div>
                {this.props.hogs.map( (hog) => 
                    <Pig hog={hog}/>
                )}
            </div>
        )
    }
}

export default PigContainer