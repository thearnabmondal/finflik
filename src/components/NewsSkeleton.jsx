import React, { Component } from 'react'

export class NewsSkeleton extends Component {
    render() {
        return (
            <div className="bg-slate-300 p-4 w-full shadow-lg animate-pulse">
                <div className="h-44 bg-slate-400 rounded"></div>
                <div className="mt-4 h-6 w-11/12 bg-slate-400 rounded"></div>
                <div className="mt-2 h-6 w-5/6 bg-slate-400 rounded"></div>
            </div>
        )
    }
}

export default NewsSkeleton