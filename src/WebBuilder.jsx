import React, { useEffect, useRef, useState } from 'react';
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

  const editorRef = useRef(null);

  // const projectId = getProjectId();
  const projectID = 1;
  const projectEndpoint = `http://localhost:300/projects/${projectID}`;

  const [selectedContent, setSelectedContent] = useState("")
  const [selectedComponent, setSelectedComponent] = useState(null);

  const myPlugin = editor => {
    editor.I18n.addMessages({
      en: { // indicate the locale to update
        styleManager: {
          empty: 'New empty state message',
        }
      }
    });
  }

  const customType = (editor) => {
    editor.StyleManager.addType('my-custom-prop', {
      // Create UI
      create({ props, change }) {
        const el = document.createElement('div');
        el.innerHTML = `<input type="range" class="my-input" min="${props.min}" max="${props.max}"/>`;
        const inputEl = el.querySelector('.my-input');
        inputEl.addEventListener('change', event => change({ event })); // `change` will trigger the emit
        inputEl.addEventListener('input', event => change({ event, partial: true }));
        return el;
      },
      // Propagate UI changes up to the targets
      emit({ props, updateStyle }, { event, partial }) {
        const { value } = event.target;
        updateStyle(`${value}px`, { partial });
      },
      // Update UI (eg. when the target is changed)
      update({ value, el }) {
        el.querySelector('.my-input').value = parseInt(value, 10);
      },
      // Clean the memory from side effects if necessary (eg. global event listeners, etc.)
      destroy() {
      },
    });
  };
  // alert(projectId);
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      // components: '<div class="default-section" data-gjs-type="default-section">This is the default section</div>',
      // style: '.default-section { min-height: 100vh; display: flex; flex-direction:column; align-items:center; border: 1px solid #ccc; max-width: 400px; padding: 20px; margin: 0 auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }',
      components: cardHTML,
      style: cardStyles,
      plugins: [plugin1, gjsPresetWebpage, myPlugin, customType, plugin],
      layerManager: {
        // If the `root` is not specified or the component element is not found,
        // the main wrapper component will be used.
        // root: '#my-custom-root',
        appendTo: '#layers-container',
        sortable: false,
        hidable: false,
        showWrapper: false,
      },
      // styleManager: {
      //   sectors: [
      //     {
      //       name: 'First sector',
      //       properties: [
      //         {
      //           // Default options
      //           // id: 'padding', // The id of the property, if missing, will be the same as `property` value
      //           type: 'number',
      //           label: 'Padding', // Label for the property
      //           property: 'padding', // CSS property to change
      //           default: '0', // Default value to display
      //           // Additonal `number` options
      //           units: ['px', '%'], // Units (available only for the 'number' type)
      //           min: 0, // Min value (available only for the 'number' type)
      //         },
      //         {
      //           type: 'number',
      //           label: 'Font size',
      //           property: 'font-size',
      //           units: ['px', '%', 'em', 'rem', 'vh', 'vw'],
      //           min: 0,
      //         },
      //         {
      //           type: 'select',
      //           label: 'Font size',
      //           property: 'font-size',
      //           default: '1rem',
      //           options: [
      //             { id: '0.7rem', label: 'small' },
      //             { id: '1rem', label: 'medium' },
      //             { id: '1.2rem', label: 'large' },
      //           ]
      //         },
      //         {
      //           type: 'stack',
      //           property: 'text-shadow',
      //           label: 'Stack type',
      //           // Additional props
      //           properties: [
      //             { type: 'number', units: ['px'], default: '0', property: 'x' },
      //             { type: 'number', units: ['px'], default: '0', property: 'y' },
      //             { type: 'number', units: ['px'], default: '0', property: 'blur' },
      //             { type: 'color', default: 'black', property: 'color' },
      //           ]
      //         },
      //         {
      //           name: 'My sector',
      //           properties: [
      //             {
      //               type: 'my-custom-prop',
      //               property: 'font-size',
      //               default: '15',
      //               min: 10,
      //               max: 70,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ]
      // },
      // pageManager: {
      //   pages: [
      //     {
      //       id: 'my-first-page',
      //       styles: '.my-page1-el { color: red }',
      //       component: '<div class="my-page1-el">Page 1</div>',
      //     },
      //     {
      //       id: 'my-second-page',
      //       styles: '.my-page2-el { color: blue }',
      //       component: '<div class="my-page2-el">Page 2</div>',
      //     },
      //  ]
      // },
      // mediaCondition: '',
      //this is for storing the content on localstorage
      // storageManager: true,
      // panels: {
      //   defaults: [
      //     {
      //       id: 'your-panel-id', // Unique identifier for your panel
      //       el: '#editor', // HTML element that represents your panel
      //       // Other panel configurations here
      //     },
      //     // ... (other default panels)
      //   ]}
      storageManager: {
        type: 'remote',
        stepsBeforeSave: 1,
        options: {
          remote: {
            urlLoad: projectEndpoint,
            urlStore: projectEndpoint,
            // The `remote` storage uses the POST method when stores data but
            // the json-server API requires PATCH.
            fetchOptions: opts => (opts.method === 'POST' ? { method: 'PATCH' } : {}),
            // As the API stores projects in this format `{id: 1, data: projectData }`,
            // we have to properly update the body before the store and extract the
            // project data from the response result.
            // onStore: data => {
            //   const requestData = { id: projectID, data };
            //   console.log('Data being sent to server:', requestData);
            //   return requestData;
            // },
            onStore: (data, editor) => {

              const pagesHtml = editor.Pages.getAll().map(page => {
                const component = page.getMainComponent();
                return {
                  html: editor.getHtml({ component }),
                  css: editor.getCss({ component })
                }
              });
              console.log('Data being sent to server:', pagesHtml);
              return { id: projectID, data, pagesHtml };
            },
            onLoad: result => {
              const responseData = result.data;
              console.log('Data received from server:', responseData);
              return responseData;
            },
          }
        }
      },
    });

    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        // {
        //   id: 'visibility',
        //   active: true, // active by default
        //   className: 'btn-toggle-borders',
        //   label: '<u>B</u>',
        //   command: 'sw-visibility', // Built-in command
        // }, 
        {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        }, {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command(editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
              .open();
          },
        }
      ],
    });

    

    // // to get the project data
    // const editorData = editor.getProjectData();
    // console.log(editorData)


    // editor.loadProjectData(editorData)

    editor.on('component:selected', (selectedComponent) => {
      if (selectedComponent) {
        setSelectedComponent(selectedComponent);
        // console.log(selectedComponent)
        // Get the custom component's DOM element
        const customComponentElement = selectedComponent.view.el;
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

        // // Add a click event listener to the custom component
        // customComponentElement.addEventListener('click', () => {
        //   console.log("called")
        //   // Retrieve and handle the content when the custom component is clicked
        //   const customComponentContent = selectedComponent.get('content');
        //   console.log('Custom component content:', customComponentContent);

        //   // You can perform actions with the content here
        // });
      }
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

        // Save the editor instance to the ref
        editorRef.current = editor;

    return () => {
      editor.destroy();
      // addButton.removeEventListener('click', addNewBlock);
      // document.body.removeChild(addButton);
    };
  }, []);

  return   <>
  <div class="editor-row ml-4">
  {/* <div class="panel__top">
  <div class="panel__basic-actions"></div>
</div> */}
<div style={{ position: 'absolute', top: "9%", zIndex: "4", left: "33%", background: "white", width: "180px", height: "100vh" }}>
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
          onBlur={() => {
            // Manually trigger the onStore function to save changes to the server
            editorRef.current.store();
          }}
        />
      </div>
    <div id="editor" />
    <div id="layers-container"></div>
  </div></>
};

export default WebBuilder;