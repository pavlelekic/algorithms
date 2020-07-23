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

function formatTime(timestamp, isLocal) {
  const date = new Date(timestamp * 1000);;
  const currentTime = isLocal ? moment(date) : moment.utc(date);
  return currentTime.format('HH:mm:ss');
}

function getUnixTimestamp() {
  const date = new Date();
  return Math.trunc(date.getTime() / 1000);
}

export default React.memo(function TestPage() {
  const [isLocal, setIsLocal] = useState(true);
  const [timestamp, setTimestamp] = useState(getUnixTimestamp());
	const [imageUrl, setImageUrl] = useState('');
  
  useEffect(() => {
    let lastRAFId;
    const updateTimestamp = () => {
      const currentTimestamp = getUnixTimestamp();
      if (currentTimestamp !== timestamp) {
        setTimestamp(currentTimestamp);
      } else {
        lastRAFId = window.requestAnimationFrame(updateTimestamp);
      }
    };
    lastRAFId = window.requestAnimationFrame(updateTimestamp);
    return () => window.cancelAnimationFrame(lastRAFId);
  });

  useEffect(() => {
    const date = new Date();
    if (date.getSeconds() % 10 === 0) {
      fetch('https://picsum.photos/200/300')
        .then(response => setImageUrl(response.url))
        .catch(console.log);
    }
  });

	return (
		<main style={containerStyle}>
			<section>
        <header>{formatTime(timestamp, isLocal)}</header>
				<button onClick={() => setIsLocal(!isLocal)}>
          {isLocal ? 'Local' : 'UTC'}
        </button>
			</section>
			<img src={imageUrl}/>
		</main>
	);
});

// class TestPage extends React.PureComponent {
// 	state = {
// 		timestamp: new Date().getTime(),
// 		isLocal: true,
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

// 	toggleIsLocal = () => this.setState((s) => ({isLocal: !s.isLocal}));


// 	render() {
// 		const date = new Date(this.state.timestamp);
// 		const seconds = addZeroIfNeeded(date.getSeconds());
// 		const minutes = addZeroIfNeeded(date.getMinutes());
// 		const hours = addZeroIfNeeded(this.state.isLocal ? date.getHours() : date.getUTCHours());

// 		return (

// 		);
// 	}
// }

// export default TestPage;
