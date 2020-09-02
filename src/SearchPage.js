import React from 'react'
import './Searchpage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow'

import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>

            </div>
            <hr/>
            <ChannelRow
            
            image="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            channel="Coding is awsome"
            verified
            subs="500k subscribers"
            noOfVideos="330 videos"
            description="This channel is about building websites with django,react and javascript"
            />
            <hr/>
            <VideoRow
 title="Building a hotel management system"
 channel="Coding is awsome"
 
 views="40,268 Views"
 timestamp="1 day ago"
 image="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

            subs="500k subscribers"
              description="In this project we will build a hotel management system"
            
           
            
            
            
            />
           <VideoRow
 title="Building a hotel management system"
 channel="Coding is awsome"
 
 views="40,268 Views"
 timestamp="1 day ago"
 image="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

          
 subs="500k subscribers"
              description="In this project we will build a hotel management system"
            
           
            
            
            
            />
                       <VideoRow
 title="Building a hotel management system"
 channel="Coding is awsome"
 
 views="40,268 Views"
 timestamp="1 day ago"
 image="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

        
 subs="500k subscribers"
              description="In this project we will build a hotel management system"
            
           
            
            
            
            />
             
        </div>
    )
}

export default SearchPage
