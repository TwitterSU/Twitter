import React, { Component } from 'react'

export default class Hashtag extends Component {
    render() {
        return (
            <div className='field'>
                <label>
                    Hash tags
                </label>
                <textarea rows='1' placeholder='{TEST}' name='hashTags' disabled />
            </div>
        )
    }
}
