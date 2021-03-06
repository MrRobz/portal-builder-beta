export const header1 = () => {
  return {
    htmlString: '',

    constructLiquidString: ({
      listName,
      listItemPath,
      bgColor,
      domainName
    }) => {
      return `<nav class="flex items-center justify-between flex-wrap ${bgColor.class} p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">${domainName}</span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              {% for result in ${listName} %}
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  {{ result.${listItemPath} }}
                </a>
              {% endfor %}
            </div>
          </div>
        </nav>`
    },
    options: [
      {
        name: 'loop through',
        keyName: 'listName',
        values: ['portal.solution_categories'],
        type: 'dropdown'
      },
      {
        name: 'and show value',
        keyName: 'listItemPath',
        values: ['name', 'description'],
        type: 'dropdown'
      },
      {
        name: 'select color',
        keyName: 'bgColor',
        values: [
                  {id: 'blue', class: 'bg-indigo-500'},
                  {id: 'orange', class: 'bg-orange-500'},
                  {id: 'green', class: 'bg-green-500'},
                  {id: 'pink', class: 'bg-pink-800'},
                  {id: 'teal', class: 'bg-teal-500'}
             ],
        type: 'objectDropdown'
      }
    ],

    selectedOptions: {
      listName: 'portal.solution_categories',
      listItemPath: 'name',
      bgColor: {id: 'teal', class: 'bg-teal-500'},
      domainName: '{{ portal.name }}'
    }
  }
};
