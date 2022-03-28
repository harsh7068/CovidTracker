import React from "react";

export default class API extends React.Component {
    state= {
        
    };

    async componentDidMount() {
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Countries);
    }

    render() {
        return (
            <div>Loading</div>
        )
    }
}