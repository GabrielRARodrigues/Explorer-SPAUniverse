import { app, links } from './elements.js'
export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  handle() {
    const { pathname, href } = window.location
    const route = this.routes[pathname] || this.routes[404]

    links.forEach(link => {
      if (link.href === href) {
        link.classList.add('navigation__link--active')
      }
    })

    fetch(route)
      .then(response => response.text())
      .then(html => {
        app.innerHTML = html
      })
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    links.forEach(link => {
      link.classList.remove('navigation__link--active')
    })

    this.handle(event)
  }
}
