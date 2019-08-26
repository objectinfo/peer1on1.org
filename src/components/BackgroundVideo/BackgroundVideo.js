import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';
// import Image from './Image'

const BackgroundVideoContainer = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BackgroundVideoTag = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  opacity: ${props => props.playing};
`;

const BackgroundVideoTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  font-size: 4rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px grey;
`;

const PosterVideoTitle = styled.h3`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px grey;
`;

class BackgroundVideo extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  state = {
    playing: false,
    mobileWidth: false
  }

  updateDimensions() {
    this.setState({ mobileWidth: window.innerWidth <= 900 })
  }

  handelPlay() {
    this.setState({ playing: true })
    ReactDOM.findDOMNode(this.ref.current).removeEventListener(
      'playing',
      this.handelPlay
    )
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', () => this.updateDimensions())
    ReactDOM.findDOMNode(this.ref.current).addEventListener('playing', e =>
      this.handelPlay(e)
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    const { poster, videoTitle, children } = this.props
    return (
      <Fragment>
        {!this.state.mobileWidth && (
          <BackgroundVideoContainer>
            <BackgroundVideoTag
              ref={this.ref}
              poster={poster}
              playing={this.state.playing ? 1 : 0}
              playsInline
              autoPlay
              muted
              loop
              controls
              preload="auto"
            >
              {children}
            </BackgroundVideoTag>
            {videoTitle && (
              <BackgroundVideoTitle>{videoTitle}</BackgroundVideoTitle>
            )}
          </BackgroundVideoContainer>
        )}
        {this.state.mobileWidth && (
          <Fragment>
            {/* <Image background src={poster} alt="Background poster" /> */}
            {videoTitle && <PosterVideoTitle>{videoTitle}</PosterVideoTitle>}
          </Fragment>
        )}
      </Fragment>
    )
  }
}
/* // Example
const videoPoster = 'https://ucarecdn.com/69ba14a8-6481-4671-abb6-0e6f0d9c3e46/'
const videoTitle = 'Background videos, with poster image & title overlay'
const video = 'https://ucarecdn.com/e6979298-66d6-4245-b496-6e5a5d507135/'

const BackgroundVideoSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 40rem;
`;

<BackgroundVideoSection>
<BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
  {video && <source src={video} type="video/mp4" />}
</BackgroundVideo>
</BackgroundVideoSection>
*/
export default BackgroundVideo