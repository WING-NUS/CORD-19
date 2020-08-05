import React from "react";
import Axios from "axios";
import HeatMap from "react-heatmap-grid";
import Header from "./Header";
import Dropdown from "react-dropdown";
import Footer from "./Footer";

class CompareMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: { value: "Study Type", label: "Study Type" },
      graph_data: {}
    };
    this._show_defaultResult = this._show_defaultResult.bind(this);
  }

  _show_defaultResult() {
    this.props.history.push({
      pathname: `/compare/${this.state.selected.value}`,
      state: {
        graph_type_value: this.state.selected.value,
        selected_dict: this.state.selected,
        graph_data_value: {}
      }
    });
  }

  render() {
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
                // onChange={this._onSelect}
                value={this.state.selected}
                placeholder="Select Y-axis"
              />
            </div>
          </div>
        </div>
        <div className="articles">
          <div className="article">
            <div className="control_title">
              <h2>2D Compare Graph</h2>
            </div>
            <div>Please select Y-axis value!</div>
            {/* <div className="answer-list">{this.Heatmap_show()}</div> */}
          </div>
        </div>
        {this._show_defaultResult()}
        <Footer />
      </div>
    );
  }
}

export default CompareMain;
