import Navbar from "../../Navbar/Navbar";

const Images = () => {
    const importAll = (r) => {
        return r.keys().map(r);
    }

    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

    return (
        <div>
            <Navbar />
            <br />
            <h3 className="text-3xl text-white underline font-bold text-center">
                Images Gallery
            </h3>
            <br />
            <br />
            <ul>
                {images.map((image, index) => (
                    <li key={index}>{image.default}</li>
                ))}
            </ul>
        </div>
    )
}

export default Images
