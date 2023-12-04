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
import gjsbasics from 'grapesjs-blocks-basic';

const WebBuilder = () => {

  const editorRef = useRef(null);

  // const projectId = getProjectId();
  const projectID = 1;
  const projectEndpoint = `http://localhost:300/projects/${projectID}`;

  const [selectedContent, setSelectedContent] = useState("")
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [showCustomPanel, setShowCustomPanel] = useState(true)

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

  const handleSectionButtonClick = () => {
    setActiveSection('section');
    openBlockManager();
  };

  const handleBlockButtonClick = () => {
    setActiveSection('block');
    openBlockManager();
  };

  const openBlockManager = () => {
    setTimeout(() => {
      if (editorRef.current) {
        editorRef.current.Panels.getButton('views', 'open-blocks').set('active', true)
      }
    }, 0);
  };

  useEffect(() => {

    let pluginsArray = [];

    if (activeSection === 'section') {
      pluginsArray = [plugin1];
    } else if (activeSection === 'block') {
      pluginsArray = [gjsbasics];
    }

    const editor = grapesjs.init({
      container: '#editor',
      components: cardHTML,
      style: cardStyles,
      // plugins: [plugin1, gjsPresetWebpage, myPlugin, customType, plugin],
      plugins: [...pluginsArray],
      layerManager: {
        appendTo: '#layers-container',
        // sortable: false,
        hidable: false,
        showWrapper: false,
      },
      storageManager: {
        type: 'remote',
        stepsBeforeSave: 1,
        options: {
          remote: {
            urlLoad: projectEndpoint,
            urlStore: projectEndpoint,

            fetchOptions: opts => (opts.method === 'POST' ? { method: 'PATCH' } : {}),

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
      showDevices: false,
      // showToolbar:false,
    });

    editor.on('run:preview',()=>{
      setShowCustomPanel(false);
    })
    editor.on('stop:preview',()=>{
      setShowCustomPanel(true);
    })

    //this is to add new custom name in layer manager
    // editor.on('component:add', function (model) {
    //   // Check if the component is a div or text
    //   if (model.get('tagName') === 'div') {
    //     // Customize the name for div
    //     model.set('name', 'Custom Div Name');
    //   } else if (model.get('tagName') === 'text') {
    //     // Customize the name for text
    //     model.set('name', 'Custom Text Name');
    //   }
    // });
   
    editor.Panels.addButton("options", [
      {
        id: "undo",
        className: "fa fa-undo icon-undo",
        command: function (editor, sender) {
          editor.UndoManager.undo(1);
          sender.set("active", 0);
        },
        attributes: {
          title: "Undo",
        },
      },
      {
        id: "redo",
        className: "fa fa-repeat icon-redo",
        command: function (editor, sender) {
          editor.UndoManager.redo(1);
          sender.set("active", 0);
        },
        attributes: {
          title: "Redo",
        },
      },
    ]);
   
    editor.Panels.removeButton("options", "export-template");
    editor.Panels.removeButton("options", "fullscreen");
    editor.Panels.removeButton("options", "sw-visibility");
    // editor.Panels.removeButton("views", "open-sm");
    editor.Panels.removeButton("views", "open-tm");
    // editor.Panels.removeButton("views", "open-layers");
    // editor.Panels.removeButton("views", "open-blocks");

    editor.Panels.getButton('views', 'open-sm').set('active', false)

    editor.on('component:selected', (selectedComponent) => {
      editor.Panels.getButton('views', 'open-sm').set('active', true)
      if (selectedComponent) {
        setSelectedComponent(selectedComponent);
        if (selectedComponent.attributes.type === 'text') {
          setSelectedContent(selectedComponent.view.el.innerText);
        }
        if (selectedComponent.attributes.type === 'video') {
          setSelectedContent(selectedComponent.view.el.querySelector('iframe').src)
        }

        // Listen for the 'blur' event on the selected component's view element
        selectedComponent.view.el.addEventListener('blur', () => {
          console.log("called blur", selectedComponent.view.el.innerText)
        });
      }
    });


    // setTimeout(() => {
    //   let categories = editor.BlockManager.getCategories();
    //   categories.each((category) => category.set("open", false));
    // }, 100);



    // Save the editor instance to the ref
    editorRef.current = editor;

    return () => {
      editor.destroy();

    };
  }, [activeSection]);

  

  return <>
    <div className="editor-row ml-4">
      {/* <div class="panel__top">
  <div class="panel__basic-actions"></div>
</div> */}
      <div /*style={{ position: 'absolute', top: "9%", zIndex: "4", left: "33%", background: "white", width: "180px", height: "100vh" }}*/>
        <input
          type='text'
          style={{ height: "22px" }}
          value={selectedContent}
          placeholder='Please enter text'
          onChange={(e) => {
            setSelectedContent(e.target.value);

            if (selectedComponent && selectedComponent.attributes.type === 'text') {
              // Set the content directly on the DOM element
              selectedComponent.set('content', e.target.value);
              selectedComponent.view.el.innerText = e.target.value;

              // Trigger a refresh of the editor canvas to reflect the changes
              // editorRef.current.trigger('change:canvas');
            }
          }}
          onBlur={() => {
            // Manually trigger the onStore function to save changes to the server
            editorRef.current.store();
          }}
        />
      </div>
      <div id="editor" />
     {showCustomPanel &&<> <div className='section_block_button'>
        <button onClick={handleSectionButtonClick} className='section_button'>Add Section</button>
        <button onClick={handleBlockButtonClick} className='block_button'>Add Block</button>
      </div>
      </>}
      <div id="layers-container"></div>
    </div></>
};

export default WebBuilder;