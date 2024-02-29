import LaunchesListItem from './LaunchesListItem'

const LaunchesList = ({launches}) => {
  return (
    <>
        <div className='launches'>
            {launches.map(launch => <LaunchesListItem key={launch.id} launch={launch}/>)}
        </div>
    </>
  )
}

export default LaunchesList