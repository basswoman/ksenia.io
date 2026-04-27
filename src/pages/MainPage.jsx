import LanguageSwitch from '../components/LanguageSwitch'
import Intro from '../components/Intro'
import Bass from '../components/Bass'
import Sound from '../components/Sound'
// import Dev from '../components/Dev'
import Articles from '../components/Articles'
import About from '../components/About'
import Contact from '../components/Contact'

export default function MainPage() {
  return (
    <>
      <LanguageSwitch />
      <Intro />
      <Bass />
      <Sound />
      {/* <Dev /> */}
      <Articles />
      <About />
      <Contact />
    </>
  )
}
