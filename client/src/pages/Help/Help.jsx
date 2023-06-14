import React, { useState } from "react";
import "./help.css";
import { Collapse, Space } from "antd";
const { Panel } = Collapse;

function Help() {
  return (
    <div className="help">
      <div className="helphead">
        <h1>Help Section</h1>
        <p>
          Contact us or read our FAQ section to know about the app and its usage
        </p>
      </div>
      <div className="help-second">
        <h1>FAQs</h1>

        <section className="faq_bottom">
          <Space direction="vertical">
            <Collapse collapsible="header" defaultActiveKey={["1"]}>
              <Panel className="faq_head" header="What is Devcom and how does it work ?" key="1">
                <p>
                  Devcom is an app to help you find partners for your hackathons
                  or projects.
                </p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header">
              <Panel header="Do I need to pay for the hackathons ?" key="2">
                <p>
                  All the hackathons are free and users have to register via
                  Devfolio platform.
                </p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header">
              <Panel header="How to connect with teammates ?" key="3">
                <p>
                  Click on the connect button which is available on every posts
                  in the newsfeed. Once clicked, a notification will send to the
                  other person and where a chat session will open.
                </p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header">
              <Panel header="Is this app free to use ?" key="4">
                <p>This app is completely free to use as of now.</p>
              </Panel>
            </Collapse>
          </Space>
        </section>
      </div>
    </div>
  );
}

export default Help;
