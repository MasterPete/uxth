import React from 'react'

class Tabs extends React.Component {
  state = { index: 0 }

  changeIndex = (index) => {
    this.setState({ index })
  }

  render() {
    const { children } = this.props
    const { index } = this.state

    return children({
      currentIndex: index,
      changeIndex: this.changeIndex,
    })
  }
}

export default Tabs
