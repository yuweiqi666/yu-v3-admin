export default {
  install(app) {
    const modules = import.meta.glob('@/components/**/*.vue', { eager: true })
    const contentList = Object.values(modules)
    contentList.forEach((content) => {
      const component = content.default
      app.component(component.name, component)
    })
  }
}
