import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsCard extends Component {
    static propTypes = {
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }

    render() {
        const { image, title, description, url } = this.props;
        return (
            <div className="bg-white hover:bg-slate-50 shadow-lg hover:shadow-xl duration-300">
                <img src={image} alt={title} className="w-full"/>
                <div className="p-2">
                    <h2 className="font-bold text-xl text-slate-800">{title}</h2>
                    <p className="text-sm text-slate-700">{description}</p>
                    <a href={url} className="text-slate-600 font-bold" target="_finfliknews">Read More...</a>
                </div>
            </div>
        )
    }
}

export default NewsCard