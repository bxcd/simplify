const Btn = (props) => /*#__PURE__*/
React.createElement("button", { class: props.class, onClick: props.handleClick, value: props.text, id: props.value ? props.value : props.text }, props.text);
const Title = () => /*#__PURE__*/
React.createElement("h1", { id: "title" }, /*#__PURE__*/React.createElement("a", { href: "https://bxcd.github.io/simplify" }, "SIMPLIFY"));
const Logo = () => /*#__PURE__*/
React.createElement("h3", { id: "logo" }, "TR-101");
const Mode = () => /*#__PURE__*/
React.createElement("h5", { id: "mode" }, "Tap solar panel to switch light mode");
const Attribution = () => /*#__PURE__*/
React.createElement("h5", { id: "attribution" }, "Made by ", /*#__PURE__*/React.createElement("a", { target: "_blank", href: "https://github.com/bxcd/simplify" }, "bxcd"), " with ", /*#__PURE__*/React.createElement("a", { target: "_blank", href: "https://reactjs.org" }, "ReactJS"), " + ", /*#__PURE__*/React.createElement("a", { target: "_blank", href: "https://mathjs.org" }, "MathJS"));
const Readout = (props) => /*#__PURE__*/
React.createElement("section", { id: "readout" }, /*#__PURE__*/
React.createElement("table", { onClick: props.handleClick }, /*#__PURE__*/
React.createElement("input", { id: "input", value: props.expr, placeholder: props.temp, onChange: props.handleChange, onClick: props.handleClick })));


const Keypad = (props) => /*#__PURE__*/
React.createElement("section", { id: "keypad" }, /*#__PURE__*/
React.createElement("table", null, /*#__PURE__*/
React.createElement("tbody", null, /*#__PURE__*/
React.createElement("tr", null, /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "del", class: "red-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "(", class: "red-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: ")", class: "red-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "=", class: "red-button" })), /*#__PURE__*/

React.createElement("tr", null, /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "9", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "8", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "7", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "+", class: "red-button" })), /*#__PURE__*/

React.createElement("tr", null, /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "6", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "5", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "4", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "\u2013", class: "red-button" })), /*#__PURE__*/

React.createElement("tr", null, /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "3", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "2", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "1", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "*", class: "red-button" })), /*#__PURE__*/

React.createElement("tr", null, /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "0", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: ".", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "^", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "/", class: "red-button" })), /*#__PURE__*/

React.createElement("tr", null, /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "log", value: "log10(", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "ln", value: "log(", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "e", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "sqrt", value: "sqrt(", class: "red-button" })), /*#__PURE__*/

React.createElement("tr", null, /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "sin", value: "sin(", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "cos", value: "cos(", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "tan", value: "tan(", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "pi", class: "red-button" })), /*#__PURE__*/

React.createElement("tr", null, /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "arcsin", value: "asin(", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "arccos", value: "acos(", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "arctan", value: "atan(", class: "white-button" }), /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, text: "deg", class: "red-button" })))));




const Panel = (props) => /*#__PURE__*/
React.createElement("section", { id: "panel" }, /*#__PURE__*/
React.createElement("button", { id: "switch" }, /*#__PURE__*/
React.createElement("table", null, /*#__PURE__*/
React.createElement("tr", null, /*#__PURE__*/
React.createElement("td", { class: "toggle", onClick: props.toggleMode }), /*#__PURE__*/
React.createElement("td", { class: "toggle", onClick: props.toggleMode }), /*#__PURE__*/
React.createElement("td", { class: "toggle", onClick: props.toggleMode }), /*#__PURE__*/
React.createElement("td", { class: "toggle", onClick: props.toggleMode })))));




