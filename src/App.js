import React, {useState, useEffect} from 'react';
import moment from 'moment';

/*
*Code test*
We're going to make a basic homepage
- First, make a digital clock that updates once a second and shows the current time. Format: hh:mm:ss

- Add functionality to switch between UTC and local time

- Add an image to the page, and every time the seconds on the clock hit an even multiple of 10, then change the image with one from (_https://picsum.photos/_ (https://picsum.photos/)) (changes 6 times per minute)
- Add the ability to pause and resume the image refreshing, as well as the ability to customize the frequency so it can change between 1 and 6 times per minute)
- Whenever the image refreshes, also retrieve a fact cat from '_https://cors-anywhere.herokuapp.com/https://catfact.ninja/fact_ (https://cors-anywhere.herokuapp.com/https://catfact.ninja/fact)' and display it as a caption to the image.

*/

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100vh',
	alignItems: 'center',
	justifyContent: 'center'
};

function getUnixTimestamp() {
  const date = new Date();
  return Math.trunc(date.getTime() / 1000);
}

const useRAF = (callback) => {
  useEffect(() => {
    let lastRAFId;
    const update = () => {
      callback();
      lastRAFId = window.requestAnimationFrame(update);
    };
    lastRAFId = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(lastRAFId);
  }, []);
};

const inlineStyle = {display: 'inline-block'};

const NO_IMAGE = '';

export default React.memo(function TestPage() {
  const [frequency, setFrequency] = useState(10);
  const [isImageFetchingPaused, setIsImageFetchingPaused] = useState(false);
  const [isLocalTime, setIsLocalTime] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [timestamp, setTimestamp] = useState(getUnixTimestamp());
	const [imageUrl, setImageUrl] = useState(NO_IMAGE);
  
  useRAF(() => {
    const currentTimestamp = getUnixTimestamp();
    setTimestamp(currentTimestamp);
  });

  useEffect(() => {
    if (!isImageFetchingPaused && (timestamp % 10 === 0 || imageUrl === NO_IMAGE) && !isFetching) {
      setIsFetching(true);
      fetch('https://picsum.photos/200/300')
        .then(response => setImageUrl(response.url))
        .catch(console.log)
        .finally(() => setIsFetching(false));
    }
  }, [timestamp, isImageFetchingPaused]);

  const handleFreqChange = e => setFrequency(Math.trunc(60 / e.target.value));

  const date = new Date(timestamp * 1000);;
  const currentTime = isLocalTime ? moment(date) : moment.utc(date);

	return (
		<main style={containerStyle}>
			<section>
        <header>{currentTime.format('HH:mm:ss')}</header>
        <label htmlFor="is-local" style={inlineStyle}>
          <input
            id="is-local"
            type="checkbox"
            checked={!isLocalTime}
            onClick={() => setIsLocalTime(isLocalTime => !isLocalTime)}
          />
          UTC
        </label>
			</section>
			<img src={imageUrl}/>
      <label htmlFor="frequency" style={inlineStyle}>
        Frequency:
        <input
          id="frequency"
          type="number"
          step="1"
          min="1"
          max="6"
          value={Math.trunc(60 / frequency)}
          onChange={handleFreqChange}
        />
      </label>
      <button onClick={() => setIsImageFetchingPaused(paused => !paused)}>
        {isImageFetchingPaused ?  'Play' : 'Pause'}
      </button>
		</main>
	);
});

// class TestPage extends React.PureComponent {
// 	state = {
// 		timestamp: new Date().getTime(),
// 		isLocalTime: true,
// 		imageUrl: ''
// 	};

// 	componentDidMount() {
// 		this.intervalID = setInterval(() => {
// 			const date = new Date();
// 			if (date.getSeconds() % 10 === 0) {
// 				fetch('https://picsum.photos/200/300')
// 					.then((response) => {
// 						this.setState({imageUrl: response.url});
// 					});
// 			}
// 			this.setState({
// 				timestamp: date.getTime()
// 			});
// 		}, 700);
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.intervalID);
// 	}

// 	toggleIsLocalTime = () => this.setState((s) => ({isLocalTime: !s.isLocalTime}));


// 	render() {
// 		const date = new Date(this.state.timestamp);
// 		const seconds = addZeroIfNeeded(date.getSeconds());
// 		const minutes = addZeroIfNeeded(date.getMinutes());
// 		const hours = addZeroIfNeeded(this.state.isLocalTime ? date.getHours() : date.getUTCHours());

// 		return (

// 		);
// 	}
// }

// export default TestPage;
