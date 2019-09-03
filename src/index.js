export default router =>
  (...data) => {
    const watch = {}

    data.forEach(name =>
      watch[name] = {
        deep: true,
        handler: value => router.setState({ [name]: value })
      }
    )

    return {
      watch,

      created() {
        data.forEach(name => {
          const value = router.current.state[name]

          if (value != null) {
            this[name] = value
          }
        })
      }
    }
  }
