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

  // Define custom block for heading and text
  grapesjs.plugins.add('custom-block', (editor, options) => {
    editor.Blocks.add('custom-heading', {
      label: 'Heading',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z"></path>
              </svg>`,
      content: `
          <h2>Insert your Heading here</h2>
      `,
    });
    editor.Blocks.add('custom-tex', {
      label: 'Text',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M5 17h14v-2H5v2Zm0-4h14v-2H5v2Zm0-4h10V7H5v2ZM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20H4Zm0-2h16V6H4v12Zm0 0V6v12Z"></path>
              </svg>`,
      content: `
      <p>Insert your text here</h2>
      `,
    });
    editor.Blocks.add('custom-image', {
      label: 'Image/Gallery',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h10q.825 0 1.413.588T15 7v10q0 .825-.587 1.413T13 19H3Zm15-8q-.425 0-.712-.288T17 10V6q0-.425.288-.712T18 5h4q.425 0 .713.288T23 6v4q0 .425-.288.713T22 11h-4Zm1-2h2V7h-2v2ZM3 17h10V7H3v10Zm2-2h6q.3 0 .45-.275t-.05-.525l-1.625-2.175q-.15-.2-.4-.2t-.4.2L7.5 14l-.975-1.3q-.15-.2-.4-.2t-.4.2L4.6 14.2q-.2.25-.05.525T5 15Zm13 4q-.425 0-.712-.288T17 18v-4q0-.425.288-.712T18 13h4q.425 0 .713.288T23 14v4q0 .425-.288.713T22 19h-4Zm1-2h2v-2h-2v2ZM3 17V7v10Zm16-8V7v2Zm0 8v-2v2Z"></path>
              </svg>`,
      content: `
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGt3t_ZkYA3MLelnrlxTyP6NhYuFcPkYZnOVy1-abzDnDGDLxEMPqoh5oIp_DA7TJZUU&usqp=CAU" />
      `,
    });
    editor.Blocks.add('custom-video', {
      label: 'Video/Gallery',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.525 10.625q.35-.225.35-.625t-.35-.625L12.65 6.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038l4.875-3.125ZM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H8Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6q.425 0 .713.288T4 7v13h13q.425 0 .713.288T18 21q0 .425-.288.713T17 22H4ZM8 4v12V4Z"></path>
              </svg>`,
      content: `
      <iframe width="100%" height="80" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
      `,
    });
    editor.Blocks.add('custom-image1', {
      label: 'Image/Gallery',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h10q.825 0 1.413.588T15 7v10q0 .825-.587 1.413T13 19H3Zm15-8q-.425 0-.712-.288T17 10V6q0-.425.288-.712T18 5h4q.425 0 .713.288T23 6v4q0 .425-.288.713T22 11h-4Zm1-2h2V7h-2v2ZM3 17h10V7H3v10Zm2-2h6q.3 0 .45-.275t-.05-.525l-1.625-2.175q-.15-.2-.4-.2t-.4.2L7.5 14l-.975-1.3q-.15-.2-.4-.2t-.4.2L4.6 14.2q-.2.25-.05.525T5 15Zm13 4q-.425 0-.712-.288T17 18v-4q0-.425.288-.712T18 13h4q.425 0 .713.288T23 14v4q0 .425-.288.713T22 19h-4Zm1-2h2v-2h-2v2ZM3 17V7v10Zm16-8V7v2Zm0 8v-2v2Z"></path>
              </svg>`,
      content: `
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGt3t_ZkYA3MLelnrlxTyP6NhYuFcPkYZnOVy1-abzDnDGDLxEMPqoh5oIp_DA7TJZUU&usqp=CAU" />
      `,
    });
    editor.Blocks.add('custom-testimonial ', {
      label: 'Testimonial',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 3h12c.55 0 1.02.2 1.41.59S18 4.45 18 5v7c0 .55-.2 1.02-.59 1.41S16.55 14 16 14h-1l-5 5v-5H4c-.55 0-1.02-.2-1.41-.59S2 12.55 2 12V5c0-.55.2-1.02.59-1.41S3.45 3 4 3zm11 2H4v1h11V5zm1 3H4v1h12V8zm-3 3H4v1h9v-1z"></path>
              </svg>`,
    });
    editor.Blocks.add('custom-social-media', {
      label: 'Social media',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
      <path d="M18.4755 23.3476C21.2503 23.3476 23.4998 21.0981 23.4998 18.3232C23.4998 15.5483 21.2503 13.2988 18.4755 13.2988C15.7006 13.2988 13.4512 15.5483 13.4512 18.3232C13.4512 21.0981 15.7006 23.3476 18.4755 23.3476Z" fill="#010201"/>
      <path d="M18.8641 17.6373C18.9467 17.5446 19.0147 17.4505 19.0994 17.3706C19.2221 17.2509 19.3674 17.1569 19.5269 17.094C19.6863 17.0311 19.8567 17.0006 20.028 17.0042C20.225 17.001 20.4215 17.0249 20.6119 17.0753C21.048 17.2014 21.3014 17.5016 21.4223 17.9276C21.5031 18.2465 21.5394 18.5752 21.5302 18.9041C21.5314 19.5982 21.5282 20.2922 21.5297 20.9863C21.5299 21.0513 21.5117 21.0683 21.4477 21.0678C21.0901 21.0648 20.7326 21.0649 20.375 21.0679C20.3121 21.0684 20.2985 21.0489 20.2987 20.9895C20.3007 20.3291 20.3008 19.6687 20.2991 19.0082C20.3029 18.8424 20.2835 18.6769 20.2415 18.5164C20.156 18.22 19.9438 18.069 19.6333 18.0854C19.2093 18.1078 18.9888 18.3177 18.9347 18.7489C18.9219 18.8517 18.9156 18.9551 18.9158 19.0587C18.9163 19.7009 18.9152 20.3432 18.9175 20.9855C18.9178 21.0496 18.9017 21.0685 18.8363 21.0679C18.4761 21.0647 18.116 21.0646 17.7558 21.0676C17.6981 21.068 17.6814 21.0525 17.6815 20.9941C17.6831 19.7224 17.683 18.4508 17.6814 17.1792C17.6813 17.1163 17.7019 17.1017 17.7614 17.1021C18.1034 17.1047 18.4455 17.1046 18.7875 17.1019C18.8504 17.1014 18.8667 17.1217 18.8653 17.1813C18.8618 17.3333 18.8641 17.4853 18.8641 17.6373Z" fill="#FEFEFE"/>
      <path d="M16.9051 19.0904C16.9051 19.7195 16.9041 20.3486 16.9066 20.9777C16.9069 21.0477 16.8895 21.0688 16.8171 21.068C16.4598 21.0641 16.1023 21.065 15.7449 21.0675C15.6876 21.0679 15.6703 21.0536 15.6704 20.9943C15.6721 19.7206 15.6722 18.4469 15.6707 17.1732C15.6707 17.1205 15.6834 17.1017 15.7394 17.102C16.102 17.1044 16.4647 17.1051 16.8272 17.1016C16.8969 17.1009 16.9064 17.1279 16.9062 17.1876C16.9045 17.8219 16.9041 18.4562 16.9051 19.0904Z" fill="#FEFEFE"/>
      <path d="M17.0038 15.8412C17.0045 15.9826 16.9632 16.121 16.8852 16.2389C16.8071 16.3568 16.6958 16.4489 16.5653 16.5035C16.4349 16.558 16.2911 16.5726 16.1524 16.5454C16.0136 16.5182 15.8861 16.4503 15.7859 16.3505C15.6857 16.2507 15.6175 16.1234 15.5898 15.9847C15.5621 15.846 15.5762 15.7023 15.6303 15.5716C15.6844 15.441 15.7761 15.3293 15.8937 15.2509C16.0113 15.1724 16.1496 15.1306 16.291 15.1309C16.4794 15.1318 16.6597 15.2068 16.7931 15.3398C16.9265 15.4727 17.0022 15.6528 17.0038 15.8412Z" fill="#FEFEFE"/>
      <path d="M5.52432 23.3476C8.29918 23.3476 10.5486 21.0981 10.5486 18.3232C10.5486 15.5483 8.29918 13.2988 5.52432 13.2988C2.74946 13.2988 0.5 15.5483 0.5 18.3232C0.5 21.0981 2.74946 23.3476 5.52432 23.3476Z" fill="#010201"/>
      <path d="M8.73415 16.7108C8.69597 16.5688 8.62116 16.4394 8.51722 16.3354C8.41327 16.2315 8.28384 16.1567 8.14188 16.1185C7.61946 15.9785 5.5246 15.9785 5.5246 15.9785C5.5246 15.9785 3.42973 15.9785 2.9073 16.1185C2.76535 16.1567 2.63592 16.2315 2.53197 16.3354C2.42803 16.4394 2.35322 16.5688 2.31504 16.7108C2.17505 17.2332 2.17505 18.3232 2.17505 18.3232C2.17505 18.3232 2.17505 19.4132 2.31504 19.9357C2.35322 20.0776 2.42803 20.2071 2.53198 20.311C2.63592 20.415 2.76535 20.4898 2.9073 20.528C3.42973 20.6679 5.5246 20.6679 5.5246 20.6679C5.5246 20.6679 7.61946 20.6679 8.14188 20.528C8.28384 20.4898 8.41327 20.415 8.51721 20.311C8.62116 20.2071 8.69597 20.0776 8.73415 19.9357C8.87414 19.4132 8.87414 18.3232 8.87414 18.3232C8.87414 18.3232 8.87414 17.2332 8.73415 16.7108ZM4.85469 19.3281V17.3183L6.59508 18.3233L4.85469 19.3281Z" fill="white"/>
      <path d="M18.4757 10.5488C21.2506 10.5488 23.5001 8.29927 23.5001 5.52438C23.5001 2.74949 21.2506 0.5 18.4757 0.5C15.7009 0.5 13.4514 2.74949 13.4514 5.52438C13.4514 8.29927 15.7009 10.5488 18.4757 10.5488Z" fill="#010201"/>
      <path d="M18.476 2.93328C19.3206 2.93328 19.4207 2.93651 19.7543 2.95172C19.9549 2.9541 20.1536 2.99095 20.3417 3.06065C20.4781 3.11328 20.602 3.19389 20.7054 3.29729C20.8088 3.4007 20.8894 3.5246 20.9421 3.66104C21.0118 3.84915 21.0486 4.04785 21.051 4.24845C21.0662 4.58204 21.0694 4.68209 21.0694 5.52678C21.0694 6.37147 21.0662 6.47152 21.051 6.8051C21.0486 7.0057 21.0118 7.2044 20.9421 7.39252C20.8894 7.52896 20.8088 7.65286 20.7054 7.75626C20.602 7.85967 20.4781 7.94028 20.3417 7.99291C20.1536 8.06261 19.9549 8.09945 19.7543 8.10184C19.4207 8.11705 19.3207 8.12027 18.476 8.12027C17.6312 8.12027 17.5312 8.11705 17.1977 8.10184C16.9971 8.09945 16.7984 8.06261 16.6102 7.99291C16.4738 7.94028 16.3499 7.85967 16.2465 7.75626C16.1431 7.65286 16.0625 7.52895 16.0099 7.39252C15.9402 7.2044 15.9033 7.00571 15.9009 6.80511C15.8857 6.47152 15.8825 6.37147 15.8825 5.52678C15.8825 4.68209 15.8857 4.58204 15.9009 4.24846C15.9033 4.04786 15.9402 3.84916 16.0099 3.66104C16.0625 3.5246 16.1431 3.4007 16.2465 3.2973C16.3499 3.19389 16.4738 3.11328 16.6102 3.06065C16.7984 2.99095 16.997 2.9541 17.1976 2.95172C17.5312 2.93651 17.6313 2.93328 18.476 2.93328ZM18.476 2.36328C17.6168 2.36328 17.5091 2.36692 17.1717 2.38231C16.9092 2.38757 16.6496 2.43729 16.4038 2.52936C16.1936 2.61064 16.0028 2.73492 15.8435 2.89424C15.6841 3.05357 15.5599 3.24441 15.4786 3.45456C15.3865 3.70038 15.3368 3.96003 15.3315 4.22247C15.3161 4.55989 15.3125 4.66762 15.3125 5.52678C15.3125 6.38594 15.3161 6.49366 15.3315 6.83109C15.3368 7.09353 15.3865 7.35318 15.4786 7.599C15.5599 7.80914 15.6841 7.99999 15.8435 8.15932C16.0028 8.31864 16.1936 8.44292 16.4038 8.5242C16.6496 8.61626 16.9092 8.66598 17.1717 8.67124C17.5091 8.68664 17.6168 8.69028 18.476 8.69028C19.3351 8.69028 19.4428 8.68664 19.7803 8.67124C20.0427 8.66598 20.3023 8.61626 20.5482 8.5242C20.7583 8.44292 20.9491 8.31864 21.1085 8.15932C21.2678 7.99999 21.3921 7.80914 21.4733 7.599C21.5654 7.35318 21.6151 7.09353 21.6204 6.83109C21.6358 6.49366 21.6394 6.38593 21.6394 5.52678C21.6394 4.66762 21.6358 4.55989 21.6204 4.22247C21.6151 3.96003 21.5654 3.70038 21.4733 3.45456C21.3921 3.24441 21.2678 3.05357 21.1085 2.89424C20.9491 2.73492 20.7583 2.61064 20.5482 2.52936C20.3023 2.43729 20.0427 2.38757 19.7803 2.38231C19.4428 2.36692 19.3351 2.36328 18.476 2.36328Z" fill="white"/>
      <path d="M18.4758 3.90039C18.1545 3.90039 17.8404 3.99567 17.5733 4.17417C17.3061 4.35267 17.0979 4.60638 16.975 4.90322C16.852 5.20006 16.8199 5.52669 16.8825 5.84181C16.9452 6.15693 17.0999 6.44639 17.3271 6.67358C17.5543 6.90077 17.8438 7.05549 18.1589 7.11817C18.474 7.18085 18.8006 7.14868 19.0975 7.02573C19.3943 6.90277 19.648 6.69456 19.8265 6.42741C20.005 6.16026 20.1003 5.84618 20.1003 5.52489C20.1003 5.09404 19.9291 4.68085 19.6245 4.3762C19.3198 4.07154 18.9066 3.90039 18.4758 3.90039ZM18.4758 6.57939C18.2672 6.57939 18.0634 6.51755 17.89 6.40168C17.7165 6.28581 17.5814 6.12111 17.5016 5.92843C17.4218 5.73574 17.4009 5.52372 17.4416 5.31917C17.4823 5.11461 17.5827 4.92672 17.7302 4.77924C17.8776 4.63177 18.0655 4.53134 18.2701 4.49065C18.4746 4.44996 18.6866 4.47084 18.8793 4.55066C19.072 4.63047 19.2367 4.76562 19.3526 4.93904C19.4684 5.11245 19.5303 5.31633 19.5303 5.52489C19.5303 5.80456 19.4192 6.07277 19.2214 6.27053C19.0237 6.46829 18.7555 6.57939 18.4758 6.57939Z" fill="white"/>
      <path d="M20.164 4.21627C20.3737 4.21627 20.5437 4.04631 20.5437 3.83665C20.5437 3.62699 20.3737 3.45703 20.164 3.45703C19.9544 3.45703 19.7844 3.62699 19.7844 3.83665C19.7844 4.04631 19.9544 4.21627 20.164 4.21627Z" fill="white"/>
      <path d="M10.5486 5.52373C10.5485 4.56357 10.2733 3.62356 9.75552 2.81497C9.23776 2.00638 8.49915 1.36308 7.62714 0.961224C6.75514 0.559371 5.78624 0.415793 4.83517 0.54749C3.8841 0.679187 2.99068 1.08064 2.26068 1.70433C1.53068 2.32802 0.994668 3.14782 0.716105 4.06668C0.437541 4.98553 0.428091 5.96497 0.688872 6.88903C0.949653 7.8131 1.46975 8.64309 2.18758 9.28074C2.90541 9.9184 3.79092 10.337 4.73927 10.487V6.97609H3.46357V5.52373H4.73927V4.41679C4.73927 3.15756 5.48937 2.462 6.63702 2.462C7.01381 2.46724 7.38971 2.50004 7.76171 2.56013V3.7966H7.12815C6.50402 3.7966 6.30937 4.18389 6.30937 4.58124V5.52373H7.70284L7.48008 6.97609H6.30937V10.487C7.49115 10.2998 8.56736 9.69714 9.34446 8.78732C10.1216 7.87749 10.5486 6.72025 10.5486 5.52373Z" fill="#010201"/>
      <path d="M7.48013 6.97503L7.70289 5.52267H6.30943V4.58018C6.30943 4.18283 6.50407 3.79554 7.12821 3.79554H7.76177V2.55907C7.38977 2.49897 7.01387 2.46618 6.63708 2.46094C5.48943 2.46094 4.73932 3.1565 4.73932 4.41573V5.52267H3.46362V6.97503H4.73932V10.486C5.25953 10.5674 5.78923 10.5674 6.30943 10.486V6.97503H7.48013Z" fill="white"/>
      </svg>`,
    });
    editor.Blocks.add('custom-html', {
      label: 'HTML',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M5.59 3.41L7 4.82L3.82 8L7 11.18L5.59 12.6L1 8l4.59-4.59m5.82 0L16 8l-4.59 4.6L10 11.18L13.18 8L10 4.82l1.41-1.41M22 6v12c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-4h2v4h16V6h-2.97V4H20c1.11 0 2 .89 2 2Z"></path>
              </svg>`,
    });
    editor.Blocks.add('custom-form', {
      label: 'Form',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15 5h3l-1.5 2L15 5M5 2h14a2 2 0 0 1 2 2v16c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 2v4h14V4H5m0 16h14V10H5v10m2-8h10v2H7v-2m0 4h10v2H7v-2Z"></path>
              </svg>`,
    });
    editor.Blocks.add('custom-booking', {
      label: 'Booking',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 18q-1.4 0-2.675.438T7 19.75V20h10v-.25q-1.05-.875-2.325-1.312T12 18Zm-7 .85q1.35-1.325 3.138-2.087T12 16q2.075 0 3.863.763T19 18.85V6H5v12.85ZM12 14q-1.45 0-2.475-1.025T8.5 10.5q0-1.45 1.025-2.475T12 7q1.45 0 2.475 1.025T15.5 10.5q0 1.45-1.025 2.475T12 14Zm0-2q.625 0 1.063-.437T13.5 10.5q0-.625-.437-1.062T12 9q-.625 0-1.062.438T10.5 10.5q0 .625.438 1.063T12 12ZM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.712T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22H5Zm7-11.5Zm0 9.5h5H7h5Z"></path>
              </svg>`,
      content: `
      <div>
      <div>
        <div>
          <label>Name:</label>
          <span>{name}</span>
        </div>
        <div>
          <label>Email:</label>
          <span>{email}</span>
        </div>
        <div>
          <label>Phone:</label>
          <span>{phone}</span>
        </div>
        <div>
          <label>Date:</label>
          <span>{date}</span>
        </div>
        <div>
          <label>Time:</label>
          <span>{time}</span>
        </div>
        <div>
          <label>Service:</label>
          <span>{service}</span>
        </div>
      </div>
      <div>
        <button>Confirm Booking</button>
      </div>
    </div>
      `,
    });
    editor.Blocks.add('custom-list', {
      label: 'List',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>
              </svg>`,
      content: `
      <div>
      <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
      </ul>
    </div>
      `,
    });
    editor.Blocks.add('custom-map-location  ', {
      label: 'Map/Location',
      media: `<svg style="width:80px;height:80px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q.5 0 1 .063t1 .187V6h3v3h2.925q.05.275.063.588T20 10.2q0 2.5-1.987 5.438T12 22Zm6-14V5h-3V3h3V0h2v3h3v2h-3v3h-2Z"></path>
              </svg>`,
    });

  });

  useEffect(() => {

    let pluginsArray = [];

    if (activeSection === 'section') {
      pluginsArray = [plugin1];
    } else if (activeSection === 'block') {
      pluginsArray = ['custom-block'];
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

    editor.on('run:preview', () => {
      setShowCustomPanel(false);
      // Execute a callback on all inner components starting from the root
      // editor.DomComponents.getWrapper().onAll(comp => 
      // 	comp.is('text') && comp.set({ editable: false })
      // );
    })
    editor.on('stop:preview', () => {
      setShowCustomPanel(true);
      // Execute a callback on all inner components starting from the root
      // editor.DomComponents.getWrapper().onAll(comp => 
      // 	comp.is('text') && comp.set({ editable: true })
      // );
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
      {showCustomPanel && <> <div className='section_block_button'>
        <button onClick={handleSectionButtonClick} className='section_button'>Add Section</button>
        <button onClick={handleBlockButtonClick} className='block_button'>Add Block</button>
      </div>
      </>}
      <div id="layers-container"></div>
    </div></>
};

export default WebBuilder;