import React, { Component } from "react";

// import Sticky from '../../src/react-sticky-state';
import Sticky from "react-sticky-state";

const scrollClass = {
  down: "sticky-scroll-down",
  up: "sticky-scroll-up"
};

class testxixi extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <h2>React StickyState</h2>
          <small id="output" />
          <p>
            A test page for the{" "}
            <a href="https://github.com/soenkekluth/react-sticky-state">
              React StickyState project
            </a>
          </p>
          <small>
            <p>
              markup and styles of this document are mostly copied from{" "}
              <a href="http://filamentgroup.github.io/fixed-sticky/demos/demo.html">
                filamentgroup
              </a>
            </p>
          </small>
          <div className="container" style={{ height: 600, paddingTop: 100 }}>
            <Sticky scrollClass={scrollClass}>
              <div className="top sticky" id="top-a">
                Fixed to viewport top A.
                <div className="state">state: </div>
                <div className="scroll">scrolling: </div>
              </div>
            </Sticky>
          </div>
        </div>
        <div>
          <hr />
          <div
            style={{
              paddingTop: "5%",
              paddingBottom: "5%",
              textAlign: "center"
            }}
          >
            spacer for resize testing
          </div>
          <hr />
        </div>
        <div className="center">
          <div className="overflow-x">
            <div className="overflow-content">
              <h2 className="sticky-- left-headline">scroll horizontal</h2>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ut,
            maxime reiciendis ab pariatur eaque, suscipit esse tempora nesciunt
            atque assumenda a, consequatur ex et illo qui accusamus facere quis
            ipsam tenetur. Eaque molestias quo laudantium odio! Velit nobis,
            consequatur.
          </p>
          <Sticky scrollClass={scrollClass}>
            <div id="top-b" className="top sticky">
              Fixed to viewport top <br /> with margin-top
              <div className="state">state: </div>
              <div className="scroll">scrolling: </div>
            </div>
          </Sticky>
          <p>And now, some fake content to allow scrolling...</p>
          <p>
            <strong>Pellentesque habitant morbi tristique</strong> senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
          <h2>Header Level 2</h2>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
              molestie gravida. Curabitur massa. Donec eleifend, libero at
              sagittis mollis, tellus est malesuada tellus, at luctus turpis
              elit sit amet quam. Vivamus pretium ornare est.
            </p>
          </blockquote>
          <h3>Header Level 3</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>
          <p>
            <strong>Pellentesque habitant morbi tristique</strong> senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
          <h2>Header Level 2</h2>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>
          <Sticky scrollClass={scrollClass}>
            <div id="bottom-b" className="bottom sticky">
              Fixed to viewport bottom B (1em above).
              <div className="state">state: </div>
              <div className="scroll">scroll: </div>
            </div>
          </Sticky>
          <div className="container">
            <div style={{ height: 600 }} />
            <Sticky scrollClass={scrollClass}>
              <div id="bottom-a" className="bottom sticky">
                Fixed to viewport bottom A.
                <div className="state">state: </div>
                <div className="scroll">scroll: </div>
              </div>
            </Sticky>
          </div>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
              molestie gravida. Curabitur massa. Donec eleifend, libero at
              sagittis mollis, tellus est malesuada tellus, at luctus turpis
              elit sit amet quam. Vivamus pretium ornare est.
            </p>
          </blockquote>
          <h3>Header Level 3</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>
          <h2>Sticky with overflow</h2>
          <p>fully supported. native and polyfilled</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            quaerat excepturi, amet. Corporis pariatur illum ab, ea placeat
            delectus impedit.
          </p>
          <div
            className="container"
            style={{
              height: 600,
              overflow: "auto",
              WebkitOverflowScrolling: "touch"
            }}
          >
            <p style={{ padding: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              quaerat excepturi, amet. Corporis pariatur illum ab, ea placeat
              delectus impedit.
            </p>
            <p style={{ padding: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              quaerat excepturi, amet. Corporis pariatur illum ab, ea placeat
              delectus impedit.
            </p>
            <Sticky scrollClass={scrollClass}>
              <div className="top sticky" style={{ top: "3.2em" }}>
                Fixed to overflow div top.
                <div className="state">state: </div>
                <div className="scroll">scrolling: </div>
              </div>
            </Sticky>
            <p style={{ padding: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              quaerat excepturi, amet. Corporis pariatur illum ab, ea placeat
              delectus impedit.
            </p>
            <p style={{ padding: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              quaerat excepturi, amet. Corporis pariatur illum ab, ea placeat
              delectus impedit.
            </p>
            <div style={{ height: 1000 }} />
          </div>
          <p>
            <strong>Pellentesque habitant morbi tristique</strong> senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
          <h2>Header Level 2</h2>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
              molestie gravida. Curabitur massa. Donec eleifend, libero at
              sagittis mollis, tellus est malesuada tellus, at luctus turpis
              elit sit amet quam. Vivamus pretium ornare est.
            </p>
          </blockquote>
          <h3>Header Level 3</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>
          <p>
            <strong>Pellentesque habitant morbi tristique</strong> senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
          <h2>Header Level 2</h2>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
              molestie gravida. Curabitur massa. Donec eleifend, libero at
              sagittis mollis, tellus est malesuada tellus, at luctus turpis
              elit sit amet quam. Vivamus pretium ornare est.
            </p>
          </blockquote>
          <h3>Header Level 3</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>
          <p>
            <strong>Pellentesque habitant morbi tristique</strong> senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
          <h2>Header Level 2</h2>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default testxixi;
