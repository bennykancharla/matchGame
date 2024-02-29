import './index.css'

const TabListItem = props => {
  const {tabDetails, onChangeTabItem, activeTab} = props
  const {displayText, tabId} = tabDetails
  const onClickTabBtn = () => {
    onChangeTabItem(tabId)
  }
  const buttonClass = activeTab === tabId ? 'tab-item active-item' : 'tab-item'
  return (
    <li>
      <button type="button" className={buttonClass} onClick={onClickTabBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabListItem
