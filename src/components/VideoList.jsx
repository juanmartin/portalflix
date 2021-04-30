import React from 'react'
import Video from './Video'

export default function VideoList(props) {
  const { videos } = props
  return (
    <div className="flex flex-wrap gap-10">
      {videos.map((video, index) => {
        return (
          <Video titulo={video.titulo} thumbnail={video.thumbnail} />
        )
      })}
    </div>
  )
}
