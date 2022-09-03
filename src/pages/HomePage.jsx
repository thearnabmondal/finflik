import React, { Component } from 'react'
import NewsCard from '../components/NewsCard'
import NewsSkeleton from '../components/NewsSkeleton'
const axios = require('axios');

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newss: [],
            isloading: true
        };
    }
    componentDidMount() {
        axios.get("/top-headlines?lang=en&token=" + process.env.REACT_APP_GNEWS_API_KEY).then((response) => {
            this.setState({
                newss: response.data.articles,
                isloading: false
            })
        });
    }
    render() {
        return (
            <div className="max-w-3xl mx-auto px-4 py-10">
                <section className="px-8 py-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md">
                    <h1 className="text-3xl text-white font-sans font-bold">Stay informed with Finflik</h1>
                    <p className="mt-2 text-lg text-gray-200 font-sans font-semibold">Finflik is the premier destination for news and information from around the globe. Finflik is your one-stop shop for all the news you need with a constantly updated feed of the latest headlines.</p>
                </section>
                <section className="w-full my-5 grid md:grid-cols-2 gap-8">
                    {this.state.isloading ? (
                        <>
                            <NewsSkeleton />
                            <NewsSkeleton />
                            <NewsSkeleton />
                            <NewsSkeleton />
                        </>
                    ) : this.state.newss.map(news => <NewsCard key={news.url} title={news.title} description={news.description} url={news.url} image={news.image} />)}
                </section>
            </div>
        )
    }
}

export default HomePage