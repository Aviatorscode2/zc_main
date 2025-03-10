import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import { BsCreditCard2Back } from "react-icons/bs"
import { BiUser } from "react-icons/bi"
import { IoSettingsOutline, IoSpeedometerOutline } from "react-icons/io5"
import { FaMagic } from "react-icons/fa"
// import
import AdminSettings from "../../."
import settings from "../../assets/cog.svg"
import analytics from "../../assets/dashboard.svg"
import right_caret from "../../assets/cheveron-right.svg"
import customize from "../../assets/magic-wand.svg"
import classes from "../styles//SettingsHome.module.css"

const randomizedGreeting = ["Hey there", "Welcome,", "¡Hola,"]

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const Home = () => {
  const [greeting, setGreeting] = useState(null)
  useEffect(() => {
    const newNumber = generateRandomNumber(1, 3)
    const greetingProcedure = randomizedGreeting[newNumber]
    setGreeting(greetingProcedure)
  }, [])
  return (
    <AdminSettings>
      <Container className={`p-4 ${classes.mtN3}`}>
        <div>
          {/* Picture of User */}
          <h1 className="mb-4">{greeting} Mark</h1>
        </div>

        <div className={classes.card}>
          <div>
            <Link
              to="/admin/settings/accountsProfile"
              className=""
              style={{ display: "flex" }}
            >
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#1C9BD1" }}
                >
                  <IoSettingsOutline className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: " 1em"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Account Settings </h3>
                  <span className={classes.span_text}>
                    Edit your profile, update your username and password, and
                    manage other account settings.
                  </span>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Customize Zuri  */}
        <div className={classes.card}>
          {/* Settings and permissions*/}
          <div className="mt-2">
            <Link to="/admin/settings" className="" style={{ display: "flex" }}>
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#1C9BD1" }}
                >
                  <IoSettingsOutline className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: " 1em",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3> Settings & Permissions </h3>
                  <span className={classes.span_text}>
                    Configure your workspace settings, permissions, and
                    authentication prefrences.
                  </span>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>
          {/* Manage workspace */}
          <div className="mt-2">
            <Link to="/admin/stats" className="" style={{ display: "flex" }}>
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#DE4E2A" }}
                >
                  <BiUser className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: " 1em",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3> Manage your workspace </h3>
                  <span className={classes.span_text}>
                    Invite new members and manage user permissions
                  </span>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>

          {/* Billing */}
          <div className="mt-2" style={{}}>
            <Link
              to="/admin/settings/billings"
              className=""
              style={{ display: "flex" }}
            >
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#007A5A" }}
                >
                  <BsCreditCard2Back className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: " 1em",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3> Billing </h3>
                  <p>
                    Your workspace is on the <b>Free Plan</b> <br />
                    Upgrade to the <b>Pro Plan</b> or <b>Business + Plan</b> for
                    additional features including:
                  </p>
                  <ul style={{ fontSize: "1.1em", color: "#000" }}>
                    <li>Unlimited messages archives and search</li>
                    <li>Unlimited integrations with external services</li>
                    <li>Premuim Support</li>
                    <li>Guest accounts</li>
                    <li>Voice and video calls for group</li>
                    <li>Screen Sharing</li>
                  </ul>
                  <div style={{ display: "flex", gap: "1em" }}>
                    <button
                      style={{
                        padding: "0.4em 0.5em",
                        backgroundColor: "#007A5A",
                        color: "white",
                        borderRadius: "4px"
                      }}
                    >
                      Upgrade your team
                    </button>
                    <button
                      style={{
                        padding: " 0.4em 0.5em",
                        border: "1px solid #333",
                        borderRadius: "4px",
                        backgroundColor: "transparent"
                      }}
                    >
                      Compare Plans
                    </button>
                  </div>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>
          <hr
            style={{
              width: "calc(100% - 5%)",
              height: "0.5px",
              margin: "2em auto"
            }}
          />

          {/* Customize Zuri  */}
          <div>
            <Link
              to="/admin/settings/customize"
              className=""
              style={{ display: "flex" }}
            >
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#007A5A" }}
                >
                  <FaMagic className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: " 1em",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Customize Zuri</h3>
                  <span className={classes.span_text}>
                    Use these settings to make Zuri your own.
                  </span>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>

          {/* Analytics  */}
          <div className="mt-2">
            <Link to="/admin/stats" className="" style={{ display: "flex" }}>
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#4D394B" }}
                >
                  <IoSpeedometerOutline className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: " 1em",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3> Analytics </h3>
                  <span className={classes.span_text}>
                    View stats for your workspace, including activity, files,
                    and integrations.
                  </span>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <nav>
          <li>
            <Link to="/tour">Tour</Link>
          </li>
          <li>
            <Link to="/download-apps">Download Apps</Link>
          </li>
          <li>
            <Link to="/legal">Brand Guidelines</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/confirm-deactivation" target="_blank">
              API
            </Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <div>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Policies</Link>
            </li>
            <li>
              <Link to="/ZurichatBlog" target="_blank">
                Our Blog
              </Link>
            </li>
            <li>
              <Link to="/session-signout">Sign Out</Link>
            </li>
          </div>
        </nav>
      </Container>
    </AdminSettings>
  )
}

export default Home
