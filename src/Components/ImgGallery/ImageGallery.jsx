const ImageGallery = ({ imageList }) => {
    return (
        <div>
            {imageList.map((image, index) => (
                <img

                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="w-24 h-24 m-2"
                />
            ))}
        </div>
    )
}

export default ImageGallery;
