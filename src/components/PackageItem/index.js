import './index.css'

const PackageItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}
export default PackageItem
