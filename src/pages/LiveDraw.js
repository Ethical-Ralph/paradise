import React, { useEffect, useState } from 'react';
import fetchLiveDrawVideoLink from '../API/liveDrawApi';
import ReactPlayer from 'react-player'

const LiveDraw = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchLink = async () => {
            const liveData = await fetchLiveDrawVideoLink()
            setData(liveData)
        }
        fetchLink()
    }, [])

    return (
        data ? (
        <ReactPlayer
            url={data.url}
            config={{
                facebook: {
                    appId: data.appID
                }
            }}
        /> ) : (
            <div>loading</div>
        )
    )
}

export default LiveDraw
