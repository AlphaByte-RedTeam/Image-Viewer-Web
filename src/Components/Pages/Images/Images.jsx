/* eslint-disable react/jsx-no-target-blank */
import Navbar from "../../Navbar/Navbar";
import { Grid } from "react-virtualized";
import PropTypes from "prop-types";

const Images = () => {

    const modules = import.meta.glob('/src/assets/images/*.{png,jpe?g,jpg}');
    const gallery = []
    for (const path in modules) {
        let p = new URL(path, import.meta.url).href;
        p = p.replace(/^http:\/\/localhost:5173\/src\/assets\/images\//, '')
        gallery.push(p);
    }
    console.log(gallery)

    const cellRenderer = ({ key, rowIndex, columnIndex, style }) => (
        <div key={key} style={style}>
            <img src={`src/assets/images/${gallery[rowIndex]}`} alt={`Image ${gallery[rowIndex]}`} />
        </div>
    );


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
            <Grid
                cellRenderer={cellRenderer}
                columnCount={4} // Sesuaikan dengan jumlah kolom yang diinginkan
                columnWidth={200} // Sesuaikan dengan lebar kolom yang diinginkan
                height={400} // Sesuaikan dengan tinggi grid yang diinginkan
                rowCount={gallery.length} // Sesuaikan dengan jumlah baris yang diinginkan
                rowHeight={200} // Sesuaikan dengan tinggi baris yang diinginkan
                width={800} // Sesuaikan dengan lebar grid yang diinginkan
            />
        </div>
    )
}

Images.propTypes = {
    bpfrpt_proptype_WindowScroller: PropTypes.any,
};

export default Images

