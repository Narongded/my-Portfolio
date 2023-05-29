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
          image: 'img/ring-of-fire.png',
          type: 'โปรเจครายวิชา',
          tools: ['html', 'css']
      },
      {
          name: 'Ang Thong',
          url: 'https://narongded.github.io/angthong/',
          status: 1,
          github : 'https://github.com/Narongded/angthong',
          image: 'img/angtong.png',
          type: 'โปรเจครายวิชา',
          tools: ['html', 'css']
      },
      {
          name: 'Animal Figther',
          url: '',
          status: 0,
          github : 'https://github.com/Narongded/Animal-Fighter',
          image: 'img/animal-figter.png',
          type: 'โปรเจครายวิชา',
          tools: ['C', 'SDL 2.0']
      },
      {
          name: 'Pachon-VS-World',
          url: '',
          status: 0,
          github : 'https://github.com/naive555/pachon-VS-World',
          image: 'img/pachonVsworld.png',
          type: 'โปรเจครายวิชา',
          tools: ['JAVA', 'Box2d']
      },
      {
          name: 'Cineplex',
          url: 'https://narongded.github.io/cinema/',
          status: 1,
          github : 'https://github.com/Narongded/cinema',
          image: 'img/cinema.png',
          type: 'โปรเจครายวิชา',
          tools: ['Vue.js']
      },
      {
          name: 'Carcare',
          url: '',
          status: 0,
          github : 'https://github.com/Narongded/Carecare',
          image: 'img/Carcare.png',
          type: 'โปรเจครายวิชา',
          tools: ['Django']
      },
      {
          name: 'Ume Garden',
          url: '',
          status: 0,
          github : 'https://github.com/tintinap/ume_garden',
          image: 'img/fluuter.png',
          type: 'โปรเจครายวิชา',
          tools: ['Flutter', 'Google Firebase']
      },
      {
          name: 'sop-reservation-service',
          url: '',
          status: 0,
          github : 'https://github.com/810Teams/sop-reservation-service',
          image: 'img/micro-service.png',
          type: 'โปรเจครายวิชา',
          tools: ['Java', 'Spring Boot' , 'Google App Engine']
      },
      {
          name: 'Dormlab',
          url: '',
          status: 0,
          github : 'https://github.com/Narongded/dormlab',
          image: 'img/dormlab.png',
          type: 'โปรเจครายวิชา',
          tools: ['AWS EC2']
      },
      {
          name: 'Mesuem',
          url: '',
          status: 0,
          github : 'https://github.com/Narongded/Mesuem',
          image: 'img/Mesuem.png',
          type: 'โปรเจครายวิชา',
          tools: ['Node.js', 'mongoDB']
      },
      {
          name: 'E-meeting',
          url: '',
          status: 0,
          github : '',
          image: 'img/e-meeting.png',
          type: 'โปรเจครายวิชา',
          tools: ['Node.js', 'mongoDB','PM2']
      },
      {
          name: 'Petcare',
          url: 'https://petcate.herokuapp.com/',
          status: 0,
          github : 'https://github.com/Narongded/Petcare',
          image: 'img/petcare.png',
          type: 'โปรเจครายวิชา',
          tools: ['Node.js', 'mongoDB']
      },
      {
          name: 'EX10',
          url: 'https://ex10.tech/docs/index',
          status: 0,
          github : '',
          image: 'img/ex10.png',
          type: 'โปรเจครายวิชา',
          tools: ['React.js','Node.js','AWS s3']
      },
      {
          name: 'Portfolio',
          url: 'https://narongded-portfolio.herokuapp.com/',
          status: 0,
          github : 'https://github.com/Narongded/my-Portfolio',
          image: 'img/portfolio.png',
          type: 'โปรเจครายวิชา',
          tools: ['Next.js']
      },
      {
          name: 'Mbox',
          url: 'https://software.1moby.com/software-studio/mbox/',
          status: 0,
          github : '',
          image: 'data:image/jpeg;base64,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',
          type: '',
          tools: ['Next.js','Nest.js','AWS','MySQL']
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
                <img className="w-100" style={{ borderRadius: '50%' }} src="img/profile.jpg" />
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
