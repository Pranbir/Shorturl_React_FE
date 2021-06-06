import React, { useState, useRef } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './home.css'
import axios from "axios";

const apiURL = "http://127.0.0.1:8000/get_code"

function Home() {
    const [urlValue, seturlValue] = useState("")
    const urlValueState = useRef()
    urlValueState.current = urlValue

    const form_handler = (e) =>{
        e.preventDefault();
        let temp = urlValue;
        seturlValue("Loading...")
        axios.post(apiURL, {url: temp}).then((response) => {
            let data = response.data;
            let url = data.data.url;
            seturlValue(url)
          }, (error) => {
            seturlValue("An error occured. Try again later.")
            setTimeout(() => {
                seturlValue(temp);
              }, 1000);
            console.log(error);
          })
        
    }
    return (
      <div>
        <Header />
        <div id="cover">
          <form method="post" action="#">
            <div className="tb">
              <div className="td">
                <input type="text" placeholder="Type your URL" required value={urlValue} onChange={(e) => seturlValue(e.target.value)}/>
              </div>
              <div className="td" id="s-cover">
                <button type="submit" onClick={form_handler}>
                  <div id="s-circle"></div>
                  <span></span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
}

export default Home
