import React from 'react'

class Tabs extends React.Component {
  state = { id: 'talk' }

  changeTab = (id) => {
    this.setState({ id })
  }

  componentDidMount() {
    const { contents } = this.props
    if (contents.talk) {
      this.changeTab('talk')
    } else if (contents.workshop) {
      this.changeTab('workshop')
    } else {
      this.changeTab('biography')
    }
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
