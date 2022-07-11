import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { headers } from '../next.config';
export default class App extends React.Component {
    static async getInitialProps({ res }) {
        const apiURL = `https://spotify23.p.rapidapi.com/search/?q=<REQUIRED>&type=multi&offset=0&limit=10&numberOfTopResults=5`;
        res.setHeader(
            'X-RapidAPI-Key', 'b1dc785001mshfad9aee9193d01ap167878jsne6beaffb1621',
            'X-RapidAPI-Host', 'spotify23.p.rapidapi.com'
        )
        res = await fetch(``)

        const data = await res.json()
        console.log(data);

        return data;
    }
    render() {
        return (
            <div className="container">
                dd
            </div>
        )
    }
}