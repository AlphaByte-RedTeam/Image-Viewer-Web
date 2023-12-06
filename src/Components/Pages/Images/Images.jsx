import Navbar from "../../Navbar/Navbar";
import { useVirtualizer } from "@tanstack/react-virtual";

const Images = () => {

    const modules = import.meta.glob('/src/assets/images/*.{png,jpe?g,jpg}');
    const gallery = []
    for (const path in modules) {
        const p = new URL(path, import.meta.url).href;
        gallery.push(p);
    }
    console.log(gallery)

    const renderItem = ({ image }) => (
        <a href={image} target="_blank">
            <img src={image} />
        </a>
    );

    //const virtualizer = useVirtualizer(gallery, renderItem);
    const virtualizer = useVirtualizer(gallery, renderItem, {
        observeElementOffset: true,
        offset: ({ element }) => {
            return {
                top: element.getBoundingClientRect().top,
                left: element.getBoundingClientRect().left,
            };
        },
    });


    return (
        <div>
            <Navbar />
            <br />
            <h3 className="text-3xl text-white underline font-bold text-center">
                Images Gallery
            </h3>
            <br />
            <br />
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((image, index) => (
                    <a href={image} target="_blank">
                        <img src={image} />
                    </a>
                ))}
            </div> */}


            <ul>
                {virtualizer()}
            </ul>


        </div>
    );
}

export default Images

