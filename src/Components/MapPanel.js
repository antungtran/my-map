import React, {Component} from 'react';
import './MapPanel.css';

class MapPanel extends Component{
	componentDidMount(){
		window.vbd.pathImgMap = "http://images.vietbando.com/ImageLoader/GetImage.ashx?Ver=2015&LayerIds=RC_VN&Level={z}&X={x}&Y={y}";
		window.vbd.ZoomControlOptions({
			position: window.vbd.ControlPosition.BOTTOM_RIGHT
		});

	    let mapProp = {
	        center: new window.vbd.LatLng(10.7778096,106.656389),
	        zoom: 17,
	        maxZoom: 21
	    };
		let map = new window.vbd.Map(document.getElementById("mapPanel"), mapProp);	
	}

	render(){
		return <div id="mapPanel" className="mapPanel"></div>
	}
}

export default MapPanel;