import React from 'react'

class Tabs extends React.Component {
  state = { id: 'talk' }

  changeTab = (id) => {
    this.setState({ id })
  }

  render() {
    const { children } = this.props
    const { id } = this.state

    return children({
      currentTab: id,
      changeTab: this.changeTab,
    })
  }
}

export default Tabs
