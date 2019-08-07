import React, { Component } from 'react'

 class Foreachs extends Component {
    render() {
        console.log(this.props)
        let {arr} = this.props
        return (
            <div>
                {arr.map((el,index)=><span key={index}>{el}</span>)}
            </div>
        )
    }
}

export default Foreachs
