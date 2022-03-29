import React from 'react'

function VideoCard({video}) {
     
    const {_id ,title,creator,category,description} = video
  return (
    <div className="card-with-overlay"
            onClick={() => navigate(`/video/${_id}`) }>
            <img src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} alt="video preview"/>         
            <div className='card-text'>
                <h4 className="card-heading">{title}</h4>
                <div className='card-options'>
                    <icon className='fa fa-ellipsis-v'></icon>
                </div>
            </div>
            <div className="card-desc">
                {creator}
            </div> 
    </div> 
  )
}

export default VideoCard