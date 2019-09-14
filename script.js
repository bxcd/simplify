const inputStyle = { width: '235px', height: '30px', backgroundColor: '#449944', fontFamily: 'Quantico', fontSize: '20px', textAlign: 'right' };
const mainStyle = { margin: 'auto', width: '260px', height: '360px', verticalAlign: 'middle', border: '5px groove #0090F7', borderRadius: '0px 0px 15px 15px', backgroundColor: '#0070D7' };
const titleStyle = { margin: '10px', fontFamily: 'Quantico', fontWeight: 'bold', fontStyle: 'italic', fontSize: '16px', color: 'white', textShadow: '1px 1px #222' };
const clearBtnStyle = { width: '165px', height: '24px', backgroundColor: '#0070D7', color: 'white', fontWeight: 'bold', fontSize: '11px', textAlign: 'right' };
const redBtnStyle = { width: '60px', height: '24px', backgroundColor: '#C73000', color: 'white', fontWeight: 'bold', fontSize: '11px' };
const blueBtnStyle = { width: '60px', height: '24px', backgroundColor: 'white', color: '#1040A0', fontWeight: 'bold', fontSize: '11px' };
const Btn = (props) =>
React.createElement("button", { style: props.style, onClick: props.handleClick, value: props.text, id: props.text }, props.text);
const Logo = () =>
React.createElement("h3", { style: titleStyle }, "TG-108");
const Title = () =>
React.createElement("center", null, React.createElement("h1", { style: { fontSize: '24px' } }, "simplify"));
const Attribution = () =>
React.createElement("center", null, React.createElement("h5", { style: { fontFamily: 'sans', fontSize: '8px' } }, "Made by rjbx with React and MathJS"));
const Display = (props) =>
React.createElement("section", null,
React.createElement("table", { style: { margin: 'auto', paddingTop: '20px' }, onClick: props.handleClick },
React.createElement("input", { style: inputStyle, value: props.expr, placeholder: props.temp, onChange: props.handleChange, onClick: props.handleClick })));


const Keypad = (props) =>
React.createElement("section", null,
React.createElement("table", { style: { margin: 'auto' } },
React.createElement("tbody", null,
React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "del", style: redBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "(", style: redBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: ")", style: redBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "=", style: redBtnStyle })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "9", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "8", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "7", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "+", style: redBtnStyle })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "6", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "5", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "4", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "\u2013", style: redBtnStyle })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "3", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "2", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "1", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "*", style: redBtnStyle })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "0", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: ".", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "^", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "/", style: redBtnStyle })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "log", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "ln", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "e^", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "sqrt", style: redBtnStyle })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "sin", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "cos", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "tan", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "pi", style: redBtnStyle })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "arcsin", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "arccos", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "arctan", style: blueBtnStyle }),
React.createElement(Btn, { handleClick: props.handleClick, text: "deg", style: redBtnStyle })))));




const Panel = (props) =>
React.createElement("section", null,
React.createElement("button", { value: "panel", style: { backgroundColor: '#0070D7', border: '3px inset #0090FF' } },
React.createElement("table", { style: { margin: 'auto', border: '1px solid #952', width: '240px', height: '30px', backgroundColor: '#222' } },
React.createElement("tr", null,
React.createElement("td", { id: "toggle", style: { border: '1px solid #520' }, onClick: props.handleClick }),
React.createElement("td", { id: "toggle", style: { border: '1px solid #520' }, onClick: props.handleClick }),
React.createElement("td", { id: "toggle", style: { border: '1px solid #520' }, onClick: props.handleClick }),
React.createElement("td", { id: "toggle", style: { border: '1px solid #520' }, onClick: props.handleClick })))));




const Plate = (props) =>
React.createElement("section", null,
React.createElement("table", null,
React.createElement("tr", null,
React.createElement("td", null, React.createElement(Logo, null)),
React.createElement("td", null,
React.createElement(Btn, { handleClick: props.handleClick, style: clearBtnStyle, text: "AC" })))));





class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement("header", null, React.createElement(Title, null));
  }}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("main", { style: mainStyle },
      React.createElement(Display, { expr: this.props.expr, temp: this.props.temp, handleChange: this.props.handleChange }),
      React.createElement(Plate, { handleClick: this.props.handleClick }),
      React.createElement(Panel, { handleClick: this.props.handleClick }),
      React.createElement(Keypad, { handleClick: this.props.handleClick })));


  }}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement("footer", null, React.createElement(Attribution, null));
  }}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expr: '',
      temp: '0',
      mode: false };

    WebFont.load({
      google: {
        families: ['Quantico:400,700i'] } });


    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleMode = this.toggleMode(this);
  }
  handleClick(event) {
    let id = event.target.id;
    console.log(event.target.id);
    switch (id) {
      case 'AC':this.handleInput('');break;
      case 'toggle':this.toggleMode();break;
      case '=':this.handleEval();break;
      case 'del':this.handleInput(this.state.expr.slice(0, -1));break;
      default:this.handleInput(this.state.expr + id);}

  }
  handleChange(event) {
    this.handleInput(event.target.value);
  }
  handleInput(value) {
    this.setState({
      expr: value });

  }
  handleEval() {
    let result = math.evaluate(this.state.expr);
    this.setState({
      expr: result });

  }
  toggleMode() {
    let inverse = !this.state.dark;
    this.setState({
      mode: inverse });

  }
  render() {
    return (
      React.createElement("body", null,
      React.createElement(Header, { mode: this.state.mode }),
      React.createElement(Main, { expr: this.state.expr, temp: this.state.temp, mode: this.state.mode, handleChange: this.handleChange, handleClick: this.handleClick }),
      React.createElement(Footer, { mode: this.state.mode })));


  }}
;

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('react'));