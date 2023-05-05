import React from 'react'
import fetch from 'isomorphic-unfetch'
import css from '../styles/Index.module.css'

class Index extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = {
      email: ''
    }
    this.portfolioData = [
      {
          name: 'Ring of fire',
          status: 1,
          url: 'https://narongded.github.io/ring-of-fire/',
          github : 'https://github.com/Narongded/ring-of-fire',
          image: '/img/ring-of-fire.png',
          type: 'โปรเจครายวิชา',
          tools: ['html', 'css']
      },
      {
          name: 'Ang Thong',
          url: 'https://narongded.github.io/angthong/',
          status: 1,
          github : 'https://github.com/Narongded/angthong',
          image: '/img/angtong.png',
          type: 'โปรเจครายวิชา',
          tools: ['html', 'css']
      },
      {
          name: 'Animal Figther',
          url: '',
          status: 0,
          github : 'https://github.com/Narongded/Animal-Fighter',
          image: '/img/animal-figter.png',
          type: 'โปรเจครายวิชา',
          tools: ['C', 'SDL 2.0']
      },
      {
          name: 'Pachon-VS-World',
          url: '',
          status: 0,
          github : 'https://github.com/naive555/pachon-VS-World',
          image: '/img/pachonVsworld.png',
          type: 'โปรเจครายวิชา',
          tools: ['JAVA', 'Box2d']
      },
      {
          name: 'Cineplex',
          url: 'https://limitless-sierra-34349.herokuapp.com/index.html',
          status: 1,
          github : 'https://github.com/Narongded/cinema',
          image: '/img/cinema.png',
          type: 'โปรเจครายวิชา',
          tools: ['Vue.js']
      },
      {
          name: 'Carcare',
          url: '',
          status: 0,
          github : 'https://github.com/Narongded/Carecare',
          image: '/img/Carcare.png',
          type: 'โปรเจครายวิชา',
          tools: ['Django']
      },
      {
          name: 'Ume Garden',
          url: '',
          status: 0,
          github : 'https://github.com/tintinap/ume_garden',
          image: '/img/fluuter.png',
          type: 'โปรเจครายวิชา',
          tools: ['Flutter', 'Google Firebase']
      },
      {
          name: 'sop-reservation-service',
          url: '',
          status: 0,
          github : 'https://github.com/810Teams/sop-reservation-service',
          image: '/img/micro-service.png',
          type: 'โปรเจครายวิชา',
          tools: ['Java', 'Spring Boot' , 'Google App Engine']
      },
      {
          name: 'Dormlab',
          url: '',
          status: 0,
          github : 'https://github.com/Narongded/dormlab',
          image: '/img/dormlab.png',
          type: 'โปรเจครายวิชา',
          tools: ['AWS EC2']
      },
      {
          name: 'Mesuem',
          url: '',
          status: 0,
          github : 'https://github.com/Narongded/Mesuem',
          image: '/img/Mesuem.png',
          type: 'โปรเจครายวิชา',
          tools: ['Node.js', 'mongoDB']
      },
      {
          name: 'E-meeting',
          url: '',
          status: 0,
          github : '',
          image: '/img/e-meeting.png',
          type: 'โปรเจครายวิชา',
          tools: ['Node.js', 'mongoDB','PM2']
      },
      {
          name: 'Petcare',
          url: 'https://petcate.herokuapp.com/',
          status: 0,
          github : 'https://github.com/Narongded/Petcare',
          image: '/img/petcare.png',
          type: 'โปรเจครายวิชา',
          tools: ['Node.js', 'mongoDB']
      },
      {
          name: 'EX10',
          url: 'https://ex10.tech/docs/index',
          status: 0,
          github : '',
          image: '/img/ex10.png',
          type: 'โปรเจครายวิชา',
          tools: ['React.js','Node.js','AWS s3']
      },
      {
          name: 'Portfolio',
          url: 'https://narongded-portfolio.herokuapp.com/',
          status: 0,
          github : 'https://github.com/Narongded/my-Portfolio',
          image: '/img/portfolio.png',
          type: 'โปรเจครายวิชา',
          tools: ['Next.js']
      }
  ]
  }
  
  componentDidMount() {
    // console.log(this.props)
    // console.log(process.env.NODE_ENV)
    // console.log(this.props.data)
    // console.log(this.state.name)
     // console.log(this.state.name)
  }
  handleSendEmail = async () => {
    await fetch('https://narongded-portfolio.herokuapp.com/api/SendEmail',
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ email: this.state.email })
      }
    ).then(res => res.json()).then(data => console.log(data.status))
  }
  render() {
    return (
      <div>
        <div className="container-fluid bg-warning">
          <div className="container p-5">
            <div className="row">
              <div className="col-md-3">
                <img className="w-100" style={{ borderRadius: '50%' }} src="/img/profile.jpg" />
              </div>
              <div className="col-md-9 d-flex justify-content-center align-items-center">
                <h1 className="mt-3 text-center text-dark">Narongded Pinprechachai (Champ)</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '-3em' }}>
          <a className={'mt-4 px-4 py-2 btn ' + css.btnViewPort} href="#projects">PROJECT</a>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-3 col-sm-6 p-3">
              <h3 className={css.headline}>Information</h3>
              <p>Narongded Pinprechachai</p>
              <p>Age : 25 years</p>
              <p id={"123"}>Birthdate : 8 March 1998</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4 p-3">
              <h3 className={css.headline}>Education</h3>
              <p>Faculty of Information Technology, King Mongkut's Institute of Technology Ladkrabang</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4 p-3">
              <h3 className={css.headline}>Hobbies</h3>
              <ul>
                <li>Play Badminton</li>
                <li>Play Game</li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4 p-3">
              <h3 className={css.headline}>Contact</h3>
              <ul>
                <li>Tel :
                  <br />0817151382</li>
                <li>Email :   <br />work.narongded@gmail.com</li>
                <li>Facebook : <a href="https://www.facebook.com/narongded.pinprechachai/">  <br />Narongded Pinprechachai</a></li>
                <li>linkedin : <a href="https://www.linkedin.com/in/narongded-pinprechachai-905039147/">  <br />Narongded Pinprechachai</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div id="projects" className="d-flex justify-content-center"><h2 className={'mx-auto mb-4 ' + css.headline}>My Project</h2></div>
          <div className="row">
            {this.portfolioData.map((data, index) => (
              <div className="col-lg-3 col-sm-6 mb-4" key={index}>

                <div className="card h-100">
                  <img src={data.image} className="card-img-top" width="90px" height="200px" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    {/* <p className="card-text">ประเภท : โปรเจครายวิชา ปี 1</p> */}
                    <ul>
                      {data.tools.map((data, index2) => (
                        <li key={index2}>{data}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <div className="row text-center mb-3">
                    <div className="col-6" style={{ borderRight: '1px solid rgb(189 189 189)' }}>
                      {data.github !== '' ?
                        <a href={data.github}>Github</a> : null
                      }
                    </div>
                    <div className="col-6">
                      {data.url !== '' ?
                        <a href={data.url}>Website</a> : null
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          {/* <div className="row d-flex justify-content-center">
            <div className="input-group lg-3">
              <input type="text" className="form-control"
                placeholder="Email for Send Resume" aria-label="Email"
                aria-describedby="button-addon2" onChange={(e) => this.setState({ email: e.target.value })}
              />
              <button className="btn btn-outline-secondary" type="button"
                id="button-addon2"
                onClick={() => this.handleSendEmail()}>Email</button>
            </div>
          </div> */}
        </div>

      </div >

    )
  }
}

// export const getServerSideProps = async () => {
//   const res = await fetch('https://narongded-portfolio.herokuapp.com/api/Index')
//   const data = await res.json()
//   return {
//     props: data,
//   }

// }
export default Index
