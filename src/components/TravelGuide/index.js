import {Component} from 'react'
import Loader from 'react-loader-spinner'

import PackageItem from '../PackageItem'

import './index.css'

class TravelGuide extends Component {
  state = {
    updateData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const newData = fetchedData.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))
      this.setState({updateData: newData, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderSuccessView = () => {
    const {updateData} = this.state
    return (
      <div>
        <h1>Travel Guides</h1>
        <ul>
          {updateData.map(eachItem => (
            <PackageItem key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? this.renderLoadingView() : this.renderSuccessView()}
      </div>
    )
  }
}
export default TravelGuide
