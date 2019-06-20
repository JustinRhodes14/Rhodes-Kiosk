import React from "react";
import Form from "./components/Form";
import ParkInfo from "./components/ParkInfo";
import VisitorCenters from "./components/VisitorCenters";
import Articles from "./components/Articles";
import NewsReleases from "./components/NewsReleases";
import EduInfo from "./components/EduInfo";
import Events from "./components/Events";
import Alerts from "./components/Alerts";
import Campgrounds from "./components/Campgrounds";
import Places from "./components/Places";
import People from "./components/People";
import Home from "./components/Home";
import VCTitles from "./components/VCTitles";
import ArTitles from "./components/ArTitles";
import NRTitles from "./components/NRTitles";
import EduTitles from "./components/EduTitles";
import EvTitles from "./components/EvTitles";
import AlrtTitles from "./components/AlrtTitles";
import CampTitles from "./components/CampTitles";
import PlacesTitles from "./components/PlacesTitles";
import PeopleTitles from "./components/PeopleTitles";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
const API_KEY = "kHjKwA8UlJlW5B9IuGAc42is8eOVzuqiqOP7OVS4";
var proxyurl = "https://cors-anywhere.herokuapp.com/";

class App extends React.Component {

  state = { //general Park Info DONE
    name: undefined,
    fullName: undefined,
    states: undefined,
    designation: undefined,
    weatherInfo: undefined,
    latLong: undefined,
    gDescription: undefined,
    error: undefined
  }

  state = { //people DONE
    pplName: undefined,
    pplDescription: undefined,
    pplUrl: undefined,
    pplName2: undefined,
    pplDescription2: undefined,
    pplUrl2: undefined,
    pplError: undefined
  }

  state = { //places DONE
    pTitle: undefined,
    pDescription: undefined,
    pUrl: undefined,
    pTitle2: undefined,
    pDescription2: undefined,
    pUrl2: undefined,
    pError: undefined
  }

  state = { //campgrounds DONE
    cName: undefined,
    cInfo: undefined,
    cDescription: undefined,
    cName2: undefined,
    cInfo2: undefined,
    cDescription2: undefined,
    cError: undefined
  }

  state = {//alerts DONE
    aTitle:undefined,
    aDescription: undefined,
    category: undefined,
    aTitle2:undefined,
    aDescription2: undefined,
    category2: undefined,
    aError: undefined
  }

  state = { //articles DONE
    arTitle: undefined,
    arUrl: undefined,
    arTitle2: undefined,
    arUrl2: undefined,
    arTitle3: undefined,
    arUrl3: undefined,
    arError: undefined
  }

  state = {//events DONE
    location: undefined,
    evTitle: undefined,
    contactPhone: undefined,
    start: undefined,
    end: undefined,
    evDescription: undefined,
    evError: undefined
  }

  state = {//educational info DONE
    objective: undefined,
    subject: undefined,
    vidTitle: undefined,
    edUrl: undefined,
    edError: undefined
  }

  state = {//news DONE
    abstract: undefined,
    nUrl: undefined,
    nDate: undefined,
    abstract2: undefined,
    nUrl2: undefined,
    nDate2: undefined,
    nError: undefined
  }

  state = {//visitorcenters DONE
    vName: undefined,
    vDescription: undefined,
    vUrl: undefined,
    vName2: undefined,
    vDescription2: undefined,
    vUrl2: undefined,
    vName3: undefined,
    vDescription3: undefined,
    vUrl3: undefined,
    vError: undefined
  }


