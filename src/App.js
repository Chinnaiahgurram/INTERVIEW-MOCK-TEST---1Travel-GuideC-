import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelGuideItem from './component/TravelGuideItem'

import './App.css'

class App extends Component {
  state = {data: [], isLoading: false}

  componentDidMount = () => {
    this.getApiData()
  }

  getApiData = async () => {
    this.setState({isLoading: true})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'

    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
        description: eachItem.description,
      }))
      this.setState({data: updatedData, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" width={50} height={50} color="red" />
    </div>
  )

  renderSuccessView = () => {
    const {data} = this.state
    return (
      <div className="container">
        <h1 className="heading1">Travel Guide</h1>
        <hr className="hr" />
        <ul className="list">
          {data.map(eachItem => (
            <TravelGuideItem key={eachItem.id} eachDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoadingView() : this.renderSuccessView()}
      </div>
    )
  }
}

export default App
