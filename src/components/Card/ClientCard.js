import React, { Component } from 'react'

export class ClientCard extends Component {
    render() {
        return (
            <div className='clientCard'>
                <div className='clientCard__heading'>
                    <h4 className='clientCard__title'>{this.props.title}</h4>
                    <p className='clientCard__category'>{this.props.category}</p>
                </div>
                <div>{this.props.content}</div>
            </div>
        )
    }
}

export default ClientCard
