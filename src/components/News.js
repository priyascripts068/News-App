import React , {useState , useEffect} from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import PropTypes from 'prop-types'

const News =(props)=> {

    const [articles , setArticles]=useState([]);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(true);
    const [totalResults , setTotalResults] =useState(0);
    // constructor(){
    //     super();
    //     this.state={
    //         articles : [],
    //         // initially we dont have any articles
    //         page: 1,
    //      totalResults:0
    //     }
    // }
    const updatenews=async()=>{
      const url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=e0d59cc7b0054913961f61c4fcb1a1bf&page=${page}&pageSize=9`;
       const data=await fetch(url);
       setLoading(true);
       const parseddata= await data.json();
       setArticles(parseddata.articles);
       setTotalResults(parseddata.totalResults);
       setLoading(false);
    }
    useEffect(()=>{
      updatenews();
    },[]);

    const prevpg=async()=>{
      const newpage=page-1;
      setPage(newpage);
      await updatenews(newpage);
    }
    const nxtpg=async()=>{
      const newpage=page+1;
      setPage(newpage);
      await updatenews(newpage);
    }
    return (
      <div>
        <div className="container my-3">
            <h2>Headlines</h2>
            {loading && <Loading/>}
            <div className="row">
                {!loading && articles.map((element)=>{
                   return <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title ? element.title.slice(0,20) : "No title"} description={element.description ? element.description.slice(0,50) : "No description"} imgUrl={element.urlToImage} newsUrl={element.url}/>
                  </div>
                })}
            </div>
            <div className="d-flex justify-content-between">
            <button type="button" disabled={page<=1} onClick={prevpg} className="btn btn-dark">&larr; Previous</button>
            <button type="button" disabled={page + 1> Math.ceil(totalResults/9)} onClick={nxtpg} className="btn btn-dark">Next &rarr;</button>
            </div>
        </div>
      </div>
    )
}

News.defualtProps={
  country: "us",
  pageSize : 9,
  categoy : "general"
}
News.propTypes={
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}

export default News
