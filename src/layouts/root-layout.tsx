import Wrapper from '../components/wrapper/wrapper'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <Wrapper>
        <Outlet />
    </Wrapper>
  )
}

export default RootLayout