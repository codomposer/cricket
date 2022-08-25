import React from 'react'
import Individual from './sections/Individual'
import LokedGaming from './sections/LokedGaming'
import PointTable from './sections/PointTable'
import TodayMatch from './sections/TodayMatch'

const Main = () => {
  return(
    <div className="bg-main">
      <TodayMatch />
      <LokedGaming />
      <PointTable />
      <Individual />
    </div>
  )
}

export default Main