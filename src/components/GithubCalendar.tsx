"use client"
import React, { Suspense } from 'react'
import GitHubCalendar from 'react-github-calendar';


const GitHubCalendarComponent = () => {
    return (
        <div className='    md:w-[720px]     ' >
            <Suspense fallback="Loadin.." >
                <GitHubCalendar
                    username={'piyushhsainii'}
                    blockSize={9}
                />
            </Suspense>
        </div>
    )
}

export default GitHubCalendarComponent