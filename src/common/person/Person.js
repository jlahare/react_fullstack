
import React from 'react';
import ReactDom from 'react-dom';
import { Button} from 'react-bootstrap';

class Person extends React.Component {

    render() {

        return (
            <div className="block">
                <div className="row">
                <div className="col-sm-3">
                        <label>Sr.No : {this.props.id + 1} </label>
                    </div>
                    <div className="col-sm-3">
                        <label>Name : {this.props.name} </label>
                    </div>
                    <div className="col-sm-3">
                        <label>Country : {this.props.country} </label>
                    </div>
                    <div className="col-sm-3">
                        <Button onClick={()=>this.props.onDelete(this.props.id)}>Delete </Button>
                    </div>
                </div>

            </div>
        );
    }

};

export default Person;
