import './App.css'
export function App() {

  return (
    <>
      <div>
        <header>
          <h1>HireTrack</h1>
          <p>Manage your job Appliction in one place..</p>
        </header>
        <main className='dashboard'>
          <div className='welcome'>
            <h2>Welcome back, Jugesh!</h2>
            <p>Here is your job search overview.</p>
          </div>
          <button className='add-btn'>
            + Add Appliction
          </button>
          <div className='stats'>
            <div className='card'>
              <h3>Total Appliction</h3>
              <h2>0</h2>
            </div>
            <div className='card'>
              <h3>Interviews</h3>
              <h2>0</h2>
            </div>
            <div className='card'>
              <h3>Offers</h3>
              <h2>0</h2>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
