document.addEventListener('DOMContentLoaded', function() {
    const appContainer = document.getElementById('root');
    
    // Main app structure
    appContainer.innerHTML = `
        <div class="min-h-screen bg-gray-50">
            <header class="bg-white border-b border-gray-200 px-6 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background-color: rgb(223, 23, 131);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml w-5 h-5 text-white">
                                <path d="m18 16 4-4-4-4"></path>
                                <path d="m6 8-4 4 4 4"></path>
                                <path d="m14.5 4-5 16"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 class="text-xl font-bold text-gray-900">FAQ Builder</h1>
                            <p class="text-sm text-gray-500">Create beautiful FAQ sections for your website</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-8 rounded-md px-3 text-xs transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette w-4 h-4 mr-2">
                                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                            </svg>
                            Customize
                        </button>
                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-8 rounded-md px-3 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-4 h-4 mr-2">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            Get Code
                        </button>
                    </div>
                </div>
            </header>
            <div class="flex h-[calc(100vh-64px)]">
                <div class="flex-1 flex">
                    <div class="flex-1 border-r border-gray-200">
                        <div class="h-full flex flex-col">
                            <div class="border-b border-gray-200 p-6">
                                <div class="flex items-center justify-between mb-4">
                                    <h2 class="text-lg font-semibold text-gray-900">FAQ Editor</h2>
                                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 bg-zinc-900 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-8 rounded-md px-3 text-xs text-white hover:opacity-90" style="background-color: rgb(223, 23, 131);">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4 mr-2">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                        Add Question
                                    </button>
                                </div>
                                <div dir="ltr" data-orientation="horizontal">
                                    <div class="flex items-center space-x-2">
                                        <div role="tablist" aria-orientation="horizontal" class="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 flex-1" tabindex="0" data-orientation="horizontal" style="outline: none;">
                                            <button type="button" role="tab" aria-selected="true" aria-controls="radix-:r3:-content-tab-1" data-state="active" id="radix-:r3:-trigger-tab-1" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 relative group" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">
                                                <div class="flex items-center space-x-2">
                                                    <span>General</span>
                                                    <div class="hidden group-hover:flex items-center space-x-1">
                                                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md text-xs h-5 w-5 p-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen w-3 h-3">
                                                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-8 rounded-md px-3 text-xs">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5v14"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 overflow-auto p-6">
                                <div data-rbd-droppable-id="faq-items" data-rbd-droppable-context-id="0" class="space-y-4">
                                    <div class="rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 transition-shadow" data-rbd-draggable-context-id="0" data-rbd-draggable-id="1">
                                        <div class="flex flex-col space-y-1.5 p-6 pb-3">
                                            <div class="flex items-start space-x-3">
                                                <div tabindex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0" data-rbd-drag-handle-draggable-id="1" data-rbd-drag-handle-context-id="0" draggable="false" class="mt-1 cursor-grab active:cursor-grabbing">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical w-4 h-4 text-gray-400">
                                                        <circle cx="9" cy="12" r="1"></circle>
                                                        <circle cx="9" cy="5" r="1"></circle>
                                                        <circle cx="9" cy="19" r="1"></circle>
                                                        <circle cx="15" cy="12" r="1"></circle>
                                                        <circle cx="15" cy="5" r="1"></circle>
                                                        <circle cx="15" cy="19" r="1"></circle>
                                                    </svg>
                                                </div>
                                                <div class="flex-1">
                                                    <div class="flex items-center justify-between">
                                                        <span class="text-sm font-medium text-gray-500">Question 1</span>
                                                        <div class="flex items-center space-x-2">
                                                            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-8 rounded-md px-3 text-xs" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r5:" data-state="closed">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen w-4 h-4">
                                                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                                                </svg>
                                                            </button>
                                                            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-8 rounded-md px-3 text-xs text-red-500 hover:text-red-700">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 w-4 h-4">
                                                                    <path d="M3 6h18"></path>
                                                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="p-6 pt-0">
                                            <div class="space-y-3">
                                                <div>
                                                    <p class="font-medium text-gray-900">What is this FAQ builder?</p>
                                                </div>
                                                <div>
                                                    <p class="text-gray-600 text-sm leading-relaxed">This is a comprehensive FAQ builder that allows you to create beautiful, customizable FAQ sections for your website.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="h-full flex flex-col">
                            <div class="border-b border-gray-200 p-6">
                                <div class="flex items-center space-x-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-5 h-5 text-gray-500">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <h2 class="text-lg font-semibold text-gray-900">Live Preview</h2>
                                </div>
                                <p class="text-sm text-gray-500">See how your FAQ will look on your website</p>
                            </div>
                            <div class="flex-1 p-6 bg-gray-50 overflow-auto">
                                <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
                                    <div style="font-size: 16px; border-radius: 8px; --primary-color: #DF1783; --spacing: 16px; --border-width: 1px;">
                                        <div class="faq-accordion">
                                            <div class="space-y-3">
                                                <div class="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm" style="border-width: 1px; border-radius: 8px;">
                                                    <button class="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors" style="font-size: 16px;">
                                                        <span class="font-medium text-gray-900 pr-4">What is this FAQ builder?</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 flex-shrink-0 transition-transform" style="color: rgb(223, 23, 131);">
                                                            <path d="m6 9 6 6 6-6"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-8 text-center">
                                        <div class="inline-flex bg-white rounded-lg border p-1 shadow-sm">
                                            <button class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-900 rounded">Desktop</button>
                                            <button class="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-700">Tablet</button>
                                            <button class="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-700">Mobile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});
