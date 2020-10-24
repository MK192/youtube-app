import React,{useEffect,useState} from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from'./VideoDetail';
import useVideos from '../hooks/useVideos';
const App=()=>{
   
    const [selectedVideo,setSelectedVideo]=useState(null);
    const[videos,search]=useVideos('buildings');/*custom hook vraca niz(videos,search)*/
   

   useEffect(()=>{
    setSelectedVideo(videos[0]);
   },[videos])/*kad god dobijemo novu listu videosa, pokrecemo ovaj
   useeffect (stavjamo kao selectovan video prvi video iz liste
    videos)*/
   

    
  
  return(
    <div className="ui containet">
 <SearchBar onFormSubmit={search}/>
 <div className="ui grid">

 <div className="ui row">
     <div className="eleven wide column">
 <VideoDetail video={selectedVideo} />
 </div>
 <div className="five wide column">
 <VideoList onVideoSelect={(video)=>setSelectedVideo(video)} videos={videos}/>
 </div>
 </div>
 </div>
 </div>
)
};


export default App;