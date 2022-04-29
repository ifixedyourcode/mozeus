import './App.css'
import img1 from './images/Showcase.png'
import logo from './images/MoZeus.png'
import Chart from './images/Chart.png'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2">
        <div className="container">
          <a href="#" className="navbar-brand">
            Mozeus
          </a>
          {/* <img className=" img-fluid img-responsive" src={logo}></img> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Clients
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Platform
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Tech Tools
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="navbar-link btn btn-success mx-3">
                  Contact Us
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="navbar-link btn btn-secondary">
                  Upload RFP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-light text-dark p-5 text-center text-sm-start ">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-center">
            <div className="justify-content-center">
              <h1>Your data-driven, engagement technology sidekick for</h1>
              <p className="lead my-4">
                Our industry-leading, white-label engagement platform has been
                proven to drive targeted audience engagement, relevance,
                emotional connection and, ultimately, action.
              </p>
              <button className="btn btn-success btn-lg">GET STARTED</button>
            </div>
            <img className="img-fluid w-50 d-none d-sm-block" src={img1}></img>
          </div>
        </div>
      </section>

      <section className="bg-secondary p-5 ">
        <div className="container">
          <h1 className="pb-5 text-white">
            We are leading the charge against{' '}
            <span className="text-warning">boring as sh*t</span> event
            technology.
          </h1>

          <div className=" d-md-flex align-items-center justify-content-center  ">
            <div className="card-img-top bg-light text-dark p-md-2 mx-md-1">
              <h1 className="pt-3 bi bi-bar-chart-line-fill"></h1>
              <h2 className="py-2"> Digital Data Capture</h2>
              <p className="p-3">
                Our proprietary lead capture system features an easy-to-use
                interface – strategically and creatively designed to compliment
                your specific brand voice – optimized to attract, inspire and
                delight consumers.
              </p>
            </div>

            <div className="card-img-top bg-light text-dark p-md-2 mx-md-3">
              <h1 className="pt-3 bi bi-camera2"></h1>

              <h2 className="py-2"> Photo & Video Tools</h2>
              <p className="p-3">
                Our wide range of innovative, “plug-and-play” photo & video
                marketing tools run on an array of devices (kiosks,
                touchscreens, mobile phones, etc) to amplify engagement and
                social sharing.{' '}
              </p>
            </div>

            <div className="card-img-top bg-light text-dark p-md-2 mx-md-1">
              <h1 className="pt-3 bi bi-globe"></h1>

              <h2 className="py-2"> Web Apps & Microsites</h2>
              <p className="p-3">
                From sweepstakes and interactive games, to image recognition and
                photo-ops, web-based microsites access almost every single
                feature your device has to offer – without the cost of
                developing an app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark p-5 text-center text-sm-end">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-center">
            <img className="img-fluid w-50 d-none d-sm-block" src={Chart}></img>
            <div className="justify-content-center">
              <h1>
                Measure the effectiveness of your experiential campaigns and
                finally prove ROI.
              </h1>
              <p className="lead my-4">
                By capturing and combining data from multiple verticals
                (surveys, purchase intent, on-site engagement, coupon
                redemption, post-event follow-up, etc.) we are able to attribute
                your event and activation spend to the business outcomes you
                demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-warning text-light p-5 text-center">
        <div className="container">
          <h1>
            {' '}
            Ready for an unfair
            <span className="text-danger">
              {' '}
              advantage over your competitors?
            </span>{' '}
            Good, let’s chat.
          </h1>
          <button className="btn btn-success btn-lg text-white my-3 p-2">
            I'm ready to do something epic
          </button>
          <div className='d-flex justify-content-between'>
            <small className="text-white">All Rights Reserved</small>
            <small className="text-white">Privacy policy | Tech Support | MoZeus Blog</small>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
