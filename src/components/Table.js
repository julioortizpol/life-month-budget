export default function Table({ children, headers, total }) {
    function formatAmount(amount, currency){
        const options = { style: 'currency', currency };
        const moneyFormat = new Intl.NumberFormat('en-US', options);
        return moneyFormat.format(amount)
      }
  return (
    <div class='relative overflow-x-auto shadow-md sm:rounded-lg max-h-[32rem]'>
      <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
        <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 left-0 right-0 '>
          <tr>
            {headers?.map((header) => (
              <th scope='col' class='px-6 py-3'>
                <div class='flex items-center'>
                  {header.name}
                  {header.sort && (
                    <a href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='w-3 h-3 ml-1'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 320 512'
                      >
                        <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                      </svg>
                    </a>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        {children}
        <tfoot className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky bottom-0 left-0 right-0">
          <tr class='font-semibold text-gray-900 dark:text-white'>
            <th scope='row' class='px-6 py-3 text-base'>
              Total
            </th>
            <td class='px-6 py-3'>{formatAmount(total.DOP, 'DOP')} - {formatAmount(total.USD, 'USD')}</td>
            <td class='px-6 py-3'></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
