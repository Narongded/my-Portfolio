import React from 'react'
import fetch from 'isomorphic-unfetch'
import css from '../styles/Index.module.css'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "test"
    }
  }
  componentDidMount() {
    console.log(this.props)
    console.log(process.env.NODE_ENV)
    console.log(this.props.data)
    console.log(this.state.name)
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
            <div className="col-md-3 col-sm-6 p-3">
              <h3 className={css.headline}>Information</h3>
              <p>Narongded Pinprechachai</p>
              <p>Age : 23 years</p>
              <p id={"123"}>Birthdate : 8 March 1998</p>
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <h3 className={css.headline}>Education</h3>
              <p>Faculty of Information Technology, King Mongkut's Institute of Technology Ladkrabang</p>
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <h3 className={css.headline}>Hobbies</h3>
              <ul>
                <li>Play Badminton</li>
                <li>Play Game</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <h3 className={css.headline}>Contact</h3>
              <ul>
                <li>Facebook</li>
                <li>Phone</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}

        <div className="container my-5">
          <div id="projects" className="d-flex justify-content-center"><h2 className={'mx-auto mb-4 ' + css.headline}>My Project</h2></div>
          <div className="row">
            {this.props.data.map((data, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>

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
        </div>
      </div >

    )
  }
}
export const getServerSideProps  = async () => {
 
  const res = await fetch('https://narongded-portfolio.herokuapp.com/api/Index')
  const data = await res.json()
  return {
    props: data, // will be passed to the page component as props
  }

}
export default Index
