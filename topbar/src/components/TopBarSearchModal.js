import styles from "../styles/TopBarSearchModal.module.css"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import SearchModalResult from "./ModalAutoCompleteResult"
import { BigModal } from "./bigModal"
import { FilterItem } from "./filterItem"
import { plugins } from "../utils/topbarApi"
import { ProfileContext } from "../context/ProfileModal"
import { CgEditStraight } from "react-icons/cg"

const base_URL = "https://jsonplaceholder.typicode.com/todos"

const TopBarSearchModal = () => {
  const [value, setValue] = useState("")
  const [keys, setKeys] = useState("")
  const [filters, setFilters] = useState({})
  const [isSearchOpen, setOpenSearch] = useState(false)

  const { user } = useContext(ProfileContext)

  let pluginName = window.location.href
  let newName = pluginName.split("/")

  let exactPlugin = plugins.find(
    plugin => newName[3] === plugin.name || newName[3] === plugin.name + "#"
  )

  const onSearchSubmit = async e => {
    if (e.keyCode === 13 && value.length >= 1) {
      setOpenSearch(true)
    }
  }

  const onInputChange = e => {
    setValue(e.target.value)
   
  }
  useEffect(() => {
    async function getData() {
      if (!exactPlugin.filterCall) {
        return
      }
      const response = await exactPlugin.filterCall(user.org_id, user._id)

      if (response.status >= 200 || response.status <= 299) {
        setFilters(response.data.data)
      }
    }
    getData()
  }, [exactPlugin.name, user._id])

  const FilterList = Object.keys(filters).map((item, i) => (
    <li key={i} className={styles.List}>
      <button
        onClick={e => {
          e.stopPropagation()
          setKeys(item)
        }}
        style={{ width: "100%", textAlign: "left" }}
      >
        <SearchModalResult title={filters[item]} />
      </button>
    </li>
  ))
  return (
    <div className={styles.topBarSearchModal}>
      <div className={styles._input}>
        {keys === "" ? null : (
          <FilterItem
            onRemove={() => {
              setKeys("")
            }}
            filter={filters[keys]}
          />
        )}
        <input
          type="text"
          placeholder="Search Here"
          value={value}
          onChange={onInputChange}
          onKeyUp={onSearchSubmit}
          className={styles._input2}
        />
      </div>
      <div
        className={styles.MainBox}
        style={keys === "" ? {} : { display: "none" }}
      >
        <div>
          <div className={styles.input_box}>
            <div className={styles.grow}>
              <div className={styles.close_icon}>
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </div>

              <input
                type="text"
                className={styles._MainInput}
                placeholder="Search Here"
                value={value}
                onChange={onInputChange}
                onKeyUp={onSearchSubmit}
              />
              {value && <button className={styles.Clear} onClick={() => { setValue('') }}>Clear</button>}
            </div>
            <div className={styles.close_icon}>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
          </div>
        </div>
        <ul className={styles.ListWrapper}>
          {filters === {} ? (
            <li>
              <SearchModalResult title="" />
            </li>
          ) : (
            FilterList
          )}

        </ul>
      </div>
      {isSearchOpen ? (
        <BigModal
          onClose={() => {
            setOpenSearch(false)
          }}
          filter={keys}
          inputValue={value}
        />
      ) : null}
    </div>
  )
}

export default TopBarSearchModal
