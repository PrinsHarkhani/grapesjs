export const plugin1 = (editor, opts={}) =>{
    const labels = {
        // block1: true,
        // block2: true,
        // block3: true,
        block4: true,
        // block5: true,
        // block6: true,
        block7: true,
        // block8: true,
    }

    const categories = {
        // category1: 'category1',
        // category2: 'category2',
        // category3: 'Header',
        category4: 'Business About',
        // category5: 'Certification',
        // category6: 'Services',
        category7: 'About Me',
        // category8: 'Gallery',
    }
    // const NewCategories = {
    //   category1: {
    //     id: 'category1',
    //     label: 'Category 1',
    //   },
    //   category2: {
    //     id: 'category2',
    //     label: 'Category 2',
    //   },
    //   subMenuCategory: {
    //     id: 'my-sub-menu-category',
    //     label: 'Sub Menu Category',
    //     open: true,
    //     command: 'open-submenu',
    //     blocks: [
    //       {
    //         label: 'Dummy Block 1',
    //         attributes: { class: 'dummy-block-1' },
    //         content: '<div class="dummy-block">This is Dummy Block 1</div>',
    //       },
    //       {
    //         label: 'Dummy Block 2',
    //         attributes: { class: 'dummy-block-2' },
    //         content: '<div class="dummy-block">This is Dummy Block 2</div>',
    //       },
    //     ],
    //   },
    // };
    // editor.Commands.add('open-submenu', {
    //   run: (editor, sender, options) => {
    //     // Implement your submenu logic here
    //     console.log('Submenu clicked');
    //     // You can show/hide a submenu UI or perform any other action here
    //   },
    // });

    opts = { labels: labels, categories: categories };
    // opts = { labels: labels, categories: categories, newCat : NewCategories };
    loadComponents(editor, opts)

   
    // const allCategories = editor.BlockManager.getCategories();

    // allCategories.each(category => {
    //     category.set('open', false);
    // });
    // allCategories.each(category => {
    //     category.set('open', false).on('change:open', opened => {
    //         opened.get('open') && categories.each(category => {
    //             category !== opened && category.set('open', false)
    //         })
    //     })
    // })
    
}

