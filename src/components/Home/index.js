// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt=" home"
        className="image"
      />
      <h1 className="heading">Home</h1>
    </div>
  </>
)

export default Home
