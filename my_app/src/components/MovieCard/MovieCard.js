import React, { Component } from 'react';
import './style.css';
import Rate from 'rc-rate';
import addRate from '../../services/addRate';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: props.movie,
            rate: this.calculateRate(props.movie.rate)
        }
    }

    calculateRate = (rates) => {
        //rates es un arreglo de calificaciones.
        let suma = rates.reduce((a, b) => a + b);
        let average = suma / (rates.length);
        return average;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.movie !== prevProps.movie) {
            this.setState({
                movie: this.props.movie,
                rate: this.calculateRate(this.props.movie.rate)
            })
        }
    }

    render() {
        return (
            <div className="card" style={{ width: "14rem" }}>
                <h5 className="card-title" onClick={() => this.props.redirect(this.state.movie._id)}>{this.state.movie.name}</h5>
                <div className="card-body">
                    <p className="card-text">{this.state.movie.plot}</p>
                    <Rate count={5} defaultValue={this.state.rate} allowHalf onChange={(rate) => this.props.getRate(this.state.movie._id, rate)} />
                </div>
            </div>
        )
    }

}

export default MovieCard;
