import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { For } from 'million/react'

const Images = () => {
    const parentRef = React.useRef(null);
    
    const imageModules = import.meta.glob('/src/assets/images/*.{png,jpe?g,jpg}');
    const gallery = Object.keys(imageModules).map((path) => {
        const imageUrl = new URL(path, import.meta.url).href;
        return imageUrl;
    });
    const imgCount = gallery.length;

    const rowVirtualizer = useVirtualizer({
        count: imgCount,
        estimateSize: () => 100,
        getScrollElement: () => parentRef.current,
        // debug: true,
        // horizontal: true,
        // measureElement: async (el, instance) => {
        //     if (el) {
        //         // Sesuaikan pengukuran sesuai dengan kebutuhan, Mengukur elemen menggunakan getBoundingClientRect()
        //         const rect = el.getBoundingClientRect();
        //         const height = rect.height;

        //         // Set ukuran yang diukur ke virtualizer.
        //         instance.resizeItem(el.dataset.index, height);
        //     }
        // },
    })

    const virtualItems = rowVirtualizer.getVirtualItems();

    return (
        <div ref={parentRef} className="flex flex-row gap-4">
            <For
                each={virtualItems}
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                  }}
                as="div"
            >
                {(item) => (
                    <div
                        key={item.key}
                        style={
                            {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                fontSize: '20px',
                                height: `100%`,
                                transform: `translateY(${item.start}px)`,
                              }
                        }
                    >
                        {/* Image {item.index} */}
                        <a href={item.key} target="_blank" rel="noopener noreferrer">
                            <img
                                src={item.key}
                                alt={`Image ${item.index}`}
                            />
                        </a>
                    </div>
                )}
            </For>
            {/* {virtualItems.map((virtualItem) => (
                <div
                    key={virtualItem.index}
                    data-index={virtualItem.index}
                    ref={rowVirtualizer.ref}
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: rowVirtualizer.getTotalSize(),
                        transform: `translateY(${virtualItem.start}px)`,
                    }}
                >
                    <a href={virtualItem.key} target="_blank" rel="noopener noreferrer">
                        <img
                            src={virtualItem.key}
                            alt={`Image ${virtualItem.index}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </a>
                </div>
            ))} */}

        </div>
    );
};

export default Images;
