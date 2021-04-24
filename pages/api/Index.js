

const portfolioData = [
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
        github : 'https://github.com/Narongded/Petcare',
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
]

export default (req, res) => {
    res.status(200).json({ data: portfolioData })
}

