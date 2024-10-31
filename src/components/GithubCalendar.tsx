"use client"
import React, { Suspense } from 'react'
import GitHubCalendar from 'react-github-calendar';


const GitHubCalendarComponent = () => {
    return (
        <div className=' max-w-[550px]   md:w-[720px]     ' >
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