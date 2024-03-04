import ShipsListItem from './ShipsListItem'
import "./style.css"

const ShipsList = ({ships}) => {
  return (
    <div className='ships'>
    {ships.map(ship => <ShipsListItem key={ship.id} ship={ship}/>)}
    </div>
  )
}

export default ShipsList