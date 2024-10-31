"use client"
import GitHubCalendar from 'react-github-calendar';


const GitHubCalendarComponent = () => {
    return (
        <div className='    md:w-[720px]     ' >
            <GitHubCalendar
                username={'piyushhsainii'}
                blockSize={9}
            />
        </div>
    )
}

export default GitHubCalendarComponent