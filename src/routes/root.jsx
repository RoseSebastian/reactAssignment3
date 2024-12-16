import Header from '../components/header'
import { Outlet } from 'react-router-dom'

function Root() {
    return(
        <>
        <Header></Header>
        <Outlet/>
        </>
    )
}

export default Root