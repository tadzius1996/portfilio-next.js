import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles/Projects.module.css'
import {FaChild, FaReact} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {GiDiploma} from 'react-icons/gi'
import {GrUserWorker, GrWorkshop} from 'react-icons/gr'
import {MdWorkOutline} from 'react-icons/md'


const TimeLine = () => {
  return (
    <div className='mt-12' id='timeline'>
      <div className='text-center'>
        <h1 className={styles.listItem}><span className='text-[#9f9618]'>My</span> History</h1>
      </div>
      <div className='mt-7'>
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1ecbe1', color: 'black' }}
          date="2018"
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: '#9f9618', color: '#fff' }}
          icon={<SiJavascript/>}  
        >
          <h3 className="vertical-timeline-element-title">First Programming Language</h3>
          <p>This year I've started learning my first programming language - <span className='font-bold underline'>JavaScript</span></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1ecbe1', color: 'black' }}
    date="2019"
    iconStyle={{ background: '#9f9618', color: '#fff' }}
    icon={<FaReact/>}
  >
    <h3 className="vertical-timeline-element-title">React.js</h3>
    <p>
      This is when I've started learning Js frameworks / css libraries
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1ecbe1', color: 'black' }}
    date="2020-2022"
    iconStyle={{ background: '#9f9618', color: '#fff' }}
    icon={<MdWorkOutline/>}
  >
    <h3 className="vertical-timeline-element-title">Freelancing Jobs</h3>
    
    <p>
    I was responsible for creating dynamic websites using JavaScript
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1ecbe1', color: 'black' }}
    date="2022-present"
    iconStyle={{ background: '#9f9618', color: '#fff' }}
    icon={<GiDiploma/>}
  >
    <h3 className="vertical-timeline-element-title">Formal CS Degree</h3>
    
    <p>
     Studying towards a CS degree
    </p>
   </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default TimeLine