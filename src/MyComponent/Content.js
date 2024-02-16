import React from "react";
import MyImage from './Enter.png'; // Import your image
import "./content.css";

export default function Content() {
    function checkSafety() {
        var url = document.getElementById("puthere").value;
        if (url.trim() === "") {
            alert("Please enter a URL");
            return;
        }

        var apiKey = "AIzaSyCh_Gv3plsW2V4lCVrVPWiaat_PSpAp9Es";
        var apiUrl = "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=" + apiKey;

        var requestData = {
            client: {
                clientId: "Your client ID",
                clientVersion: "Your client version"
            },
            threatInfo: {
                threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
                platformTypes: ["ANY_PLATFORM"],
                threatEntryTypes: ["URL"],
                threatEntries: [{ "url": url }]
            }
        };

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.matches && data.matches.length > 0) {
                document.getElementById("result").innerText = "This URL is unsafe.";
            } else {
                document.getElementById("result").innerText = "This URL is safe.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("result").innerText = "An error occurred while checking the safety of the URL.";
        });
    }

  return (
    <>
      <div className="main">
        <h1>Gaurd Space</h1>
        <input id="puthere" placeholder="Enter a URL here" type="text" />
        <div id="container2">
          <button onClick={checkSafety} className="imageButton"> {/* Add onClick event handler */}
            <img src={MyImage} alt="Check Safety Image" className="buttonImage" /> {/* Use your image here */}
          </button>
          <div id="result"></div>
        </div>
      </div>
    </>
  );
}
