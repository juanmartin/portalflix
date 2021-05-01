import React from 'react'
import Video from './Video'

export default function VideoList(props) {
  const { videos } = props
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12">
      {videos.map((video, index) => {
        return (
          <Video titulo={video.titulo} thumbnail={video.thumbnail} />
        )
      })}
    </div>
  )
}
