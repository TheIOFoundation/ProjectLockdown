import { Component } from "react";

import { magnify } from "../../assets/icons/icons.js";
// @fixme uncomment after implementing router
//import { router } from "../router.js";
import { mapboxToken } from "../Map/Map";

class CountriesSearcher extends Component {
  constructor() {
    super();
    this.state = {
      showSearchInput: false,
      geocoder: {},
      results: "",
      geoResult: {},
      parsedText: "",
      mouseHover: false,
    };
    this.openSearchInput = this.openSearchInput.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onGetResult = this.onGetResult.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onPressKey = this.onPressKey.bind(this);
    this.onLanguageChange = this.onLanguageChange.bind(this);
    this.closeComponent = this.closeComponent.bind(this);
    this.onToogleMouseState = this.onToogleMouseState.bind(this);
  }
  componentWillMount() {
    const { i18n } = this.props;
    let geocoder = new window.MapboxGeocoder({
      accessToken: mapboxToken,
      language: i18n ? i18n.locale : "en-US" + ", en-US",
      mapboxgl: window.mapboxgl,
      types: "country",
    });
    window.geoCoder = geocoder;
    geocoder.on("results", this.onGetResult);
    this.setState({
      geocoder,
    });
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onPressKey);
    document.removeEventListener("click", this.closeComponent);
  }
  componentDidMount() {
    this.state.geocoder.addTo("#blank");
    window.addEventListener("keydown", this.onPressKey);
    document.addEventListener("click", this.closeComponent);
  }
  componentDidUpdate(previousProps, previousState, snapshot) {
    if (previousProps.i18n !== this.props.i18n) {
      this.onLanguageChange();
    }
  }
  onLanguageChange() {
    const { i18n } = this.props;
    const { geocoder } = this.state;
    geocoder.setLanguage(i18n.locale);
  }
  onPressKey(e) {
    if (e.code === "Enter" && this.state.showSearchInput) {
      e.preventDefault();
      this.onConfirm();
    } else if (e.code === "Escape" && this.state.showSearchInput) {
      e.preventDefault();
      this.openSearchInput();
    }
  }
  onConfirm() {
    let { geoResult } = this.state;
    if (geoResult.center) {
      this.openSearchInput();
      this.setState({
        results: "",
        geoResult: {},
        parsedText: "",
      });
      this.props.map.flyTo({ center: geoResult.center, maxDuration: 500 });

      // --------------
      // @fixme: uncomment after implementing router
      // --------------
      // setTimeout(() => {
      //   router.setSearchParam("country", geoResult.place_name);
      //   router.setSearchParam(
      //     "iso2",
      //     geoResult.properties.short_code.toUpperCase()
      //   );
      //   router.setSearchParam("wikidata", geoResult.properties.wikidata);
      // }, 501);
    }
  }
  onSearch(e) {
    let searchInput = e.target.value;
    let { geocoder } = this.state;
    geocoder.query(searchInput);
    this.setState({ parsedText: searchInput.toUpperCase() });
  }
  openSearchInput() {
    this.setState({
      showSearchInput: !this.state.showSearchInput,
    });
  }
  closeComponent() {
    let { mouseHover, showSearchInput } = this.state;
    if (mouseHover || !showSearchInput) {
    } else if (showSearchInput) {
      this.openSearchInput();
    }
  }
  onGetResult(results) {
    let { features } = results;
    if (features[0]) {
      let countryName = features[0].text.toUpperCase();
      this.setState({
        results: countryName,
        geoResult: features[0],
      });
    } else {
      this.setState({
        results: "",
        geoResult: {},
      });
    }
  }
  onClick() {
    if (!this.state.showSearchInput) this.openSearchInput();
  }
  onToogleMouseState(isHover) {
    this.setState({
      mouseHover: isHover,
    });
  }
  render(_, { showSearchInput, results, parsedText }) {
    return (
      <div
        onMouseOver={() => this.onToogleMouseState(true)}
        onMouseOut={() => this.onToogleMouseState(false)}
        onClick={this.onClick}
        class="countriesSearcher ${showSearchInput ? 'show' : ''}"
      >
        <span class="icon-provider"> ${magnify} </span>
        <div>
          <input class="placeholder" value="${results}" disabled />
          <input
            class="countryInput"
            onInput={this.onSearch}
            value={parsedText}
          />
        </div>
        <span id="blank"></span>
      </div>
    );
  }
}

export default CountriesSearcher;
