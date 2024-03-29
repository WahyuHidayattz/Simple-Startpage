for (const list of CONFIG.cardItem) {
    let item = `
    <div class="flex flex-col px-4 py-4 transition duration-200 bg-white border-b-8 shadow-xl rounded-md hover:-translate-y-2 border-b-white hover:border-b-violet-500 dark:bg-[#242932] dark:text-gray-200 dark:border-b-[#242932] dark:hover:border-b-violet-500">
              <span class="px-4 py-2 font-semibold text-violet-700 dark:text-violet-500">${list.title}</span>
              <a href="${list.links[0].link}" target="_blank" class="px-4 py-1 text-gray-600 transition duration-200 rounded-md hover:bg-violet-500 hover:text-white dark:text-gray-200 dark:hover:text-stone-800 dark:hover:bg-violet-500">${list.links[0].name}</a>
              <a href="${list.links[1].link}" target="_blank" class="px-4 py-1 text-gray-600 transition duration-200 rounded-md hover:bg-violet-500 hover:text-white dark:text-gray-200 dark:hover:text-stone-800 dark:hover:bg-violet-500">${list.links[1].name}</a>
              <a href="${list.links[2].link}" target="_blank" class="px-4 py-1 text-gray-600 transition duration-200 rounded-md hover:bg-violet-500 hover:text-white dark:text-gray-200 dark:hover:text-stone-800 dark:hover:bg-violet-500">${list.links[2].name}</a>
              <a href="${list.links[3].link}" target="_blank" class="px-4 py-1 text-gray-600 transition duration-200 rounded-md hover:bg-violet-500 hover:text-white dark:text-gray-200 dark:hover:text-stone-800 dark:hover:bg-violet-500">${list.links[3].name}</a>
    </div>
    `
    document.getElementById('card_container').insertAdjacentHTML('beforeend', item);
}

for (const list of CONFIG.bottomLinks) {
    let item = `
    <a href="${list.link}" target="_blank" class="flex flex-row items-center gap-2 px-6 py-2 text-white transition duration-300 rounded-lg shadow-xl bg-violet-500 hover:text-white hover:bg-violet-600 dark:text-stone-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
        </svg>
        ${list.name}
    </a>
    `
    document.getElementById('bottom_container').insertAdjacentHTML('beforeend', item);
}

let array_month = [
    { '01': 'Januari' }, { '02': 'Febrauri' }, { '03': 'Maret' }, { '04': 'April' }, { '05': 'Mei' }, { '06': 'Juni' }, { '07': 'Juli' },
    { '08': 'Agustus' }, { '09': 'September' }, { '10': 'Oktober' }, { '11': 'November' }, { '12': 'Desember' },
]
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = + dd + '/' + mm + '/' + yyyy;
document.getElementById('date_container').insertAdjacentHTML('beforeend', today);
