import React, { useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsPluginExport from 'grapesjs-plugin-export';
import gjsTabs from 'grapesjs-tabs';

// import MyCustomPluginTest from './Plugins/MyCustomPluginTest';
// import gjsimageeditor from 'grapesjs-tui-image-editor';
import MyCustomPlugin from './MyCustomPlugin';
// import 'grapesjs-plugin-forms';
import plugin from 'grapesjs-preset-newsletter';
import 'grapesjs-component-code-editor/dist/grapesjs-component-code-editor.min.css';
import codeEditor from 'grapesjs-component-code-editor';
import { plugin1 } from './Plugin1';

const WebBuilder = () => {

  // const myNewComponentTypes = editor => {
  //   editor.DomComponents.addType('input', {
  //     isComponent: el => el.tagName === 'INPUT',
  //     model: {
  //       defaults: {
  //         traits: [

  //           'name',
  //           'placeholder',
  //           {
  //             type: 'select',
  //             label: 'Type',
  //             name: 'type',
  //             options: [
  //               { id: 'text', name: 'Text' },
  //               { id: 'email', name: 'Email' },
  //               { id: 'password', name: 'Password' },
  //               { id: 'number', name: 'Number' },
  //             ]
  //           }, {
  //             type: 'checkbox',
  //             name: 'required',
  //           }],

  //         attributes: { type: 'text', required: true },
  //       },
  //     },
  //   });

  //   //   editor.DomComponents.addType('input', {
  //   //     isComponent: el => el.tagName === 'INPUT',
  //   //     model: {
  //   //       defaults: {
  //   //         traits(component) {
  //   //           const result = [];

  //   //           // Example of some logic
  //   //           if (component.get('draggable')) {
  //   //             result.push({
  //   //               type: 'select', 
  //   //               label: 'Type', 
  //   //               name: 'type', 
  //   //               options: [
  //   //                 { id: 'text', name: 'Text'},
  //   //                 { id: 'email', name: 'Email'},
  //   //                 { id: 'password', name: 'Password'},
  //   //                 { id: 'number', name: 'Number'},
  //   //               ]
  //   //             });
  //   //           } else {
  //   //             result.push('name');
  //   //           }

  //   //           return result;
  //   //         }
  //   //       },
  //   //     },
  //   // });
  // }

  const [selectedContent, setSelectedContent] = useState("")
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      fromElement: true,
      // storageManager: false,
      // components: '<div class="default-section" data-gjs-type="default-section">This is the default section</div>',
      // style: '.default-section { min-height: 100vh; display: flex; justify-content: center; border: 1px solid #ccc; max-width: 400px; padding: 20px; margin: 0 auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }',
      plugins: [MyCustomPlugin, 'grapesjs-plugin-forms', plugin,'my-input-type',codeEditor],
      // plugins: [MyCustomPlugin],
      // panels: { defaults: [] }, 
    });

    
    const pn = editor.Panels;
