import React from 'react'

const Newsitem =(props)=> {
   
      let {title,description,imgUrl,newsUrl} = props;
    return (
      <div>
        <div className="card my-2" >
     <img src={!imgUrl ? "https://image.cnbcfm.com/api/v1/image/108009774-1721659897787-gettyimages-2162402177-AFP_364R2BL.jpeg?v=1728906624&w=1920&h=1080" : imgUrl} className="card-img-top" alt="..."/>
      <div classNameName="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
    </div>
   </div>
      </div>
    )
}

export default Newsitem
