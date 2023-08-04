// Write your code here
import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <nav>
    <div className="bg-container">
      <Link to="/">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="web-logo"
          />
        </li>
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="popup-content"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="button-hamburger" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="icon-container">
              <ul>
                <li>
                  <Link to="/">
                    <AiFillHome className="icon" />
                    <h1 className="icon-heading">Home</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <BsInfoCircleFill className="icon" />
                    <h1 className="icon-heading">About</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <button
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      <IoMdClose className="icon" />
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
    <hr />
  </nav>
)
export default withRouter(Header)
