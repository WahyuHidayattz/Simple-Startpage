for (const list of CONFIG.cardItem) {
    let item = `
    <div class="flex flex-col px-4 py-4 transition duration-200 bg-white border-b-8 shadow-xl rounded-xl hover:-translate-y-2 border-b-white hover:border-b-violet-500 dark:bg-slate-800 dark:text-gray-200 dark:border-b-slate-800 dark:hover:border-b-violet-500">
              <span class="px-4 py-2 font-semibold text-violet-700 dark:text-violet-500">${list.title}</span>
              <a href="${list.links[0].link}" target="_blank" class="px-4 py-1 text-gray-600 transition duration-200 rounded-md hover:bg-violet-300 dark:text-gray-200 dark:hover:text-slate-800 dark:hover:bg-violet-500">${list.links[0].name}</a>
              <a href="${list.links[1].link}" target="_blank" class="px-4 py-1 text-gray-600 transition duration-200 rounded-md hover:bg-violet-300 dark:text-gray-200 dark:hover:text-slate-800 dark:hover:bg-violet-500">${list.links[1].name}</a>
              <a href="${list.links[2].link}" target="_blank" class="px-4 py-1 text-gray-600 transition duration-200 rounded-md hover:bg-violet-300 dark:text-gray-200 dark:hover:text-slate-800 dark:hover:bg-violet-500">${list.links[2].name}</a>
              <a href="${list.links[3].link}" target="_blank" class="px-4 py-1 text-gray-600 transition duration-200 rounded-md hover:bg-violet-300 dark:text-gray-200 dark:hover:text-slate-800 dark:hover:bg-violet-500">${list.links[3].name}</a>
    </div>
    `
    document.getElementById('card_container').insertAdjacentHTML('beforeend', item);
}

for (const list of CONFIG.bottomLinks) {
    let item = `
    <a href="${list.link}" target="_blank" class="flex flex-row items-center gap-2 px-6 py-2 text-white transition duration-300 rounded-lg shadow-xl bg-violet-600 hover:bg-violet-500 dark:text-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        ${list.name}
    </a>
    `
    document.getElementById('bottom_container').insertAdjacentHTML('beforeend', item);
}

let array_month = [
    {'01' : 'Januari'},{'02' : 'Febrauri'},{'03' : 'Maret'},{'04' : 'April'},{'05' : 'Mei'},{'06' : 'Juni'},{'07' : 'Juli'},
    {'08' : 'Agustus'},{'09' : 'September'},{'10' : 'Oktober'},{'11' : 'November'},{'12' : 'Desember'},
]
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = + dd + '/' + mm + '/' + yyyy;
document.getElementById('date_container').insertAdjacentHTML('beforeend', today);
