import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsPluginExport from 'grapesjs-plugin-export';
// import gjsTabs from 'grapesjs-tabs';
import gjsimageeditor from 'grapesjs-tui-image-editor';
import MyCustomPlugin from './MyCustomPlugin';
import 'grapesjs-plugin-forms';
import plugin from 'grapesjs-preset-newsletter';
import { cardHTML } from './CardContent';
import { cardStyles } from './CardStyles';  
import { plugin1 } from './Plugin1';

const WebBuilder = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      // components: '<div class="default-section" data-gjs-type="default-section">This is the default section</div>',
      // style: '.default-section { min-height: 100vh; display: flex; flex-direction:column; align-items:center; border: 1px solid #ccc; max-width: 400px; padding: 20px; margin: 0 auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }',
      components: cardHTML,
      style:cardStyles,
      plugins: [plugin1, gjsPresetWebpage],
      // mediaCondition: '',
      //this is for storing the content on localstorage
      storageManager: false,
      // panels: {
      //   defaults: [
      //     {
      //       id: 'your-panel-id', // Unique identifier for your panel
      //       el: '#editor', // HTML element that represents your panel
      //       // Other panel configurations here
      //     },
      //     // ... (other default panels)
      //   ]}
     
    });

    setTimeout(() => {
      let categories = editor.BlockManager.getCategories();
      categories.each((category) => category.set("open", false));
    }, 100);
    
   
    //  // Register the default-section as a droppable component
    // editor.BlockManager.add('default-section', {
    //   label: 'Default Section',
    //   content: '<div class="default-section" data-gjs-type="default-section">This is the default section</div>',
    // });

    // Optional: Add blocks, styles, etc.

    //  // Function to add a new block
    //  const addNewBlock = () => {
    //   editor.BlockManager.add('new-block-id', {
    //     label: 'New Block',
    //     content: '<div class="new-block">This is a new block</div>',
    //     // Add any additional properties or styles as needed
    //     // draggable: true,
    //   });
    // };

    // // Add a button to trigger the addition of a new block
    // const addButton = document.createElement('button');
    // addButton.innerHTML = 'Add New Block';
    // addButton.addEventListener('click', addNewBlock);
    // document.body.appendChild(addButton);

    return () => {
      editor.destroy();
      // addButton.removeEventListener('click', addNewBlock);
      // document.body.removeChild(addButton);
    };
  }, []);

  return <div class="editor-row ml-4">
    <div id="editor" />;
    </div>
};

export default WebBuilder;
