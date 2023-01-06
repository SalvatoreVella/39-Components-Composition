import React from "react"
import Login from "./Login"

export default class Container extends React.Component {
    render() {
        return (
            <div className="bg-white border border-red-900 m-5 p-6">
               {this.props.title && <h1 className="text-3xl text-center font-bold pb-5">{this.props.title}</h1>}
                <Login />
            </div>
        )
    }
}