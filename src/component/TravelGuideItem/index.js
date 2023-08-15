import './index.css'

const TravelGuideItem = props => {
  const {eachDetails} = props
  const {id, name, imageUrl, description} = eachDetails

  return (
    <div className="card-container">
      <li className="item-container">
        <img src={imageUrl} className="image" alt="name" key={imageUrl} />
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
      </li>
    </div>
  )
}
export default TravelGuideItem
