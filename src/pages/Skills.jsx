import {
  faCss,
  faFigma,
  faGit,
  faHtml5,
  faJs,
  faLaravel,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap'
import { faCode, faDatabase, faToolbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skills() {
  return (
    <section className="py-20">
      <div id='skills' className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center uppercase text-slate-800 dark:text-white">
          Skills
        </h3>
        <span className="w-32 h-1 bg-slate-700 block rounded mx-auto mt-3"></span>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Frontend */}
          <div className="rounded-xl border border-slate-300 dark:border-slate-700 p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faCode} className="text-xl text-slate-700 dark:text-white" />
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Frontend</h4>
            </div>

            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faHtml5} /> HTML</li>
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faCss} /> CSS</li>
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
              <li className='text-slate-800 dark:text-white'>Tailwind CSS</li>
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faJs} /> JavaScript</li>
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faReact} /> React</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-xl border border-slate-300 dark:border-slate-700 p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faDatabase} className="text-xl text-slate-700 dark:text-white" />
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Backend</h4>
            </div>

            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faPhp} /> PHP</li>
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faLaravel} /> Laravel</li>
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
              <li className='text-slate-800 dark:text-white'>MongoDB</li>
            </ul>
          </div>

          {/* Tools & Design */}
          <div className="rounded-xl border border-slate-300 dark:border-slate-700 p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faToolbox} className="text-xl text-slate-700 dark:text-white" />
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Tools & Design</h4>
            </div>

            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faFigma} /> Figma</li>
              <li className='text-slate-800 dark:text-white'>Photoshop</li>
              <li className='text-slate-800 dark:text-white'><FontAwesomeIcon icon={faGit} /> Git</li>
              <li className='text-slate-800 dark:text-white'>Vercel</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
