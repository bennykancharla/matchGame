import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImageItem} = props
  const {thumbnailUrl, id} = imageDetails
  const onClickImage = () => {
    onClickImageItem(id)
  }
  return (
    <li>
      <button type="button" className="image-btn" onClick={onClickImage}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
