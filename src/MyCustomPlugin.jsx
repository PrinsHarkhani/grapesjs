// MyCustomPlugin.js

export default (editor, opts = {}) => {
    // const blockId = 'my-custom-block';

    // const addCustomBlock = (id, label) => {
    //     const block = {
    //         label: label,
    //         content: `
    //         <div style="display: flex; align-items: center; justify-content: center; margin: 0;">
    //             <div class="custom-card" style="width: 100%; text-align: center; padding: 20px;">
    //                 <div style="border-bottom: 2px solid #ccc; margin-bottom: 10px;"></div> 
    //                 <div class="card-header" style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">${label}</div>
    //                 <div class="card-video" style="margin-bottom: 10px;">
    //                     <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
    //                 </div>
    //                 <div class="card-text" style="font-size: 16px; margin-bottom: 10px; text-align:left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, eos sint! Ex, magnam natus aperiam tempora praesentium cum necessitatibus, accusantium sit magni suscipit corporis quos impedit minima quisquam consectetur perspiciatis.</div>
    //                 <button class="card-button" style="width:100%; background-color: #dfaa4a; color: white; border: 1px solid #dfaa4a; padding: 10px; cursor: pointer; border-radius: 5px;">Featured Link</button>
    //             </div>
    //         </div>
    //     `,
    //         draggable: true,
    //         droppable: false,
    //         attributes: { class: 'my-custom-block' },
    //     };
    
    //     editor.BlockManager.add(id, block);
    
    //     // Remove droppable zones
    //     editor.on('component:mount', (model) => {
    //         if (model.attributes && model.attributes.class === 'my-custom-block') {
    //             model.view.$el.find('.gjs-block').off('mousedown');
    
    //             // Adjust the drag behavior to only allow vertical dragging
    //             model.view.$el.on('dragover', (event) => {
    //                 // Restrict the movement to the vertical axis
    //                 event.originalEvent.dataTransfer.dropEffect = 'move';
    //                 event.preventDefault();
    
    //                 const mouseY = event.clientY;
    //                 const originalTop = model.view.el.offsetTop;
    
    //                 // Update the top position based on the vertical drag
    //                 model.setStyle({
    //                     top: `${mouseY - originalTop}px`,
    //                 });
    
    //                 // Trigger an update for the component
    //                 model.trigger('update', model);
    //             });
    //         }
    //     });
    // };
    
    
    const addCustomBlock = (id, label) => {
        editor.BlockManager.add(id, {
            label: label,
            content: `
                <div style="display: flex; align-items: center; justify-content: center; margin: 0;">
                    <div class="custom-card" style="width: 100%; text-align: center; padding: 20px;">
                        <div style="border-bottom: 2px solid #ccc; margin-bottom: 10px;"></div> 
                        <div class="card-header" style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">${label}</div>
                        <div class="card-video" style="margin-bottom: 10px;">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="card-text" style="font-size: 16px; margin-bottom: 10px; text-align:left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, eos sint! Ex, magnam natus aperiam tempora praesentium cum necessitatibus, accusantium sit magni suscipit corporis quos impedit minima quisquam consectetur perspiciatis.</div>
                        <button class="card-button" style="width:100%; background-color: #dfaa4a; color: white; border: 1px solid #dfaa4a; padding: 10px; cursor: pointer; border-radius: 5px;">Featured Link</button>
                    </div>
                </div>
            `,
            draggable: true,
        });
    };


     // Define custom blocks
     addCustomBlock('blockId1', 'Business Intro');
     addCustomBlock('blockId2', 'About me');

 


    // // Define the custom block
    // editor.BlockManager.add("blockId1", {
    //     label: 'Business Intro',
    //     content: `
    //     <div style="display: flex; align-items: center; justify-content: center; margin: 0;">
    //     <div class="custom-card" style="width: 100%; text-align: center; padding: 20px;">
    //         <div style="border-bottom: 2px solid #ccc; margin-bottom: 10px;"></div> 
    //         <div class="card-header" style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">About Doe Enterprise</div>
    //         <div class="card-video" style="margin-bottom: 10px;">
    //             <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
    //         </div>
    //         <div class="card-text" style="font-size: 16px; margin-bottom: 10px; text-align:left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, eos sint! Ex, magnam natus aperiam tempora praesentium cum necessitatibus, accusantium sit magni suscipit corporis quos impedit minima quisquam consectetur perspiciatis.</div>
    //         <button class="card-button" style="width:100%; background-color: #dfaa4a; color: white; border: 1px solid #dfaa4a; padding: 10px; cursor: pointer; border-radius: 5px;">Featured Link</button>
    //     </div>
    // </div>
    
    // `,
    // });
    // // Define the custom block
    // editor.BlockManager.add("blockId2", {
    //     label: 'About me',
    //     content: `
   
    //     <div style="display: flex; align-items: center; justify-content: center; margin: 0;">
    //     <div class="custom-card" style="width: 100%; text-align: center; padding: 20px;">
    //     <div style="border-bottom: 2px solid #ccc; margin-bottom: 10px;"></div>
    //         <div class="card-header" style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">About John Doe</div>
    //         <div class="card-video" style="margin-bottom: 10px;">
    //             <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
    //         </div>
    //         <div class="card-text" style="font-size: 16px; margin-bottom: 10px; text-align:left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, eos sint! Ex, magnam natus aperiam tempora praesentium cum necessitatibus, accusantium sit magni suscipit corporis quos impedit minima quisquam consectetur perspiciatis.</div>
    //         <button class="card-button" style="width:100%; background-color: #dfaa4a; color: white; border: 1px solid #dfaa4a; padding: 10px; cursor: pointer; border-radius: 5px;">Featured Link</button>
    //     </div>
    // </div>

    // `,
    // });



    // Define the custom style for the card
    //   const styleManager = editor.StyleManager;
    //   const style = styleManager.getStyle('.custom-card');
    //   style.set('border', '1px solid #ddd');
    //   style.set('padding', '10px');
    // Add more custom styles as needed

    // // Add a custom component
    // editor.DomComponents.addType('my-custom-component', {
    //     model: {
    //         defaults: {
    //             tagName: 'div',
    //             traits: [
    //                 {
    //                     type: 'text',
    //                     name: 'custom-text',
    //                     label: 'Custom Text',
    //                 },
    //             ],
    //         },
    //     },
    //     view: {
    //         onRender({ el }) {
    //             el.innerHTML = 'Custom Component Content';
    //         },
    //     },
    // });

    // // Add a custom block with the custom component
    // editor.BlockManager.add('my-custom-component-block', {
    //     label: 'My Custom Component Block',
    //     content: {
    //         type: 'my-custom-component',
    //         components: [
    //             {
    //                 type: 'text',
    //                 content: 'Custom Component Text',
    //             },
    //         ],
    //     },
    // });

    // Optional: Add more custom functionalities, event listeners, etc.

    return {
        // Optional: Add any cleanup logic if needed
    };
};
