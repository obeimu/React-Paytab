import "./App.css";
function App() {
  return (
    <div className='App'>
      <form
        action='https://webhook.site/32121b6c-6cdd-4a9d-9265-1d5ede20df9a'
        id='payform'
        name='payform'
        method='post'
      >
        <span id='paymentErrors'></span>
        <div className='row'>
          <label>Card Number</label>
          <input type='text' data-paylib='number' size='20' />
        </div>
        <div className='row'>
          <label>Expiry Date (MM/YYYY)</label>
          <input type='text' data-paylib='expmonth' size='2' />
          <input type='text' data-paylib='expyear' size='4' />
        </div>
        <div className='row'>
          <label>Security Code</label>
          <input type='text' data-paylib='cvv' size='4' />
        </div>
        <input type='submit' value='Place order' />
      </form>
    </div>
  );
}

export default App;
