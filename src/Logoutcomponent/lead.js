import React from 'react';
import './leaderboard.css';
// import { Tabs, Tab } from 'react-bootstrap';
// import { ApiHeader } from '../../../../_helpers/ApiHeader';

// import { useState, useEffect } from 'react'







const Lead = (props) => {

    // const [data, setData] = useState('');
    // const [show, setShow] = useState(false);
    // const [datehandler, setDatehandler] = useState(22);

// useEffect(()=>{
//     let bodystuff = {
//         "tournament_id": "WeeklyTournament05_" + datehandler + "_2022"

//     }
//     fetch(process.env.API_URL + 'cctournament/game/leaderboard', {
//         method: 'POST',
//         body: JSON.stringify(bodystuff),
//         headers: ApiHeader('auth')
//     })
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             if (Object.keys(data).length > 0) {

//                 setData({ "data": data.player });
//             }
//             else {
//                 setData({ "data": {} });
//                 setData({ "errorUsername": "There was a network error, please try again" })
//                 //   this.setState({"error" : data.message});
//             }
//         })
//         .catch(err => {
//             console.log("fetch error" + err);
//         });
// })

    
// const monthDay= ()=> {
//     var date = new Date();
//     var loop_count = 5;
//     var days = [];
//     var prev_sunday;
//     var loop_index;
//     function getPreviousSunday(date) {
//         return new Date(
//             new Date(date).setDate(
//                 date.getDate() - (date.getDay() || 7)
//             )
//         );
//     }

//     for (loop_index = 1; loop_index <= loop_count; loop_index++) {
//         prev_sunday = getPreviousSunday(prev_sunday || date);
//         days.push(prev_sunday.toDateString());
//     }

//     return setMonth(days);

// }


    return (

        <div
         className={show === false ? 'leaderboard_sec' : 'leaderboard_sec'}
         >
            <h4 className="centerText">Leaderboard</h4>
            {/* // var sun = days.map(dat => dat.substr(3,7)) */}

            {/* {days.map(dat =>  <li>{dat.substr(3,7)}</li>)} */}
            {/* <Tabs
                id="controlled-tab-example"
                onSelect={(e) => setDatehandler(e)}
                className="mb-3"
            >
                <Tab eventKey={22} title="May 22">
                </Tab>
                <Tab eventKey={15} title="May 15">
                </Tab>
                <Tab eventKey={8} title="May 08" >
                </Tab>
                <Tab eventKey={1} title="May 01" >
                </Tab>
                <Tab eventKey={24} title="Apr 24" >
                </Tab>
            </Tabs> */}
            {/* <div className="centerText margin_t_30 leaderboard_data">
                {
                    // Object.keys(data).length > 0 ?
                    //     (data.map(function (item, i) {
                    //         return <div key={i} className="leaderboardLine">
                    //             <div>{i + 1}.&emsp;{item.player_name}</div>
                    //             <div>{item.score}</div>
                    //         </div>
                    //     })) : (
                    //         <div> No Data Found</div>
                    //     )
                    // console.log("fdata", data)
                }
            </div> */}
        </div>
    );
}



export default Lead


















import React from 'react';
import './leaderboard.css';
import {Tabs,Tab} from 'react-bootstrap';
import { ApiHeader } from '../../../../_helpers/ApiHeader';

import { months } from '../../../../components/Commoncomponent/Common';

export default class LeaderboardModule extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      heading : "Leaderboard",
      images: this.images,
      showThumbnails: false,
      data: [],
      monthId:[],
      sundayId:[],
      tabData:[],

    };
    
    this.getData = this.getData.bind(this);
    this.setDatehandler = this.setDatehandler.bind(this);
    this.monthDay = this.monthDay.bind(this);
  
  
  }
  
  
  
  componentDidUpdate(prevProps) {    
     if (this.state.show) {
      this.getData()
    }
  }
  
  componentWillMount() {
    this.getData();
  }

  setDatehandler(date){
    this.setState({date: date})
      console.log(date)
  this.getData(date)
  }
  getData(prop) {
    // const id = Object.keys(this.state.tabData).length > 0 ?
    // this.state.tabData.filter(tab => tab.date === prop)[0].month : ""
    // let month = months.findIndex(id)
    const id = this.state.sundayId.length > 0 && this.state.sundayId.findIndex(id => id == prop)
    const monthId = this.state.monthId[id]
    console.log(id,"id");
    console.log(this.state.sundayId,"idstate");
    let bodystuff = {
      "tournament_id": "WeeklyTournament"+monthId>= 10 ? monthId : `0${monthId}` +"_" + prop + "_2022"

    }
    

    fetch(process.env.API_URL+'cctournament/game/leaderboard', {
        method: 'POST',
        body: JSON.stringify(bodystuff),
        headers: ApiHeader('auth')
      })
      .then(response => { 
        return response.json();
      })
      .then(data => {
        console.log(data); 
        if (Object.keys(data).length > 0 ) {
          
          this.setState({"data" : data.player});      
        }
        else {
          this.setState({"data" : {}});    
          this.setState({"errorUsername" : "There was a network error, please try again"})
        //   this.setState({"error" : data.message});
        }
      })
      .catch(err => {
          console.log("fetch error" + err);
      });
    //  this.monthDay()
  }
   monthDay(){
    var date = new Date();
    var loop_count = 5;
    var days = [];
    var prev_sunday;
    var loop_index;
    const monthId = [];
    const sundayId =[];
    const tabData =[];
    function getPreviousSunday(date) {
      return new Date(
        new Date(date).setDate(
          date.getDate() - (date.getDay() || 7)
        )
      );
    }
    
    for (loop_index = 1; loop_index <= loop_count; loop_index++) {
      prev_sunday = getPreviousSunday(prev_sunday || date);
      days.push(prev_sunday);
    }
    
    days.map(date => {
      const month = date.getMonth() + 1;
      const day = date.getDate()
      monthId.push(month);
      sundayId.push(day);
      tabData.push({
        month: months[month - 1],
        date: day,
      })
    });
    this.setState({
      monthId,
      sundayId,
      tabData,
    })
       console.log("days",days);
       console.log("mothId",monthId);
       console.log("daysId",sundayId);
       console.log("tabData",tabData);
  
    // days.map(day => console.log(day))
  }
  
  componentDidMount(){
    this.setDatehandler(22)
     this.monthDay()
   
  }
  
  render(){
    
    return (
      <div className={this.state.show === false ? 'leaderboard_sec' : 'leaderboard_sec'}>
        <h4 className="centerText">{this.state.heading}</h4>
  {/* // var sun = days.map(dat => dat.substr(3,7)) */}

        {/* {days.map(dat =>  <li>{dat.substr(3,7)}</li>)} */}
        <Tabs
      id="controlled-tab-example"
       onSelect={(e) => this.setDatehandler(e)}
      className="mb-3"
    >
      {/* <Tab eventKey={22} title="May 22">      
      </Tab>
      <Tab eventKey={15} title="May 15">
      </Tab>
      <Tab eventKey={8} title="May 08" >
      </Tab>
      <Tab eventKey={1} title="May 01" >
      </Tab>
      <Tab eventKey={24} title="Apr 24" >
      </Tab> */}
      {
        this.state.tabData.map(tab => {
          return(
            <Tab eventKey={tab.date} title={`${tab.month } ${tab.date} `} key={tab.date}></Tab>
          )
        })
      }
    </Tabs>
        <div className="centerText margin_t_30 leaderboard_data">
          {
            Object.keys(this.state.data).length > 0 ?
            (this.state.data.map(function(item, i){
              return <div key={i} className="leaderboardLine">
                <div>{i+1}.&emsp;{item.player_name}</div>
                <div>{item.score}</div>
              </div>
            })) : (
              <div> No Data Found</div>
            )
          }
        </div>
      </div>
    );
  }
}


