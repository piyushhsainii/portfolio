"use client"
import React, { Suspense } from 'react'
import GitHubCalendar, { Props } from 'react-github-calendar';


const GitHubCalendarComponent = () => {
  return (
    <div className=' w-[375px]  md:w-[720px] my-4 mx-2 py-4 mt-6' >
                <Suspense fallback="Loadin.." >
                    <GitHubCalendar
                        username={'piyushhsainii'}
                        blockSize={9}
                    // colorScheme={theme === "dark" ? "dark" : "light"}
                    />
                </Suspense>
            </div>
    )
}

export default GitHubCalendarComponent