var React = require('react');
var ReactDOM = require('react-dom');

var CountDownEventName = React.createClass({
  render: function () {
    return (
      <div className="cdscd__name">{this.props.name}</div>
    );
  }
});

var CountDownEventDate = React.createClass({
  render: function () {
    return (
      <div className="cdscd__date">{this.props.date}</div>
    )
  }
});

var CountDownLeftNumber = React.createClass({
  render: function () {
    return (
      <div className="cdscd__left">{this.props.diff}</div>
    );
  }
});

var CountDownLeftSuppl = React.createClass({
  render: function () {
    return (
      <div className="cdscd__suppl">Dayz {this.props.text}</div>
    );
  }
});

var CountDownUtil = React.createClass({
  componentDidMount: function () {
    var Pikaday = require('pikaday');
    var picker = new Pikaday({ field: document.getElementById('datepicker') });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    if (this.refs.eventName.value && this.refs.eventDate.value) {
      this.props.update(this.refs.eventName.value, this.refs.eventDate.value);
    } else {
      alert('Invalid Date >_<')
    }
  },
  render: function () {
    return (
      <div className="cds__util cdsutil">
        <span className="cdsutil_refresh leftFloat"></span>
        <span className="cdsutil_username leftFloat">Tinir Shen</span>
        <form className="cdsutil__Form cufm" onSubmit={this.handleSubmit}>
          <input className="cufm__name" type="text" ref="eventName" placeholder="Event Name"></input>
          <input className="cufm__date" type="text" ref="eventDate" id="datepicker"></input>
          <input className="cufm__submit" type="submit" value="+"></input>
        </form>
      </div>
    );
  }
});

var CountDown = React.createClass({
  render: function () {
    var text = "Left";

    var date = new Date(this.props.countdown.date);
    var diff = date - (new Date()); // in milliseconds
    var diffInDays = Math.floor(diff/1000/3600/24);
    if (diffInDays < 0) {
      text = "Ago"
    }
    diffInDays = Math.abs(diffInDays);

    return (
      <div className="cds__cd cdscd">
        <CountDownEventName name={this.props.countdown.name}></CountDownEventName>
        <CountDownEventDate date={this.props.countdown.date}></CountDownEventDate>
        <CountDownLeftNumber diff={diffInDays}></CountDownLeftNumber>
        <CountDownLeftSuppl text={text}></CountDownLeftSuppl>
      </div>
    );
  }
});

var CountDownList = React.createClass({
  getInitialState: function() {
    return {
      countdowns: [
        {
          name: 'Xinxin\'s 21st Birthday',
          date: '2016-05-12'
        }
      ],
      formStyle: {
        display: 'hidden'
      }
    };
  },
  update: function (name, date) {
    var curr = this.state.countdowns;
    curr.push({name: name, date: date});
    this.setState({countdowns: curr});
  },
  render: function () {
    return (
      <div className="cds">
        {this.state.countdowns.map(function (cd, i) {
          return ( <CountDown countdown={cd} key={i}></CountDown> );
        })}
        <CountDownUtil update={this.update}></CountDownUtil>
      </div>
    );
  }
});

ReactDOM.render(
  <CountDownList></CountDownList>,
    document.getElementById('example')
  );
