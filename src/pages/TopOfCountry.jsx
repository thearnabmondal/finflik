import React, { Component } from 'react'
import NewsCard from '../components/NewsCard'
import NewsSkeleton from '../components/NewsSkeleton'
import { useParams } from "react-router-dom";

const axios = require('axios');

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
export class TopOfCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newss: [],
            isloading: true
        };
    }

    topNewsOfCountry = (country) => {
        axios.get("/top-headlines?country=" + country + "&token=" + process.env.REACT_APP_GNEWS_API_KEY).then((response) => {
            this.setState({
                newss: response.data.articles,
                isloading: false
            })
        });
    }

    componentDidMount() {
        const { countrycode } = this.props.params
        this.topNewsOfCountry(countrycode)
    }

    componentDidUpdate() {
        const { countrycode } = this.props.params
        this.topNewsOfCountry(countrycode)
    }
    render() {
        const { countrycode } = this.props.params
        return (
            <div className="max-w-3xl mx-auto px-4 py-10">
                <section className="flex flex-col sm:flex-row px-8 py-12 rounded-md bg-slate-900">
                    <img  className="w-20 sm:w-44" src={"https://countryflagsapi.com/png/" + countrycode } alt={countrycode} />
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                        <h1 className="text-3xl text-white font-sans font-bold">Top Headlines</h1>
                        <p className="text-slate-300 mt-2">Keep up with the latest <b className="uppercase">{countrycode}</b> news with our curated list of top headlines. Stay informed on politics, business, sports, and more with our trustworthy <b className="uppercase">{countrycode}</b> news sources.</p>
                    </div>
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

export default withParams(TopOfCountry)