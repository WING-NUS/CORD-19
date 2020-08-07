import React from "react";
import Axios from "axios";
import HeatMap from "react-heatmap-grid";
import Header from "./Header";
import Dropdown from "react-dropdown";
import Footer from "./Footer";

class Compare extends React.Component {
  // const graph_type = props.location.state.graph_type;
  constructor(props) {
    super(props);
    this.state = {
      selected: props.location.state.selected_dict,
      graph_data: props.location.state.graph_data_value,
      graph_type: props.location.state.graph_type_value
    };
    this.redirectToTarget = this.redirectToTarget.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.graph_title = this.graph_title.bind(this);
    this.getData = this.getData.bind(this);
    this.get_graph_data = this.get_graph_data.bind(this);
  }

  getData = async () => {
    const url_graph_data = `https://cord19backend.herokuapp.com/compare/?y=${this.state.selected.value}`;
    if (this.state.selected.value !== "") {
      const result = await Axios.get(url_graph_data);
      this.setState({ graph_data: result.data });
    }
    console.log(url_graph_data);
  };

  get_graph_data = () => {
    this.getData();
  };

  redirectToTarget = (x, y) => {
    const to_check = `${this.state.graph_data.Xaxis[x]},${this.state.graph_data.Yaxis[y]}`;
    const article_group = this.state.graph_data.values[to_check];
    const articless = article_group.articles;

    this.props.history.push({
      pathname: `/CompareArticles`,
      state: {
        articless: articless,
        x_value: this.state.graph_data.Xaxis[x],
        y_value: this.state.graph_data.Yaxis[y]
      }
    });
  };

  _onSelect(option) {
    this.setState({ selected: option });
    this.props.history.push({
      pathname: `/compare/${option.value}`,
      state: {
        graph_type_value: option.value,
        selected_dict: option,
        graph_data_value: {}
      }
    });
  }

  graph_title() {
    var a = "Article Classified By ";
    var b = this.state.selected.label;
    var c = " Over Time ";
    var title = a.concat(b, c);
    return title;
  }

  Heatmap_show() {
    console.log(this.state.graph_data);
    if (
      this.state.graph_data === null ||
      Object.keys(this.state.graph_data).length === 0 ||
      this.state.graph_data.Ytype !== this.state.selected.value
    ) {
      return <div>Processing. Please Wait.</div>;
    } else {
      return (
        <HeatMap
          xLabels={this.state.graph_data.Xaxis_with_total}
          yLabels={this.state.graph_data.Yaxis_with_total}
          xLabelsLocation={"bottom"}
          xLabelWidth={200}
          yLabelTextAlign={"left"}
          yLabelWidth={200}
          data={this.state.graph_data.numbers}
          height={50}
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
            {this.get_graph_data()}
            <div className="answer-list">{this.Heatmap_show()}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Compare;
