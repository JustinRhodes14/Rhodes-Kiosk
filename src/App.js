import React from "react";
import Form from "./components/Form";
import ParkInfo from "./components/ParkInfo";
import VisitorCenters from "./components/VisitorCenters";
import Articles from "./components/Articles";
import NewsReleases from "./components/NewsReleases";
import EduInfo from "./components/EduInfo";
import Events from "./components/Events";
import Alerts from "./components/Alerts";
import Home from "./components/Home";
import VCTitles from "./components/VCTitles";
import ArTitles from "./components/ArTitles";
import NRTitles from "./components/NRTitles";
import EduTitles from "./components/EduTitles";
import EvTitles from "./components/EvTitles";
import AlrtTitles from "./components/AlrtTitles";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
//to do: add bar, pictures if  u can str split("")
const API_KEY = "kHjKwA8UlJlW5B9IuGAc42is8eOVzuqiqOP7OVS4";

class App extends React.Component {

  state = { //DONE
    name: undefined,
    fullName: undefined,
    states: undefined,
    designation: undefined,
    weatherInfo: undefined,
    latLong: undefined,
    gDescription: undefined,
    error: undefined
  }

  state = {//picture
    image: undefined,
    caption: undefined,
    pTitle: undefined
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

    //picture attributes
    image: undefined,
    caption: undefined,
    title: undefined,
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

    //error attributes
    error: undefined,
    vError: undefined,
    arError: undefined,
    nError: undefined,
    edError: undefined,
    evError: undefined,
    aError: undefined
  });
    e.preventDefault();
    const stateCode = e.target.elements.stateCode.value;
    const parkCode = e.target.elements.parkCode.value;

     if (stateCode || parkCode) {
    const api_call = await fetch(`https://developer.nps.gov/api/v1/parks?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
    const data = await api_call.json(); //general data stored
    if (data.total < 1) {
      this.setState({
      error: "No parks found for given inputs, check for spelling mistakes and try again"
    });
    } else {
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

      const api_call2 = await fetch(`https://developer.nps.gov/api/v1/visitorcenters?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data2 = await api_call2.json(); //visitor center data stored
      if (data2.total < 1) {
        this.setState({
        vError: "No visitor centers found"
      });
      } else {
      console.log(data2);

        this.setState({ //visitor centers data stored
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
      const api_call3 = await fetch(`https://developer.nps.gov/api/v1/articles?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data3 = await api_call3.json(); //articles data stored
      if (data3.total < 1) {
        this.setState({
          arError: "No articles found"
        });
      } else {
      console.log(data3);
      this.setState({ //articles
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
      const api_call4 = await fetch(`https://developer.nps.gov/api/v1/newsreleases?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data4 = await api_call4.json(); //news releases data stored
      if (data4.total < 1) {
        this.setState({
        nError: "No news releases found"
      });
      } else {
      console.log(data4);
      this.setState({ //news releases
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
      const api_call5 = await fetch(`https://developer.nps.gov/api/v1/lessonplans?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data5 = await api_call5.json(); //lesson plan data stored
      if (data5.total < 1) {
        this.setState({
          edError: "No lesson plans found"
        });
      } else {
      console.log(data5);
      this.setState({ // educational sources
        objective: data5.data[0].questionobjective,
        subject: data5.data[0].subject,
        vidTitle: data5.data[0].title,
        edUrl: data5.data[0].url,
        edError: ""
      });
}
      const api_call6 = await fetch(`https://developer.nps.gov/api/v1/events?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data6 = await api_call6.json(); // event data stored
      if (data6.total < 1) {
        this.setState({
          evError: "No events found"
        });
      } else {
      console.log(data6);
      this.setState({ //events
        evTitle: data6.data[0].title,
        location: data6.data[0].location,
        contactPhone: data6.data[0].contacttelephonenumber,
        start: data6.data[0].datestart,
        end: data6.data[0].dateend,
        evDescription: data6.data[0].description,
        evError: ""
      });
}
      const api_call7 = await fetch(`https://developer.nps.gov/api/v1/alerts?limit=3&parkCode=${parkCode}&stateCode=${stateCode}&api_key=${API_KEY}`);
      const data7 = await api_call7.json(); //alerts data stored
      console.log(data7);
      if (data7.total < 1) {
        this.setState({
          aError: "No alerts found"
        });
      } else if (data7.total > 1) {
      this.setState({ // park alerts
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
    }
} else {
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
      error: "Please enter a state or a park code"
    });
  }
  }

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
//renders all panels with respective titles
  let backdrop;
  if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click = {this.backdropClickHandler} />
  }
    return (

      <div style = {{height: "100%"}}>
      <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
      <SideDrawer show = {this.state.sideDrawerOpen}/>
      {backdrop}
        <div className = "wrapper">
          <div className = "main">
            <div className = "container">
              <div className = "row">
                <div className = "col title-container">
                  <Home />
                </div>

                <div className = "col form-container">
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
          <div className = "wrapper">
            <div className = "main">
              <div className = "container">
                <div className = "row">
                  <div className = "col form-container">
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
            <div className = "wrapper">
              <div className = "main">
                <div className = "container">
                  <div className = "row">
                    <div className = "col form-container">
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
              <div className = "wrapper">
                <div className = "main">
                  <div className = "container">
                    <div className = "row">
                      <div className = "col form-container">
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
                <div className = "wrapper">
                  <div className = "main">
                    <div className = "container">
                      <div className = "row">
                        <div className = "col form-container">
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
                  <div className = "wrapper">
                    <div className = "main">
                      <div className = "container">
                        <div className = "row">
                          <div className = "col form-container">
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
                    <div className = "wrapper">
                      <div className = "main">
                        <div className = "container">
                          <div className = "row">
                            <div className = "col form-container">
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
        </div>
    );
  }
};
export default App;
