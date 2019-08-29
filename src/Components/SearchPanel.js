import React, {Component} from 'react';
import './SearchPanel.css';

class SearchPanel extends Component{
	render(){
		return <div id="search-component">
			    	<div className="searchbox-hamburger-container">
	                    <button id="btnLeftMenu" className="searchbox-hamburger"></button>
	                </div>
	                <div className="searchbox searchbox-shadow noprint directions-button-shown searchbox-empty suggestions-shown" id="searchbox" >
	                    <div className="initial-searchbox-wrapper" id="searchbox_form">
	                      <input aria-autocomplete="list" aria-haspopup="true" placeholder="Search Vietbando Maps" autoComplete="off" autoFocus="autofocus" className="tactile-searchbox-input" id="searchboxinput"></input>
	                    </div>
	                    <div className="searchbox-searchbutton-container">
	                        <button aria-label="Search" className="searchbox-searchbutton" id="searchbox-searchbutton"></button>
	                    </div>
	                    <div className="searchbox-directions-container" jstcache="98">
	                        <button className="searchbox-directions" id="searchbox-directions">
	                        </button>
	                    </div>
	                    <a aria-label="Clear search" className="gsst_a" role="button">
	                        <span aria-label="Clear search" className="sbcb_a" id="sb_cb50">
	                        </span>
	                    </a>
		            </div>

		            <div className="suggestions">
		            	<ul className="list-suggestions">
		            		<li className="item">
		            			<i className="fas fa-map-marker"></i>  
		            			Công ty cổ phần tin học bản đồ việt nam
		            		</li>
		            	</ul>
		            </div>
				</div>
	}
}

export default SearchPanel;