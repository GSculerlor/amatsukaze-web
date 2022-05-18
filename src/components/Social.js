import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faSteam } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default function Social() {
  return (
    <div className="max-w-6xl mx-auto text-white">
      <div className="space-x-6 flex flex-row items-center">
        <a href='https://github.com/GSculerlor' className='font-semibold'><FontAwesomeIcon icon={faGithub} className="h-5"/></a>
        <a href='https://twitter.com/GSculerlor' className='font-semibold'><FontAwesomeIcon icon={faTwitter} className="h-5"/></a>
        <a href='https://www.linkedin.com/in/ganendra-afrasya-528b09140/' className='font-semibold'><FontAwesomeIcon icon={faLinkedin} className="h-5"/></a>
        <a href='https://blog.ganen.moe' className='font-semibold'><FontAwesomeIcon icon={faBookOpen} className="h-5"/></a>
        <a href='https://steamcommunity.com/id/ganendra/' className='font-semibold'><FontAwesomeIcon icon={faSteam} className="h-5"/></a>
      </div>
    </div>
  );
}