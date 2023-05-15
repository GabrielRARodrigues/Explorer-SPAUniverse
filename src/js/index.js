import { Router } from './Router.js'
import { links } from './elements.js'

const router = new Router()

router.add('/', '/src/pages/home.html')
router.add('/universe', '/src/pages/universe.html')
router.add('/exploration', '/src/pages/exploration.html')
router.add(404, '/src/pages/404.html')

router.handle()

links.forEach(link => {
  link.addEventListener('click', event => window.route(event))
})

window.onpopstate = () => router.handle()
window.route = event => router.route(event)
