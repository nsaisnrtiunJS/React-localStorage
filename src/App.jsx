

const App = () => {

  // To set item to localStorage, we can use the setItem method. It takes two parameters : one is key:value pair.
   localStorage.setItem('name', "John Doe")

  //  To get item from localStorage, we can use the getItem method. It takes one parameter : key 
  const name = localStorage.getItem('name')
  console.log(name)
  // Upar ke sab method ek key-value pair ke sath kaam karte hain 


  // It is used to remove one specific item form localStorage. It takes one parameter : key 
  localStorage.removeItem('name')


  const user = [
    {
      name: 'John Doe',
      age : 27,
      city : 'New York'
    },
    {
      name: 'Sarah Tyler',
      age : 28,
      city : 'Los Angeles'
    },
    {
      name: 'Michael Smith',
      age : 30,
      city : 'Chicago'
    }
  ]

  // Save to localStorage 
  localStorage.setItem('users', JSON.stringify(user))

  // Get users from localStorage 
  const users = JSON.parse(localStorage.getItem('users'))
  console.log(users)


  // to clear all items from localStorage, we can use the clear method. It does not take any parameter. It will remove all the key-value pairs from localStorage
  localStorage.clear()


  return (
    <div>
      <h1> This is localStorage tutorial</h1>
    </div>
  )
}

export default App
