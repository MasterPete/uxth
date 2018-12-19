import React from 'react'

const calculateTimeLeft = dateStr =>
  Math.round((new Date(dateStr).getTime() - new Date().getTime()) / 1000)

class Timer extends React.Component {
  state = {
    timeLeft: calculateTimeLeft(this.props.until),
    finish: false,
  }

  componentDidMount() {
    const interval = setInterval(() => {
      const { timeLeft } = this.state
      if (timeLeft <= 0) {
        clearInterval(interval)
        this.setState({ finish: true })
      } else {
        this.setState({ timeLeft: timeLeft - 1 })
      }
    }, 1000)
  }

  calculateTime = timeLeft => {
    const day = Math.floor(timeLeft / 86400)
    const hour = Math.floor((timeLeft % 86400) / 3600)
    const min = Math.floor((timeLeft % 3600) / 60)
    const sec = timeLeft % 60
    return {
      day,
      hour,
      min,
      sec,
    }
  }

  render() {
    const { timeLeft, finish } = this.state
    const { day, hour, min, sec } = this.calculateTime(timeLeft)

    return this.props.children({
      day,
      hour,
      min,
      sec,
      timeLeft,
      finish,
    })
  }
}
Timer.defaultProps = {
  until: '2019-01-01T23:59:59+07:00',
}

export default Timer