const panelViews = pn.addPanel({
  id: 'views'
});
panelViews.get('buttons').add([{
  attributes: {
     title: 'Open Code'
  },
  className: 'fa fa-file-code-o',
  command: 'open-code',
  togglable: false, //do not close when button is clicked again
  id: 'open-code'
}]);

     // Define the custom input component type
    //  editor.DomComponents.addType('my-input', {
    //   isComponent: el => el.tagName === 'INPUT',
    //   model: {
    //     defaults: {
    //       tagName: 'input',
    //       draggable: 'form, form *',
    //       droppable: false,
    //       attributes: {
    //         type: 'text',
    //         name: 'default-name',
    //         placeholder: 'Enter text here',
    //       },
    //       traits: [
    //         'name',
    //         'placeholder',
    //         {
    //           type: 'select',
    //           name: 'type',
    //           label: 'Type',
    //           options: [
    //             { value: 'text', name: 'Text' },
    //             { value: 'email', name: 'Email' },
    //             { value: 'password', name: 'Password' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });

    // editor.DomComponents.addType('my-input', {
    //   // ...
    //   model: {
    //     defaults: {
    //       tagName: 'input',
    //       draggable: 'form, form *',
    //       droppable: false,
    //       attributes: {
    //         type: 'text',
    //         name: 'default-name',
    //         placeholder: 'Enter text here',
    //       },
    //       traits: [
    //         'name',
    //         'placeholder',
    //         {
    //           type: 'select',
    //           name: 'type',
    //           label: 'Type',
    //           options: [
    //             { value: 'text', name: 'Text' },
    //             { value: 'email', name: 'Email' },
    //             { value: 'password', name: 'Password' },
    //           ],
    //         },
    //       ],
    //     },
    
    //     init() {
    //       this.on('change:someprop', this.handlePropChange);
    //       // Listen to any attribute change
    //       this.on('change:attributes', this.handleAttrChange);
    //       // Listen to title attribute change
    //       this.on('change:attributes:title', this.handleTitleChange);
    //     },
    
    //     handlePropChange() {
    //       const { someprop } = this.props();
    //       console.log('New value of someprop: ', someprop);
    //     },
    
    //     handleAttrChange() {
    //       console.log('Attributes updated: ', this.getAttributes());
    //     },
    
    //     handleTitleChange() {
    //       console.log('Attribute title updated: ', this.getAttributes().title);
    //     },
    //   }
    // });

    //  // Add a button to the panel for the custom input component
    //  editor.Panels.addButton('options', {
    //   id: 'my-input',
    //   className: 'fa fa-pencil',
    //   command: () => {
    //     const inputComponent = editor.DomComponents.addComponent({
    //       type: 'my-input',
    //     });
    //     editor.select(inputComponent);
    //   },
    //   attributes: { title: 'Add My Input' },
    // });
    

  //   // Define the custom block
  //   editor.BlockManager.add("Test", {
  //     label: 'Test On Click',
  //     content: `
  //     <div class="custom-card-overlay">
  //     <div style="display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
  //   <div class="custom-card" style="width: 100%; text-align: center; border-radius: 20px; padding: 20px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);">
  //       <div class="card-header" style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">About Doe Enterprise</div>
  //        <div class="card-video" style="margin-bottom: 10px;">
  //            <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
  //        </div>
  //       <div class="card-text" style="font-size: 16px; margin-bottom: 10px; text-align:left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, eos sint! Ex, magnam natus aperiam tempora praesentium cum necessitatibus, accusantium sit magni suscipit corporis quos impedit minima quisquam consectetur perspiciatis.</div>
  //       <button class="card-button" style="width:100%; background-color: #dfaa4a; color: white; border: 1px solid #dfaa4a; padding: 10px; cursor: pointer; border-radius: 5px;">Featured Link</button>
  //   </div>
  //   </div>
  // </div>
  // `,
  //   });



    editor.on('component:selected', async (selectedComponent) => {
      if (selectedComponent) {
        setSelectedComponent(selectedComponent);
        // console.log(selectedComponent)
        // Get the custom component's DOM element
        const customComponentElement = selectedComponent.view.el;
        //below line for single click editable content
        // customComponentElement.contentEditable = true;
        // console.log(customComponentElement)
        // console.log(customComponentElement.id)
        // console.log(customComponentElement.classList)

        if (customComponentElement.getAttribute('data-gjs-type') === 'text') {
          const textContent = customComponentElement.innerText;
          console.log(textContent, " : text content");
          // alert(textContent, " : text content");
          setSelectedContent(textContent)
        }

        if (customComponentElement.getAttribute('data-gjs-type') === 'video') {
          const videoURL = customComponentElement.querySelector('iframe').src;
          console.log(videoURL, " : video url");
          // alert(videoURL, " : video url");
          setSelectedContent(videoURL)
        }

        if (customComponentElement.getAttribute('data-gjs-type') === 'image') {
          const imageURL = customComponentElement.getAttribute("src");
          console.log(imageURL, " : image url");
          // alert(imageURL," : image url");
          setSelectedContent(imageURL)
        }
        if (customComponentElement.getAttribute('data-gjs-type') === 'default') {
          setSelectedContent("")
        }

//     customComponentElement.addEventListener('click', (event) => {
//   // Check if it's a single click
//   if (event.detail === 1) {
//     console.log("Single click called");

//     // Set the contentEditable property to true
//     customComponentElement.contentEditable = true;

//     // Retrieve and handle the content when the custom component is clicked
//     const customComponentContent = selectedComponent.get('content');
//     console.log('Custom component content:', customComponentContent);

//     // You can perform other actions with the content here
//   }
// });

      }
    });



    // editor.on('component:selected', (component) => {
    //   const componentHTML = component.toHTML();
    //   console.log(componentHTML,"testing compo")
    //   console.log("one test",component)
    //   if (component.attributes.type === 'text') {
    //     const content = component.get('content');
    //     console.log('Selected text component content:', content);
    //   }
    // });




    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <>
      <div style={{ position: 'absolute', top: "50px", zIndex: "4", left: "15px", background: "white", width: "180px", height: "100vh" }}>
        <input
          type='text'
          style={{ height: "22px" }}
          value={selectedContent}
          placeholder='Please enter text'
          onChange={(e) => {
            setSelectedContent(e.target.value);


             // Update the content of the selected component
             if (selectedComponent && selectedComponent.attributes.type === 'text') {
              // Set the content directly on the DOM element
              selectedComponent.view.el.innerText = e.target.value;

              // Trigger a refresh of the editor to reflect the changes
              // editor.trigger('change:canvas');
            }
          }}
        />
      </div>
      <div id="editor" />
    </>
  );
};

export default WebBuilder;
