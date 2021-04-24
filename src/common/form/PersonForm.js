
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Button } from 'react-bootstrap'; 
class PersonForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            country: ''
        };
       
      }
     
     handleInput = async (event) =>
     {
        event.preventDefault();
 
        this.setState(
            {
                [event.target.name] : event.target.value
            });
      }


    render() {
        return (
            <div className="block">
                <form >
                    <div className="row">
                        <div className="col-sm-4">
                            <label>Name:</label>
                        </div>
                        <div className="col-sm-4">
                            <input name="name" type="text" onChange={this.handleInput} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <label>Country:</label>
                        </div>
                        <div className="col-sm-4">
                            <input name="country" type="text" onChange={this.handleInput}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Button onClick={()=>this.props.onAppend(this.state.name,this.state.country)} type="button">Submit</Button>
                        </div>
                        <div className="col-sm-4">
                            <Button onClick={()=>this.props.onListPerson()} type="button">List All</Button>
                        </div>

                    </div>
                </form>
            </div >
        );
    }

};

export default PersonForm;
