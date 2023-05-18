import React, {Component} from "react";

class Basket extends Component {
    render () {

        const {actions} = this.props;


        return (
            <div className="basket">
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1044" width="35" height="25">
	<title>148959-svg</title>
	<g id="Layer">
		<path id="Layer" fillRule="evenodd" className="s0" d="m184.2 1.1c16.6 3.5 30.8 15.9 37 32.5 2.1 5.7 2.2 7.5 2.6 46l0.3 40.1 9.2 0.7c10.1 0.8 147.7 12.5 275.2 23.5 44.6 3.9 104.9 9.1 134 11.6 29.2 2.5 115.3 10 191.5 16.5 76.2 6.6 168 14.5 204 17.5 36 3 69.3 5.9 74 6.4 4.7 0.5 44.4 4 88.3 7.7l79.7 6.9v60.5l-63.7 94.7c-35 52.2-83.9 124.9-108.6 161.8-24.8 36.8-54.6 81.2-66.3 98.7l-21.4 31.6-10.2 0.6c-5.7 0.3-55.1 1-109.8 1.6-54.7 0.6-133.2 1.5-174.5 2-41.2 0.5-111.9 1.4-157 2-189.5 2.3-248.9 3.1-319.5 4-41 0.6-84.2 1-96.1 1h-21.6l-0.7-48.3c-0.4-26.5-1.1-89.2-1.6-139.2-1-89.9-2.3-206.6-3.6-322.8l-0.7-59.7h-39.9c-44.9 0-49.2-0.5-59.5-6.6-29.2-17.5-33.9-55.7-9.6-78.4 7.2-6.8 13.7-10.4 22.1-12.4 7.4-1.9 138-2.3 146.4-0.5zm42.6 217.9c-1.6 0-1.8 1.3-1.8 13.8 0 7.7 0.3 21.3 0.6 30.3l0.7 16.5 27.1 1.3c14.9 0.6 32.4 1.5 38.9 1.8l11.7 0.6-0.2-28.9-0.3-28.9-37.5-3.2c-20.6-1.8-38.3-3.2-39.2-3.3zm180.5 15.4l-4.3-0.5v27c0 23.8 0.2 27.1 1.6 27.1 2.5 0 63.4 2.9 70.2 3.4l6.2 0.4v-50.7l-4.2-0.5c-2.4-0.3-18-1.7-34.8-3.1-16.8-1.4-32.4-2.8-34.7-3.1zm176.5 15.6h-3.8v45.9l4.3 0.5c2.3 0.3 15.7 1 29.7 1.6 14 0.6 29.7 1.3 34.8 1.7l9.2 0.6v-22.2c0-17-0.3-22.1-1.2-22.1-0.7 0-16.6-1.4-35.3-3-18.7-1.6-35.7-3-37.7-3zm174.5 15c-1 0-1.3 4.7-1.3 20v20h4.3c2.3 0 17.3 0.7 33.2 1.5 16 0.8 31.6 1.5 34.8 1.5h5.7v-36.6l-37.7-3.2c-20.8-1.8-38.4-3.2-39-3.2zm181 15.4l-5.3-0.6v33l8.3 0.6c4.5 0.3 18.8 1 31.7 1.6 12.9 0.6 27 1.3 31.3 1.6l7.7 0.5v-30l-3.2-0.5c-1.8-0.3-17.2-1.7-34.3-3.1-17-1.4-33.4-2.8-36.2-3.1zm176.5 15.2l-3.8-0.4v26.8h14.7l7.7-11.6c4.3-6.4 7.6-11.8 7.3-12-0.2-0.2-5.3-0.9-11.3-1.4-6-0.6-12.6-1.2-14.6-1.4zm-877 83.7l-11.8-0.6v16.5c0 9.1 0.3 22 0.7 28.6l0.6 12.2h75.7v-53.7l-26.7-1.2c-14.8-0.6-32.1-1.4-38.5-1.8zm173.5 8.1l-9.3-0.6v49.9l28.7 0.6c15.7 0.4 33.3 0.7 39 0.7h10.3v-46.9l-4.2-0.5c-2.4-0.3-15.8-1-29.8-1.6-14-0.5-29.7-1.3-34.7-1.6zm173.9 8.4c-3-0.2-5.6-0.1-5.8 0.1-0.2 0.2-0.4 9.7-0.4 21.1v20.7l11.3 0.6c6.1 0.4 23.7 0.7 39 0.7h27.7v-20c0-18.1-0.2-20-1.7-20-0.9 0-15.9-0.7-33.2-1.5-17.4-0.8-34-1.6-36.9-1.7zm182 8.5l-11.2-0.6 0.2 17.9 0.3 17.9 38.8 0.3 38.7 0.2v-32.7l-27.7-1.2c-15.3-0.7-32.9-1.5-39.1-1.8zm174.1 8.1c-5.7-0.4-7.4-0.3-7.8 0.8-0.3 0.8-0.4 7.2-0.3 14.4l0.3 12.9 39.3 0.3 39.2 0.2v-24.8l-8.7-0.6c-4.9-0.3-19.1-1.1-31.8-1.6-12.6-0.6-26.3-1.3-30.2-1.6zm-712.6 125.8c-0.2-2-0.4-0.1-0.4 4.3 0 4.4 0.2 6.1 0.4 3.7 0.2-2.3 0.2-5.9 0-8zm2.7-3.1c-1.1 0-1.4 0.3-0.6 0.6 0.7 0.3 1.6 0.2 1.9-0.1 0.4-0.3-0.2-0.6-1.3-0.5zm71.6 0.9l-32.2 0.2c-17.8 0.1-29.7 0.3-26.5 0.5 3.1 0.2 5.7 0.8 5.7 1.4 0 0.5 6.1 7 13.5 14.4 11.4 11.4 14 13.5 16.7 13.7 1.8 0.1-1.6 0.5-7.7 0.8-9.4 0.5-8 0.6 9.8 0.8l20.7 0.2zm112.3 0h-13.3v31h9.8c5.3 0 22.9-0.3 39-0.7l29.2-0.6v-28.4l-25.7-0.6c-14.1-0.4-31.6-0.7-39-0.7zm179.5 1.3l-15.8-0.6v28.6l24.2-0.6c13.3-0.4 30.8-0.7 39-0.7h14.8v-26h-23.2c-12.8 0-30.4-0.3-39-0.7zm239.2 1.7l-38.6-0.2c-21.2-0.2-38.8-0.1-39 0.1-0.2 0.2-0.4 5.8-0.4 12.4v12l12.2-0.6c6.6-0.4 24.2-0.7 39-0.7h26.8zm145 1h-46.1l0.3 10.2c0.2 5.7 0.6 10.2 1.1 10 0.4-0.1 7.6-0.2 16-0.2h15.4l6.7-10z"/>
		<path id="Layer" fillRule="evenodd" className="s0" d="m878 684.9c69.3 12 122.4 61.3 132.6 123 2.4 14.9 1.5 37.8-2 51.9-13.7 54.6-61.1 98.1-121.6 111.7-40.1 8.9-81.8 4.2-118.6-13.4-44.8-21.5-75.1-58.5-84.5-103.4-2.9-13.5-3.1-36.1-0.5-49.2 5.4-27.1 17.2-50.1 36.6-70.7 26.6-28.5 65.5-47.1 108-51.8 12.3-1.3 36.6-0.4 50 1.9zm-46.5 47.2c-40.8 4.3-77.2 28-92.4 60.3-1.6 3.3-3.2 7.2-3.5 8.6-0.3 1.5 0.2 0.9 1.3-1.4 1-2.1 2-3.3 2.2-2.8 0.3 0.7 2.3 0.6 6.2-0.3 5.3-1.2 20.3-3.1 21.9-2.7 0.3 0.1 2 0.4 3.7 0.7 1.7 0.3 4.4 1.3 6.1 2.3 5.6 3.5 6.4 5.2 14.7 31.7 3.7 12.1 11.1 25.3 21.7 39.3 5.3 7 45.1 44.3 53.9 50.6 6.5 4.5 6.4 4.5 3.7 4.6-1.4 0.1-1.9 0.4-1.2 0.7 3.1 1.2 24.4-5.2 36.1-10.9 9-4.4 21.2-12.7 27.5-18.6 10.1-9.6 20.6-25.3 24.7-36.8 10-28.7 4.6-58.2-15.1-82.7-7.3-9.1-11.5-13.1-21.5-20.2-17.5-12.5-38.5-20.2-61.4-22.5-11.5-1.1-17-1.1-28.6 0.1z"/>
		<path id="Layer" fillRule="evenodd" className="s0" d="m475.2 802.3c2.6 12.3 3.1 36.7 0.9 48.7-5.8 31.8-25.1 64.2-50.4 84.8-51.1 41.5-120.9 51.6-182.7 26.5-41.5-16.9-74.4-50.2-88.5-89.3-8.5-23.7-9.8-51.8-3.5-76.7 15.5-61.4 76.2-108.3 147-113.6 84.8-6.4 161.2 45.2 177.2 119.6zm-193.2-67.7c-15.8 3.5-34.8 12.1-47.1 21.4-7.3 5.5-18.1 16.5-22.6 23.1-3.6 5.3-9.8 17.4-10.7 20.9-0.6 2.5-0.6 2.5 0.5 0.2 0.7-1.2 1.6-2.2 2.1-2.2 0.5 0 0.6-0.5 0.2-1.2-0.4-0.7-0.3-0.8 0.5-0.4 0.6 0.4 5.5 0 10.9-1 5.3-0.9 11.3-1.6 13.2-1.5 6.3 0.3 11.5 1.2 11.8 2.2 0.2 0.5 1.1 0.9 2 0.9 2.4 0.1 7.8 8.6 9.6 15 0.8 3 2 7.3 2.7 9.5 0.7 2.2 1.3 4.4 1.4 5 0.1 0.5 0.5 1.9 1 3 0.4 1.1 1.7 4.2 2.7 7 1.9 4.8 9.5 19.4 10.7 20.5 0.3 0.3 1.9 2.4 3.4 4.7 1.6 2.3 4.8 6.2 7 8.6 2.3 2.5 6 6.4 8.2 8.8 3.6 4 17.1 16.5 30 28 2.8 2.4 5.2 4.7 5.5 5 0.3 0.3 3.6 2.9 7.4 5.7 6.5 4.9 6.7 5.2 4 5.3-1.7 0.1-2.2 0.3-1.1 0.6 2.3 0.6 13.8-2.1 22.9-5.3 34.3-12.4 59.6-38 67.9-68.9 2.8-10.3 3-28.8 0.6-38.8-4.7-18.9-14.7-35-30.6-49-15.7-14-36.4-23.8-58.7-28.1-16.7-3.1-38.4-2.8-55.4 1zm48.4 189.5c-1.1 0-1.4 0.3-0.6 0.6 0.7 0.3 1.6 0.2 1.9-0.1 0.4-0.3-0.2-0.6-1.3-0.5z"/>
	</g>
</svg>
{actions}
            </div>
        )
    }
}



export default Basket;