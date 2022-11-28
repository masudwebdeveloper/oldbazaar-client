import React from 'react';

const Blogs = () => {
    return (
        <div class="space-y-4 w-full lg:w-4/5 mx-auto mt-10">
            <details class="group" open>
                <summary
                    class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                >
                    <h2 class="font-medium text-gray-900">
                        What are the different ways to manage a state in a React application?
                    </h2>

                    <svg
                        class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                    There are several other ways to manage states in React, including the use of: Hooks. React Context API. Apollo Link State.Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                </p>
            </details>

            <details class="group">
                <summary
                    class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                >
                    <h2 class="font-medium text-gray-900">
                        How does prototypical inheritance work?
                    </h2>

                    <svg
                        class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                    Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.
                </p>
            </details>
            <details class="group">
                <summary
                    class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                >
                    <h2 class="font-medium text-gray-900">
                        What is a unit test? Why should we write unit tests?
                    </h2>

                    <svg
                        class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                    Let's start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future
                </p>
            </details>
            <details class="group">
                <summary
                    class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                >
                    <h2 class="font-medium text-gray-900">
                        React vs. Angular vs. Vue?
                    </h2>

                    <svg
                        class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                    <strong>Angular,</strong> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 and the dropping of the “JS” from the original name  AngularJS. Angular 2+ is known as just Angular. Although AngularJS version 1 still gets updates, we will focus the discussion on Angular.
                </p>
                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                    <strong>Vue</strong>, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesnt have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.

                    Further reading: Vue.js Tutorial for Beginner Developers
                </p>
                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                    <strong>React</strong>, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products Facebook, Instagram, and WhatsApp. Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                </p>
            </details>
        </div>

    );
};

export default Blogs;