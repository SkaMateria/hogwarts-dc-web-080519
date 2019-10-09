import React, {Component} from 'react'

class Pig extends Component {
    render(){
        let hog = this.props.hog
        let greasiness = (hog.greased === true ? "You're goddamn right it is!" : "Hell no! It's BONE DRY!")
        return(
            <div>
                <h1>
                    {`${hog.name}`}
                </h1>
                <text>
                    {`This fat, lil fucker weighs ${hog.weight} tons!!!`}
                    <br></br>
                    {`It... yes, IT in all of IT's uselessness has utterly failed to earn anything higher than a ${hog.highestMedal} medal.`}
                    <br></br>
                    {`I know what you're wondering. Is it greasy? ${greasiness}`}
                    <br></br>
                    {`Worst of all, it loves talking about ${hog.specialty}. I mean, it's cool to have a hobby, but it's such a fuckin' thing with this one!`}
                </text>
                <br></br>
            </div>
        )
    }
}

export default Pig