  getInfo = async (e) => { //resets page info to every time the button is pressed

    //inital data call
    this.setState({
    //general attributes
    name: undefined,
    fullName: undefined,
    states: undefined,
    designation: undefined,
    weatherInfo: undefined,
    latLong: undefined,
    gDescription: undefined,

    //visitor center attributes
    vName: undefined,
    vDescription: undefined,
    vUrl: undefined,
    vName2: undefined,
    vDescription2: undefined,
    vUrl2: undefined,
    vName3: undefined,
    vDescription3:undefined,
    vUrl3: undefined,

    //article attributes
    arTitle: undefined,
    arUrl: undefined,
    arTitle2: undefined,
    arUrl2: undefined,
    arTitle3: undefined,
    arUrl3: undefined,

    //news release attributes
    abstract: undefined,
    nUrl: undefined,
    nDate: undefined,
    abstract2: undefined,
    nUrl2: undefined,
    nDate2: undefined,

    //educational attributes
    objective: undefined,
    subject: undefined,
    vidTitle: undefined,
    edUrl: undefined,

    //event attributes
    location: undefined,
    evTitle: undefined,
    contactname: undefined,
    contactPhone: undefined,
    start: undefined,
    end: undefined,
    evDescription: undefined,

    //alerts attributes
    aTitle: undefined,
    aDescription:undefined,
    category:undefined,
    aTitle2: undefined,
    aDescription2:undefined,
    category2:undefined,

    //campground attributes
    cName: undefined,
    cInfo: undefined,
    cDescription: undefined,
    cName2: undefined,
    cInfo2: undefined,
    cDescription2: undefined,

    //places attributes
    pTitle: undefined,
    pDescription: undefined,
    pUrl: undefined,
    pTitle2: undefined,
    pDescription2: undefined,
    pUrl2: undefined,

    //people attributes
    pplName: undefined,
    pplDescription: undefined,
    pplUrl: undefined,
    pplName2: undefined,
    pplDescription2: undefined,
    pplUrl2: undefined,

    //error attributes, used for if there is no type of information for a given park
    error: undefined,
    vError: undefined,
    arError: undefined,
    nError: undefined,
    edError: undefined,
    evError: undefined,
    aError: undefined,
    cError: undefined,
    pError: undefined,
    pplError: undefined
  });
    e.preventDefault(); //prevents page refresh on button click
    const stateCode = e.target.elements.stateCode.value; //stores state code value
    const parkCode = e.target.elements.parkCode.value;  //stores park code value

     if (stateCode || parkCode) {
    const api_call = await fetch(proxyurl + `https://developer.nps.gov/api/v1/parks?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
    const data = await api_call.json(); //general data stored
    if (data.total < 1) { //if no parks were found will inform the user that they may have put in a wrong input
      this.setState({
      error: "No parks found for given inputs, check for spelling mistakes and try again"
    });
  } else { //otherwise, button will proceed to take in all the info about the park the user wants to learn more about
    console.log(data);

      this.setState({ //general
        name: data.data[0].name,
        fullName: data.data[0].fullName,
        states: data.data[0].states,
        designation: data.data[0].designation,
        weatherInfo: data.data[0].weatherInfo,
        latLong: data.data[0].latLong,
        gDescription: data.data[0].description,
        error: ""
      });

      const api_call2 = await fetch(proxyurl + `https://developer.nps.gov/api/v1/visitorcenters?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data2 = await api_call2.json(); //visitor center data stored
      if (data2.total < 1) {
        this.setState({
        vError: "No visitor centers found"
      });
      } else {
      console.log(data2);

        this.setState({ //specific data is taken
        vName: data2.data[0].name,
        vDescription: data2.data[0].description,
        vUrl: data2.data[0].url,
      });
        if (data2.total > 1) {
        this.setState({
        vName2: data2.data[1].name,
        vDescription2: data2.data[1].description,
        vUrl2: data2.data[1].url,
      });
      }
        if (data2.total > 2) {
        this.setState({
        vName3: data2.data[2].name,
        vDescription3: data2.data[2].description,
        vUrl3: data2.data[2].url,
        vError: ""
      });
    }
}
      const api_call3 = await fetch(proxyurl + `https://developer.nps.gov/api/v1/articles?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data3 = await api_call3.json(); //articles data stored
      if (data3.total < 1) {
        this.setState({
          arError: "No articles found"
        });
      } else {
      console.log(data3);
      this.setState({ //articles specific info is stored
        arTitle: data3.data[0].title,
        arUrl: data3.data[0].url,
      });
        if (data3.total > 1) {
        this.setState({
        arTitle2: data3.data[1].title,
        arUrl2: data3.data[1].url,
      });
    } if (data3.total > 2) {
      this.setState({
      arTitle3: data3.data[2].title,
      arUrl3: data3.data[2].url,
      arError: ""
    });
    }
    }
      const api_call4 = await fetch(proxyurl + `https://developer.nps.gov/api/v1/newsreleases?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data4 = await api_call4.json(); //news releases data stored
      if (data4.total < 1) {
        this.setState({
        nError: "No news releases found"
      });
      } else {
      console.log(data4);
      this.setState({ //news releases specific info is stored
        abstract: data4.data[0].abstract,
        nUrl: data4.data[0].url,
        nDate: data4.data[0].releasedate,
      });
        if (data4.total > 1) {
        this.setState({
        abstract2: data4.data[1].abstract,
        nUrl2: data4.data[1].url,
        nDate2: data4.data[1].releasedate,
        nError: ""
      });
    }
}
      const api_call5 = await fetch(proxyurl + `https://developer.nps.gov/api/v1/lessonplans?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data5 = await api_call5.json(); //lesson plan data stored
      if (data5.total < 1) {
        this.setState({
          edError: "No lesson plans found"
        });
      } else {
      console.log(data5);
      this.setState({ // educational specific info is stored
        objective: data5.data[0].questionobjective,
        subject: data5.data[0].subject,
        vidTitle: data5.data[0].title,
        edUrl: data5.data[0].url,
        edError: ""
      });
}
      const api_call6 = await fetch(proxyurl + `https://developer.nps.gov/api/v1/events?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data6 = await api_call6.json(); // event data stored
      if (data6.total < 1) {
        this.setState({
          evError: "No events found"
        });
      } else {
      console.log(data6);
      this.setState({ //event specific info is stored
        evTitle: data6.data[0].title,
        location: data6.data[0].location,
        contactPhone: data6.data[0].contacttelephonenumber,
        start: data6.data[0].datestart,
        end: data6.data[0].dateend,
        evDescription: data6.data[0].description,
        evError: ""
      });
}
      const api_call7 = await fetch(proxyurl + `https://developer.nps.gov/api/v1/alerts?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data7 = await api_call7.json(); //alerts data stored
      console.log(data7);
      if (data7.total < 1) {
        this.setState({
          aError: "No alerts found"
        });
      } else if (data7.total > 1) {
      this.setState({ // park alert specific info is stored
        aTitle: data7.data[0].title,
        aDescription: data7.data[0].description,
        category: data7.data[0].category,
        aTitle2: data7.data[1].title,
        aDescription2: data7.data[1].description,
        category2: data7.data[1].category,
        aError: ""
      });
    } else {
      this.setState({
      aTitle: data7.data[0].title,
      aDescription: data7.data[0].description,
      category: data7.data[0].category
    });
    }

    const api_call8 = await fetch(proxyurl + `https://developer.nps.gov/api/v1/campgrounds?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
    const data8 = await api_call8.json(); //campgrounds data stored
    console.log(data8);
    if (data8.total < 1) {
      this.setState({
        cError: "No campgrounds found"
      });
    } else if (data8.total === 1) {
      this.setState({ //campground specific info is stored
        cName: data8.data[0].name,
        cInfo: data8.data[0].directionsUrl,
        cDescription: data8.data[0].directionsoverview,
        cError: ""
      });
    } else {
      this.setState({
      cName: data8.data[0].name,
      cInfo: data8.data[0].directionsUrl,
      cDescription: data8.data[0].directionsoverview,
      cName2: data8.data[1].name,
      cInfo2: data8.data[1].directionsUrl,
      cDescription2: data8.data[1].directionsoverview,
      cError: ""
    });
    }

    const api_call9 = await fetch(proxyurl + `https://developer.nps.gov/api/v1/places?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`)
    const data9 = await api_call9.json(); //places info is stored
    console.log(data9);

    if (data9.total < 1) {
      this.setState({
        pError: "No places found"
      });
    } else if (data9.total > 1) {
      this.setState({ //place specific info is stored
        pTitle: data9.data[0].title,
        pDescription: data9.data[0].listingdescription,
        pUrl: data9.data[0].url,
        pTitle2: data9.data[1].title,
        pDescription2: data9.data[1].listingdescription,
        pUrl2: data9.data[1].url
      });
    } else {
      this.setState({
        pTitle: data9.data[0].title,
        pDescription: data9.data[0].listingdescription,
        pUrl: data9.data[0].url,
      });
    }

    const api_call10 = await fetch(proxyurl + `https://developer.nps.gov/api/v1/people?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`)
    const data10 = await api_call10.json(); //people info is stored
    console.log(data10);

    if (data10.total < 1) {
      this.setState({
        pplError: "No relevant people found"
      });
    } else if (data10.total > 1) {
      this.setState({ //people specific info is stored
      pplName: data10.data[0].title,
      pplDescription: data10.data[0].listingdescription,
      pplUrl: data10.data[0].url,
      pplName2: data10.data[1].title,
      pplDescription2: data10.data[1].listingdescription,
      pplUrl2: data10.data[1].url
      });
    } else {
      this.setState({
      pplName: data10.data[0].title,
      pplDescription: data10.data[0].listingdescription,
      pplUrl: data10.data[0].url,
      });
    }
    }
} else { //if park && state codes are blank, it will inform the user that they need to enter something
      this.setState({
      name: undefined,
      fullName: undefined,
      states: undefined,
      designation: undefined,
      weatherInfo: undefined,
      latLong: undefined,
      gDescription: undefined,
      image: undefined,
      caption: undefined,
      title: undefined,
      vName: undefined,
      vDescription: undefined,
      vUrl: undefined,
      vName2: undefined,
      vDescription2: undefined,
      vUrl2: undefined,
      vName3: undefined,
      vDescription3:undefined,
      vUrl3: undefined,
      arTitle: undefined,
      arUrl: undefined,
      arTitle2: undefined,
      arUrl2: undefined,
      arTitle3: undefined,
      arUrl3: undefined,
      abstract: undefined,
      nUrl: undefined,
      nDate: undefined,
      abstract2: undefined,
      nUrl2: undefined,
      nDate2: undefined,
      objective: undefined,
      subject: undefined,
      vidTitle: undefined,
      edUrl: undefined,
      location: undefined,
      evTitle: undefined,
      contactname: undefined,
      contactPhone: undefined,
      start: undefined,
      end: undefined,
      evDescription: undefined,
      aTitle: undefined,
      aDescription:undefined,
      category:undefined,
      aTitle2: undefined,
      aDescription2:undefined,
      category2:undefined,
      cName: undefined,
      cInfo: undefined,
      cDescription: undefined,
      cName2: undefined,
      cInfo2: undefined,
      cDescription2: undefined,
      cError: undefined,
      pTitle: undefined,
      pDescription: undefined,
      pUrl: undefined,
      pTitle2: undefined,
      pDescription2: undefined,
      pUrl2: undefined,
      pplName: undefined,
      pplDescription: undefined,
      pplUrl: undefined,
      pplName2: undefined,
      pplDescription2: undefined,
      pplUrl2: undefined,
      error: "Please enter a state or a park code"
    });
  }
  }

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => { //handles side drawer movement and functionality
    this.setState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => { //enables backdrop, which makes it seem as if the background behind the side drawer is shaded
    this.setState({sideDrawerOpen: false});
  }
  render() {
{/*renders all panels with respective titles*/}
  let backdrop;
  if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click = {this.backdropClickHandler} />
  }
    return (

      <div style = {{height: "100%"}}>
      <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/> {/*loads top 3 bars for toolbar*/}
      <SideDrawer show = {this.state.sideDrawerOpen}/> {/*loads side drawer info*/}
      {backdrop}

        {/*park info & home button*/}
        <div className = "wrapper">
          <div className = "main">
            <div className = "container">
              <div className = "row">

                <div className = "col title-container">
                  <Home />
                </div>


                <div id = "div1" className = "col form-container">
                <Form getInfo ={this.getInfo}/>
                <ParkInfo
                  name = {this.state.name}
                  states = {this.state.states}
                  designation = {this.state.designation}
                  latLong = {this.state.latLong}
                  gDescription = {this.state.gDescription}
                  error = {this.state.error}
                 />
                 </div>
                </div>
              </div>
            </div>
          </div>

          {/*visitor centers*/}
          <div className = "wrapper">
            <div className = "main">
              <div className = "container">
                <div className = "row">
                  <div id = "div2" className = "col form-containerVisitor">
                   <VCTitles />
                   <VisitorCenters
                    vName = {this.state.vName}
                    vDescription = {this.state.vDescription}
                    vUrl = {this.state.vUrl}
                    vName2 = {this.state.vName2}
                    vDescription2 = {this.state.vDescription2}
                    vUrl2 = {this.state.vUrl2}
                    vError = {this.state.vError}
                    />
                   </div>
                  </div>
                </div>
              </div>
            </div>

            {/*articles*/}
            <div className = "wrapper">
              <div className = "main">
                <div className = "container">
                  <div className = "row">
                    <div id = "div3" className = "col form-containerArticles">
                     <ArTitles />
                     <Articles
                      arTitle = {this.state.arTitle}
                      arUrl = {this.state.arUrl}
                      arTitle2 = {this.state.arTitle2}
                      arUrl2 = {this.state.arUrl2}
                      arTitle3 = {this.state.arTitle3}
                      arUrl3 = {this.state.arUrl3}
                      arError = {this.state.arError}
                      />
                     </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*news releases*/}
              <div className = "wrapper">
                <div className = "main">
                  <div className = "container">
                    <div className = "row">
                      <div id = "div4" className = "col form-containerNews">
                       <NRTitles />
                       <NewsReleases
                        abstract = {this.state.abstract}
                        nUrl = {this.state.nUrl}
                        nDate = {this.state.releaseDate}
                        abstract2 = {this.state.abstract2}
                        nUrl2 = {this.state.nUrl2}
                        nDate2 = {this.state.nDate2}
                        nError = {this.state.nError}
                        />
                       </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*educational info*/}
                <div className = "wrapper">
                  <div className = "main">
                    <div className = "container">
                      <div className = "row">
                        <div id = "div5" className = "col form-containerEducation">
                         <EduTitles />
                         <EduInfo
                          objective = {this.state.objective}
                          subject = {this.state.subject}
                          vidTitle = {this.state.vidTitle}
                          edUrl = {this.state.edUrl}
                          edError = {this.state.edError}
                          />
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*events info*/}
                  <div className = "wrapper">
                    <div className = "main">
                      <div className = "container">
                        <div className = "row">
                          <div id = "div6" className = "col form-containerEvents">
                           <EvTitles />
                           <Events
                            evTitle = {this.state.evTitle}
                            location = {this.state.location}
                            contactPhone = {this.state.contactPhone}
                            start = {this.state.start}
                            end = {this.state.end}
                            evDescription = {this.state.evDescription}
                            evError = {this.state.evError}
                            />
                           </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*alerts info*/}
                    <div className = "wrapper">
                      <div className = "main">
                        <div className = "container">
                          <div className = "row">
                            <div id = "div7" className = "col form-containerAlerts">
                             <AlrtTitles />
                             <Alerts
                              aTitle = {this.state.aTitle}
                              category = {this.state.category}
                              aDescription = {this.state.aDescription}
                              aTitle2 = {this.state.aTitle2}
                              category2 = {this.state.category2}
                              aDescription2 = {this.state.aDescription2}
                              aError = {this.state.aError}
                              />
                             </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*campground info*/}
                      <div className = "wrapper">
                        <div className = "main">
                          <div className = "container">
                            <div className = "row">
                              <div id = "div8" className = "col form-containerCGrounds">
                               <CampTitles />
                               <Campgrounds
                                cName = {this.state.cName}
                                cDescription = {this.state.cDescription}
                                cInfo = {this.state.cInfo}
                                cName2 = {this.state.cName2}
                                cDescription2 = {this.state.cDescription2}
                                cInfo2 = {this.state.cInfo2}
                                cError = {this.state.cError}
                                />
                               </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/*places info*/}
                        <div className = "wrapper">
                          <div className = "main">
                            <div className = "container">
                              <div className = "row">
                                <div id = "div9" className = "col form-containerPlaces">
                                 <PlacesTitles />
                                 <Places
                                  pTitle = {this.state.pTitle}
                                  pDescription = {this.state.pDescription}
                                  pUrl = {this.state.pUrl}
                                  pTitle2 = {this.state.pTitle2}
                                  pDescription2 = {this.state.pDescription2}
                                  pUrl2 = {this.state.pUrl2}
                                  pError = {this.state.pError}
                                  />
                                 </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/*people info*/}
                          <div className = "wrapper">
                            <div className = "main">
                              <div className = "container">
                                <div className = "row">
                                  <div id = "div9" className = "col form-containerPeople">
                                   <PeopleTitles />
                                   <People
                                    pplName = {this.state.pplName}
                                    pplDescription = {this.state.pplDescription}
                                    pplUrl = {this.state.pplUrl}
                                    pplName2 = {this.state.pplName2}
                                    pplDescription2 = {this.state.pplDescription2}
                                    pplUrl2 = {this.state.pplUrl2}
                                    pplError = {this.state.pplError}
                                    />
                                   </div>
                                  </div>
                                </div>
                              </div>
                            </div>
        </div>
    );
  }
};
export default App;
