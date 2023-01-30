import './App.css';
import Example from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table';

const headers = [
  {
    name: 'Name',
    sort: true,
  },
  {
    name: 'Amount',
    sort: true,
  },
  {
    name: 'Category',
  },
];

function formatAmount(amount, currency){
  const options = { style: 'currency', currency };
  const moneyFormat = new Intl.NumberFormat('en-US', options);
  return moneyFormat.format(amount)
}

function getTotalExpense(expenses){
  let total = {};
  expenses?.forEach(expense => {
    if(!(isNaN(total[expense.currency]))){
      total[expense.currency] = total[expense.currency] + expense.amount
    }else {
      total[expense.currency] = expense.amount
    }
  })
  return total
}
const baseURL =
  'http://localhost:8000/api/expenses/resume/63d44d1802556286894e3c51';

function App() {
  const [expensesResume, setExpensesResume] = useState()

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const expensesTitles = Object.keys(response.data)
      const expensesMappedData = expensesTitles.map(expensesTitle => {
        
        return {
          title: expensesTitle,
          amount: response.data[expensesTitle].amount,
          currency: response.data[expensesTitle].currency
        }
      })
      setExpensesResume(expensesMappedData)
    });
  }, []);

  return (
    <>
      <Example />
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
            DashBoard
          </h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <Table headers={headers} total={getTotalExpense(expensesResume)}>
              <tbody >
                {expensesResume?.map((element) => 
                  <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <th
                      scope='row'
                      class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                    {element.title}
                    </th>
                    <td class='px-6 py-4'>{formatAmount(element.amount, element.currency)}</td>
                    <td class='px-6 py-4'></td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
