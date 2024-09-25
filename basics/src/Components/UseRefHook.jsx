import React, { useEffect ,useRef} from 'react'


const UseRefHook = () => {
  const data = useRef(null);

  const handleButton = (e) => {
    // e.preventDefault();
    console.log(data.current.value);
  }
  useEffect(()=>{
    data.current.focus()
  },[])
  return (
    <div className='container'>
      <h2>USeReference</h2>
      <form>
        <input type="text" placeholder='Enter Your FirstName' className='form-control' ref={data} />
        <input type="text" placeholder='Enter Your LastName' className='form-control' />
        <input type="text" placeholder='Enter Your Password' className='form-control' />

      </form>
      <button className='btn btn-primary' onClick={handleButton}>Submit</button>
    </div>
  )
}

export default UseRefHook


// => UseState hook will re-render when the content changes and update to UI
// => UseRef doesn't notify when its content changes. (Mutating the .current property)
// =>"It will not cause re-render"
// */