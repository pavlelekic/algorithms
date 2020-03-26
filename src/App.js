import React from 'react';

/*
*Code test*
We're going to make a basic homepage
- First, make a digital clock that updates once a second and shows the current time. Format: hh:mm:ss

- Add functionality to switch between UTC and local time

- Add an image to the page, and every time the seconds on the clock hit an even multiple of 10, then change the image with one from (_https://picsum.photos/_ (https://picsum.photos/)) (changes 6 times per minute)
- Add the ability to pause and resume the image refreshing, as well as the ability to customize the frequency so it can change between 1 and 6 times per minute)
- Whenever the image refreshes, also retrieve a fact cat from '_https://cors-anywhere.herokuapp.com/https://catfact.ninja/fact_ (https://cors-anywhere.herokuapp.com/https://catfact.ninja/fact)' and display it as a caption to the image.

*/

function addZeroIfNeeded(val) {
	return val < 10 ? `0${val}` : val;
}

class TestPage extends React.PureComponent {
	state = {
		timestamp: new Date().getTime(),
		isLocal: true,
		imageUrl: ''
	};

	componentDidMount() {
		this.intervalID = setInterval(() => {
			const date = new Date();
			if (date.getSeconds() % 10 === 0) {
				fetch('https://picsum.photos/200/300')
					.then((response) => {
						this.setState({imageUrl: response.url});
					});
			}
			this.setState({
				timestamp: date.getTime()
			});
		}, 700);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	toggleIsLocal = () => this.setState((s) => ({isLocal: !s.isLocal}));

	static containerStyle = {display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'};

	render() {
		const date = new Date(this.state.timestamp);
		const seconds = addZeroIfNeeded(date.getSeconds());
		const minutes = addZeroIfNeeded(date.getMinutes());
		const hours = addZeroIfNeeded(this.state.isLocal ? date.getHours() : date.getUTCHours());

		return (
			<div style={TestPage.containerStyle}>
				<span>{`${hours}:${minutes}:${seconds}`}</span>
				<label forHtml="local">
					<input
						name="local"
						type="checkbox"
						checked={this.state.isLocal}
						onClick={this.toggleIsLocal}
					/>
					Local?
				</label>
				<img src={this.state.imageUrl}/>
			</div>
		);
	}
}

export default TestPage;
