import { Container } from 'react-bootstrap'
import Feartures from '../components/features'
import Home from '../components/home'
import Memes from '../components/memes'
import Safe from '../components/safe'
import VBone from '../components/vbone'
import Moon from '../components/moon'
import Roadmap from '../components/roadmap'
import Buy from '../components/buy'

const HomePage = () => {
  return (
    <div className='custom_container'>
      <Home />
      <div className='spacer-double' />
      <Memes />
      <div className='spacer-triple' />
      <Feartures />
      <div className='spacer-double' />
      <VBone />
      <div className='spacer-double' />
      <Safe />
      <div className='spacer-double' />
      <Moon />
      <div className='spacer-double' />
      <Roadmap />
      <div className='spacer-double' />
      <Buy />
    </div>
  )
}
export default HomePage
