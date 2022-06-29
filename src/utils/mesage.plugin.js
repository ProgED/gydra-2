export default {
  install: (app, options) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$message = (html) => {
      M.toast({html})
    }
  }
}