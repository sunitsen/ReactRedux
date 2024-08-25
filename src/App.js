import React from 'react'
import Index from './CurdAPP/Route/Index'
// import CounterView from './CounterApp/counter/CounterView'
// import TodosView from './FetchData/TodosView'
// import PostsView from './FetchPosts/postsView'
const App = () => {
  return (
    <div>
   <h1 className='text-center ' style={{ backgroundColor: '#007bff', color: '#ffffff', padding: '1rem' }}>
    App Component
</h1>

      {/* <CounterView/>
      <TodosView/>
      <PostsView/> */}
      <Index/>
    </div>
  )
}

export default App