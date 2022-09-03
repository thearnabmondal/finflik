import React, { Component } from 'react'

export class AboutPage extends Component {
    render() {
        return (
            <div className="max-w-3xl mx-auto px-4 py-10">
                <section>
                    <h1 className="text-3xl font-bold text-slate-800">About Finflik</h1>
                    <p className="mt-4 text-slate-700 text-lg"><b>Finflik is the ultimate destination for news and information from around the globe.</b> Finflik is your one-stop shop for all the news you need with a constantly updated feed of the latest headlines. <a className="underline font-mono font-bold" href="https://twitter.com/thearnabmondal" target="_arnabtwitter">Arnab Mondal</a>, the creator of Finflik, is also a well-known name in the field of news and information. With his years of experience and expertise, <a className="underline font-mono font-bold" href="https://twitter.com/thearnabmondal" target="_arnabtwitter">Arnab</a> has created a truly unique and invaluable resource for anyone interested in staying up-to-date on the latest news.</p>
                </section>
                <section>
                    <h1 className="text-3xl font-bold text-slate-800 mt-10">About Arnab</h1>
                    <p className="mt-4 text-slate-700 text-lg"><a className="underline font-mono font-bold" href="https://twitter.com/thearnabmondal" target="_arnabtwitter">Arnab Mondal</a> is a full-stack web developer who also enjoys drawing in his spare time. He has a strong interest in web technologies and is always looking to improve his skills. He is a quick learner and is always willing to help others.</p>
                </section>
            </div>
        )
    }
}

export default AboutPage