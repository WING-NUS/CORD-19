import React from "react";
import Axios from "axios";
import HeatMap from "react-heatmap-grid";
import Header from "./Header";
import Dropdown from "react-dropdown";
import Footer from "./Footer";

class CompareMainOriginal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: { value: "Study Type", label: "Study Type" },
      graph_data: {}
    };
    this.redirectToTarget = this.redirectToTarget.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.graph_title = this.graph_title.bind(this);
    this.getData = this.getData.bind(this);
    this.Heatmap_show = this.Heatmap_show.bind(this);
  }

  getData = async () => {
    console.log("here in  get data");
    const url_graph_data = `https://cord19backend.herokuapp.com/compare/?y=${this.state.selected.value}`;
    console.log(url_graph_data);
    const result = await Axios.get(url_graph_data);
    this.setState({ graph_data: result.data });
  };

  redirectToTarget = (x, y) => {
    const to_check = `${this.state.graph_data.Xaxis[x]},${this.state.graph_data.Yaxis[y]}`;
    console.log(x);
    console.log(y);
    console.log(to_check);
    const article_group = this.state.graph_data.values[to_check];
    const articless = article_group.articles;

    this.props.history.push({
      pathname: `/CompareArticles`,
      state: { articless: articless }
    });
  };

  _onSelect(option) {
    this.setState({ selected: option });
    this.getData();
  }

  graph_title() {
    var a = "2D Compare graph of Period as X-axis and ";
    var b = this.state.selected.label;
    var c = " as Y-axis";
    var title = a.concat(b, c);
    return title;
  }

  Heatmap_show() {
    if (
      this.state.graph_data === null ||
      Object.keys(this.state.graph_data).length === 0
    ) {
      return <div>Please select Y-axis value!</div>;
    } else {
      return (
        <HeatMap
          xLabels={this.state.graph_data.Xaxis}
          yLabels={this.state.graph_data.Yaxis}
          xLabelsLocation={"bottom"}
          xLabelWidth={100}
          yLabelTextAlign={"left"}
          yLabelWidth={150}
          data={this.state.graph_data.numbers}
          height={80}
          width={200}
          // squares
          onClick={(x, y) => this.redirectToTarget(x, y)}
          cellStyle={(background, value, min, max, data, x, y) => ({
            background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
            fontSize: "20px"
          })}
          cellRender={value => value}
          title={(value, unit) => `${value}`}
        />
      );
    }
  }

  render() {
    const defaultOption = this.state.selected;
    const options = [
      { value: "Study Type", label: "Study Type" },
      { value: "Risk Factor", label: "Risk Factor" }
    ];

    return (
      <div>
        <div className="header">
          <Header />
        </div>

        <div className="control_panel">
          <div className="article">
            <div className="control_title">
              <h2>Control Panel</h2>
            </div>
          </div>

          <div className="article">
            <div className="control_title">
              <h4>2D Compare Function</h4>
            </div>
            <div className="answer-list">
              X-axis:
              <Dropdown
                disabled
                options={["Publish Time"]}
                placeholder="Publish Time"
              />
              Y-axis:
              <Dropdown
                options={options}
                onChange={this._onSelect}
                value={this.state.selected}
                placeholder="Select Y-axis"
              />
            </div>
          </div>
        </div>
        <div className="articles">
          <div className="article">
            <div className="control_title">
              <h2>{this.graph_title()}</h2>
            </div>
            <div className="answer-list">{this.Heatmap_show()}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CompareMainOriginal;
