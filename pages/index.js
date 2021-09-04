import axios from "axios"

const LandingPage = ({ color }) => {
    console.log('i am in the component')
    return <h1>Landing Page</h1>
}

LandingPage.getInitialProps = () => {
    const response = await axios.get('/api/users/currentuser')
    console.log('i am on the server')
    return { color: 'red' }
}

export default LandingPage