const Plate = (props) => /*#__PURE__*/
React.createElement("section", { id: "plate" }, /*#__PURE__*/
React.createElement("table", null, /*#__PURE__*/
React.createElement("tr", null, /*#__PURE__*/
React.createElement("td", null, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/
React.createElement("td", null, /*#__PURE__*/
React.createElement(Btn, { handleClick: props.handleClick, class: "blue-button", text: "AC" })))));




const Terminal = (props) => /*#__PURE__*/
React.createElement("div", { id: "terminal" }, /*#__PURE__*/React.createElement("ul", null,
props.save.map((v, i) => {
  return /*#__PURE__*/React.createElement("li", null, v);
})));

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", { class: "row" }, /*#__PURE__*/React.createElement("div", { class: "column" }, /*#__PURE__*/React.createElement(Title, null))));
  }}

class Monitor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("section", { id: "monitor" }, /*#__PURE__*/
      React.createElement(Terminal, { save: this.props.save }), /*#__PURE__*/
      React.createElement("center", null, /*#__PURE__*/
      React.createElement("div", { class: "reset-wrapper" }, /*#__PURE__*/
      React.createElement("button", { id: "reset-terminal", onClick: this.props.handleReset }, "\uD83D\uDDD1")))));




  }}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("section", { id: "calculator" }, /*#__PURE__*/
      React.createElement(Readout, { expr: this.props.expr, temp: this.props.temp, handleChange: this.props.handleChange }), /*#__PURE__*/
      React.createElement(Plate, { handleClick: this.props.handleClick }), /*#__PURE__*/
      React.createElement(Panel, { toggleMode: this.props.toggleMode }), /*#__PURE__*/
      React.createElement(Keypad, { handleClick: this.props.handleClick })));


  }}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("main", { style: { backgroundColor: this.props.mode ? '#883322' : '#333' } }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "column col-md-5" }, /*#__PURE__*/
      React.createElement(Calculator, {
        expr: this.props.expr,
        temp: this.props.temp,
        handleChange: this.props.handleChange,
        handleClick: this.props.handleClick,
        toggleMode: this.props.toggleMode })), /*#__PURE__*/


      React.createElement("div", { class: "column col-md-5" }, /*#__PURE__*/
      React.createElement(Monitor, { handleReset: this.props.handleReset, expr: this.props.expr, save: this.props.save })))));




  }}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", { class: "row" }, /*#__PURE__*/React.createElement("div", { class: "column" }, /*#__PURE__*/React.createElement(Mode, null), /*#__PURE__*/React.createElement(Attribution, null))));
  }}


class Simplify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expr: '',
      save: [],
      temp: '0',
      pad: [],
      mode: true };

    WebFont.load({
      google: {
        families: ['Quantico:400,700i', 'Poiret One'] } });


    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }
  handleClick(event) {
    let id = event.target.id;
    console.log(event.target.id);
    switch (id) {
      case 'AC':this.handleInput('');break;
      case '#':this.toggleMode();break;
      case '=':this.handleEval();break;
      case 'del':this.handleInput(this.state.expr.slice(0, -1));break;
      default:
        document.getElementById("input").focus();
        this.handleInput(this.state.expr + id);}

  }
  handleChange(event) {
    let value = event.target.value;
    console.log(value);
    if (value.includes('=')) this.handleEval();else
    this.handleInput(value);
  }
  handleInput(value) {
    this.setState({
      expr: value });

  }
  handleEval() {
    let result = math.evaluate(this.state.expr);
    let saves = this.state.save.concat(this.state.expr + ' = ' + result);
    this.setState({
      expr: result,
      save: saves });

  }
  handleReset(event) {
    let id = event.target.id;
    switch (id) {
      case 'reset-terminal':
        this.setState({
          save: [] });

        break;}

  }
  toggleMode() {
    console.log(this.state.mode);
    let inverse = !this.state.mode;
    this.setState({
      mode: inverse });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("body", null, /*#__PURE__*/
      React.createElement(Header, { mode: this.state.mode }), /*#__PURE__*/
      React.createElement(Main, { expr: this.state.expr, save: this.state.save, temp: this.state.temp, mode: this.state.mode, handleChange: this.handleChange, handleClick: this.handleClick, handleReset: this.handleReset, toggleMode: this.toggleMode }), /*#__PURE__*/
      React.createElement(Footer, { mode: this.state.mode })));


  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(Simplify, null), document.getElementById('react'));