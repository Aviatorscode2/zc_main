import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import styles from "./styles/marketplace.module.css"
import MarketPlaceContainer from "./components/marketplace-container/MarketPlaceContainer"
import Footer from "../../components/Footer"
import { InstallPluginSvg } from "./components/marketplace-container/InstallPluginSvg"
import { CollaborationSvg } from "./components/marketplace-container/CollaborationSvg"
import { DiscoverPluginSvg } from "./components/marketplace-container/DiscoverPluginSvg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import MarketplaceHeader from "./components/marketplace-container/MarketplaceHeader"
import { MarketPlaceProvider } from "../../context/MarketPlace.context.js"
import axios from "axios"
import { Helmet } from "react-helmet"
import Header from "../../components/Header"

const MarketPlace = () => {
  const [userDetails, setUserDetails] = useState(null)
  return (
    <MarketPlaceProvider>
      <Helmet>
        <title>Market Place - Zuri Chat</title>
      </Helmet>
      <div className={styles.marketplace}>
        <div
          className={`w-100 d-flex flex-wrap justify-content-between align-items-baseline ${styles.marketplaceNavbar}`}
        >
          <Header />
        </div>
        <div className={styles.marketplaceHero}>
          <Row className={`align-items-center justify-content-center`}>
            <Col md={8}>
              <h1>Your number one plugin hub created for better experience</h1>
              <p className="p-0">
                Integrate your favorite plugins and get more exciting experience
                from the Zuri app. Collaborate, work smarter and better.{" "}
              </p>
              <div className="d-flex align-items-center">
                <div className={styles.marketplaceSearchBar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                      fill="rgba(190,190,190,1)"
                    />
                  </svg>
                  <input type="text" placeholder="Search Plugins" />
                </div>
                <button className={styles.marketplaceHeroButton}>Search</button>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.circleBackground}>
                <div className={styles.marketplaceSvg}>
                  <DiscoverPluginSvg />
                  <div className={styles.svgConnectionLineOne}>
                    <svg
                      width="179"
                      height="205"
                      viewBox="0 0 179 255"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M178.001 1C1.00098 71.8269 1.00098 255 1.00098 255"
                        stroke="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.marketplaceSvg}>
                  <InstallPluginSvg />
                  <div className={styles.svgConnectionLineTwo}>
                    <svg
                      width="516"
                      height="108"
                      viewBox="0 0 516 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.00003C1 1.00003 104.32 137.772 248.96 136.997C450.427 135.917 515 1.00003 515 1.00003"
                        stroke="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.marketplaceSvg}>
                  <CollaborationSvg />
                  <div className={styles.svgConnectionLineThree}>
                    <svg
                      width="184"
                      height="205"
                      viewBox="0 0 184 255"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00001 1C183 71.8269 183 255 183 255"
                        stroke="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.marketPlaceContainer}>
          <Tabs
            className={styles.marketplaceTabs}
            selectedTabClassName={styles.marketplaceTabSelected}
          >
            <div
              className={`d-flex justify-content-between w-100 ${styles.marketplaceContainerMain}`}
            >
              <div>
                <h2 className={styles.marketplaceContainerTitle}>
                  Marketplace for you
                </h2>
                <p className={styles.marketplaceContainerCaption}>
                  Get Plugins that you would enjoy
                </p>
              </div>
              <TabList className={styles.marketplaceTabList}>
                <Tab className={styles.marketplaceTab}>New plugin</Tab>
                <Tab className={styles.marketplaceTab}>Recommended for you</Tab>
                <Tab className={styles.marketplaceTab}>Popular Plugins</Tab>
              </TabList>
            </div>
            <Row className={`mx-0`}>
              <TabPanel>
                <MarketPlaceContainer />
              </TabPanel>
              <TabPanel>
                <MarketPlaceContainer />
              </TabPanel>
              <TabPanel>
                <MarketPlaceContainer />
              </TabPanel>
            </Row>
          </Tabs>
        </div>
        <Footer />
      </div>
    </MarketPlaceProvider>
  )
}

export default MarketPlace
