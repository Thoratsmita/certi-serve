import React from 'react'
import Navbar_Server from './Navbar_Server'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Milestone() {

    return (
        <>
            <Navbar_Server nav='4' />
            <div className='MileMain'>
                <div className='MileNav'>
                    <h1 className='Mileheads MileSelected'>Created Milestone</h1>
                    <h1 className='Mileheads'>Approved Milestone</h1>
                    <button className='btnMile'>Create a Milestone</button>
                    <div className='MileBox'>
                        <div className='MileStn'>
                            <span>1.Milestone Description</span>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            <button className='btnMileStn'>Time</button>
                            <button className='btnMileStn'>Amount</button>
                            <button className='btnMileApp'>Yet to approve</button>
                        </div>
                        <div className='MileStn'>
                            <span>1.Milestone Description</span>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            <button className='btnMileStn'>Time</button>
                            <button className='btnMileStn'>Amount</button>
                            <button className='btnMileApp'>Yet to approve</button>
                        </div>
                        <div className='MileStn'>
                            <span>1.Milestone Description</span>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            <button className='btnMileStn'>Time</button>
                            <button className='btnMileStn'>Amount</button>
                            <button className='btnMileApp'>Yet to approve</button>
                        </div>
                        <div className="MileIcon">
                            <ChevronLeftIcon />
                            <ChevronRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}