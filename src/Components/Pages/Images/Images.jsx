import Navbar from "../../Navbar/Navbar";

const Images = () => {

    const modules = import.meta.glob('/src/assets/images/*.{png,jpe?g,jpg}');
    const gallery = []
    for (const path in modules) {
        const p = new URL(path, import.meta.url).href;
        gallery.push(p);
    }
    console.log(gallery)


    return (
        <div>
            <Navbar />
            <br />
            <h3 className="text-3xl text-white underline font-bold text-center">
                Images Gallery
            </h3>
            <br />
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((image, index) => (
                    <a href={image} target="_blank">
                        <img src={image} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Images