const loadComponents = (editor, options) => {
    // const { labels, categories, newCat } = options;
    const { labels, categories } = options;
    // Loop through categories and add them
  // Object.keys(newCat).forEach(categoryKey => {
  //   const category = newCat[categoryKey];
  //   editor.BlockManager.add(category.id, {
  //     label: category.label,
  //     open: category.open,
  //   });

  //   // Check if the category has associated blocks and add them
  //   if (category.blocks) {
  //     category.blocks.forEach(block => {
  //       editor.BlockManager.add(block.label, {
  //         label: block.label,
  //         content: block.content,
  //         attributes: block.attributes,
  //         category: category.id,
  //       });
  //     });
  //   }
  // });
//     if(labels?.block1){
//         editor.BlockManager.add('block1', {
//             label: 'Simple block',
//             category: newCat?.category1,
//             content: `
//             <!--
//   This example requires updating your template:

//   <html class="h-full bg-gray-100">
//   <body class="h-full">
// -->
// <div class="min-h-full">
//   <nav class="bg-gray-800">
//     <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div class="flex h-16 items-center justify-between">
//         <div class="flex items-center">
//           <div class="flex-shrink-0">
//             <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
//           </div>
//           <div class="hidden md:block">
//             <div class="ml-10 flex items-baseline space-x-4">
//               <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
//               <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a>
//             </div>
//           </div>
//         </div>
//         <div class="hidden md:block">
//           <div class="ml-4 flex items-center md:ml-6">
//             <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//               <span class="sr-only">View notifications</span>
//               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
//               </svg>
//             </button>

//             <!-- Profile dropdown -->
//             <div class="relative ml-3">
//               <div>
//                 <button type="button" class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
//                   <span class="sr-only">Open user menu</span>
//                   <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
//                 </button>
//               </div>

//               <!--
//                 Dropdown menu, show/hide based on menu state.

//                 Entering: "transition ease-out duration-100"
//                   From: "transform opacity-0 scale-95"
//                   To: "transform opacity-100 scale-100"
//                 Leaving: "transition ease-in duration-75"
//                   From: "transform opacity-100 scale-100"
//                   To: "transform opacity-0 scale-95"
//               -->
//               <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
//                 <!-- Active: "bg-gray-100", Not Active: "" -->
//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>

//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>

//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="-mr-2 flex md:hidden">
//           <!-- Mobile menu button -->
//           <button type="button" class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
//             <span class="sr-only">Open main menu</span>
//             <!-- Menu open: "hidden", Menu closed: "block" -->
//             <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//             </svg>
//             <!-- Menu open: "block", Menu closed: "hidden" -->
//             <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>

//     <!-- Mobile menu, show/hide based on menu state. -->
//     <div class="md:hidden" id="mobile-menu">
//       <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
//         <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
//         <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
//       </div>
//       <div class="border-t border-gray-700 pt-4 pb-3">
//         <div class="flex items-center px-5">
//           <div class="flex-shrink-0">
//             <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
//           </div>
//           <div class="ml-3">
//             <div class="text-base font-medium leading-none text-white">Tom Cook</div>
//             <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
//           </div>
//           <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//             <span class="sr-only">View notifications</span>
//             <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
//             </svg>
//           </button>
//         </div>
//         <div class="mt-3 space-y-1 px-2">
//           <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>

//           <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>

//           <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
//         </div>
//       </div>
//     </div>
//   </nav>

//   <header class="bg-white shadow">
//     <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
//       <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
//     </div>
//   </header>
//   <main>
//     <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
//       <!-- Your content -->
//     </div>
//   </main>
// </div>`,
//           });
//     }
    
    if(labels?.block2){
        editor.BlockManager.add('my-second-block', {
            label: 'Simple block 2',
            category: categories?.category2,
            content: '<div class="my-block">This is a simple block 2</div>',
          });   
    }
    // if(labels?.block3){
    //     editor.BlockManager.add('header', {
    //       label: 'Sub Menu', 
    //       attributes: { class: 'my-sub-menu' },
    //       content: '<div class="my-sub-menu">This is a sub menu</div>',
    //       category: newCat.subMenuCategory,
    //     });

    // }
    if(labels?.block4){
        editor.BlockManager.add('BusinessAbout', {
          label: `  <div style="display: flex; align-items: center; justify-content: center; margin: 0;">
          <div style="width: 100%; text-align: center; ">
              <div style="font-size: 8px; font-weight: bold; margin-bottom: 5px;">Business Intro</div>
              <div>
                  <iframe width="100%" height="80" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
              </div>
              <div style="font-size: 7px; margin-bottom: 5px; text-align:left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, eos sint! Ex, magnam natus aperiam tempora praesentium cum necessitatibus, accusantium sit magni suscipit corporis quos impedit minima quisquam consectetur perspiciatis.</div>
              <button style="width:100%; font-size: 6px; background-color: #dfaa4a; color: white; border: 1px solid #dfaa4a; padding: 5px; cursor: pointer; border-radius: 5px;">FEATURED LINK</button>
          </div>
      </div>`,
            // category: categories?.category4,
            content: `<div style="display: flex; align-items: center; justify-content: center; margin: 0;">
            <div class="custom-card" style="width: 100%; text-align: center; padding: 20px;">
                <div style="border-bottom: 2px solid #ccc; margin-bottom: 10px;"></div> 
                <div class="card-header" style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Business Intro</div>
                <div class="card-video" style="margin-bottom: 10px;">
                    <iframe width="100%" height="80" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="card-text" style="font-size: 16px; margin-bottom: 10px; text-align:left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, eos sint! Ex, magnam natus aperiam tempora praesentium cum necessitatibus, accusantium sit magni suscipit corporis quos impedit minima quisquam consectetur perspiciatis.</div>
                <button class="card-button" style="width:100%; background-color: #dfaa4a; color: white; border: 1px solid #dfaa4a; padding: 10px; cursor: pointer; border-radius: 5px;">Featured Link</button>
            </div>
        </div>`,
          });   
    }
    if(labels?.block5){
        editor.BlockManager.add('Certification', {
            label: 'Simple block 2',
            category: categories?.category5,
            content: '<div class="my-block">This is a simple block 2</div>',
          });   
    }
    if(labels?.block6){
        editor.BlockManager.add('Services', {
            label: 'Simple block 2',
            category: categories?.category6,
            content: '<div class="my-block">This is a simple block 2</div>',
          });   
    }
    if(labels?.block7){
        editor.BlockManager.add('Aboutme', {
            label: `  <div style="display: flex; align-items: center; justify-content: center; margin: 0;">
            <div style="width: 100%; text-align: center; ">
                <div style="font-size: 8px; font-weight: bold; margin-bottom: 5px;">About Me</div>
                <div>
                    <iframe width="100%" height="80" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
                </div>
                <div style="font-size: 7px; margin-bottom: 5px; text-align:left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, eos sint! Ex, magnam natus aperiam tempora praesentium cum necessitatibus, accusantium sit magni suscipit corporis quos impedit minima quisquam consectetur perspiciatis.</div>
                <button style="width:100%; font-size: 6px; background-color: #dfaa4a; color: white; border: 1px solid #dfaa4a; padding: 5px; cursor: pointer; border-radius: 5px;">FEATURED LINK</button>
            </div>
        </div>`,
            // category: categories?.category7,
            content: `  <div style="display: flex; align-items: center; justify-content: center; margin: 0;">
            <div class="custom-card" style="width: 100%; text-align: center; padding: 20px;">
                <div style="border-bottom: 2px solid #ccc; margin-bottom: 10px;"></div> 
                <div class="card-header" style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">About me</div>
                <div class="card-video" style="margin-bottom: 10px;">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="card-text" style="font-size: 16px; margin-bottom: 10px; text-align:left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, eos sint! Ex, magnam natus aperiam tempora praesentium cum necessitatibus, accusantium sit magni suscipit corporis quos impedit minima quisquam consectetur perspiciatis.</div>
                <button class="card-button" style="width:100%; background-color: #dfaa4a; color: white; border: 1px solid #dfaa4a; padding: 10px; cursor: pointer; border-radius: 5px;">Featured Link</button>
            </div>
        </div>`,
          });   
    }
    if(labels?.block8){
        editor.BlockManager.add('Gallery', {
            label: 'Simple block 2',
            category: categories?.category8,
            content: '<div class="my-block">This is a simple block 2</div>',
          });   
    }

    
}

