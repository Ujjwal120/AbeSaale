import React from 'react';

import ImageEditor from 'my-image-editor';
import './Imageloader.css';

const Imageloader = () => {

    const mytheme = {
        'common.bi.image': `${process.env.PUBLIC_URL}/images/logo.svg`,
        'common.bisize.width': '52px',
        'common.bisize.height': '45px',
        'common.backgroundImage': 'none',
        'common.backgroundColor': '#202022',
        'common.border': '0px',
      
        // header
        'header.backgroundImage': 'none',
        'header.backgroundColor': 'transparent',
        'header.border': '1px',
      
        // load button
        'loadButton.backgroundColor': '#fff',
        'loadButton.border': '1px solid #ddd',
        'loadButton.color': '#222',
        'loadButton.fontFamily': "inherit",
        'loadButton.fontSize': 'inherit',
      
        // download button
        'downloadButton.width': '0px',
        'downloadButton.display': 'none',
      
        // main icons
        'menu.normalIcon.color': '#8a8a8a',
        'menu.activeIcon.color': '#555555',
        'menu.disabledIcon.color': '#434343',
        'menu.hoverIcon.color': '#e9e9e9',
        'menu.iconSize.width': '24px',
        'menu.iconSize.height': '24px',
      
        // submenu icons
        'submenu.normalIcon.color': '#8a8a8a',
        'submenu.activeIcon.color': '#e9e9e9',
        'submenu.iconSize.width': '32px',
        'submenu.iconSize.height': '32px',
      
        // submenu primary color
        'submenu.backgroundColor': '#202022',
        'submenu.partition.color': '#3c3c3c',
      
        // submenu labels
        'submenu.normalLabel.color': '#8a8a8a',
        'submenu.normalLabel.fontWeight': 'lighter',
        'submenu.activeLabel.color': '#fff',
        'submenu.activeLabel.fontWeight': 'lighter',
      
        // checkbox style
        'checkbox.border': '0px',
        'checkbox.backgroundColor': '#fff',
      
        // range style
        'range.pointer.color': '#fff',
        'range.bar.color': '#666',
        'range.subbar.color': '#d1d1d1',
      
        'range.disabledPointer.color': '#414141',
        'range.disabledBar.color': '#282828',
        'range.disabledSubbar.color': '#414141',
      
        'range.value.color': '#fff',
        'range.value.fontWeight': 'lighter',
        'range.value.fontSize': '11px',
        'range.value.border': '1px solid #353535',
        'range.value.backgroundColor': 'rgb(245, 71, 138)',
        'range.title.color': '#fff',
        'range.title.fontWeight': 'lighter',
      
        // colorpicker style
        'colorpicker.button.border': '1px solid #1e1e1e',
        'colorpicker.title.color': '#fff',
    }

    return <ImageEditor 
        includeUI={{
        loadImage: {
        path: '',
        name: '',
        },
        theme : mytheme,
        menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'filter', 'icon', 'text', 'mask'],
        initMenu: 'filter',
        uiSize: {
        width: '100%',
        },
        menuBarPosition: 'bottom',
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70,
        }}
        usageStatistics={false}
    />;
}

export default Imageloader;